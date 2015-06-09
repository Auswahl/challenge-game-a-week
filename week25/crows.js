
//Crow constructor

var Crow = function(game, cursors, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'crow');
	game.add.existing(this);

	this.cursors = cursors;
	// Set the pivot point for this sprite to the center
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(1, 1);

	// Enable physics on the missile
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.animations.add('fly-right', ["7", "8", "9"], 8, true);
	this.animations.add('fly-left', ["4", "5", "6"], 8, true);
	this.animations.add('fly-down', ["1", "2", "3"], 8, true);
	this.animations.add('fly-up', ["10", "11", "12"], 8, true);

	this.animations.play('fly-right');
	game.camera.follow(this);
	this.body.collideWorldBounds = true;

};
Crow.prototype = Object.create(Phaser.Sprite.prototype);
Crow.prototype.constructor = Crow;


Crow.prototype.update = function() {
	if(this.cursors.left.isDown) {
		this.angle += 5;
	} else if (this.cursors.right.isDown) {
		this.angle -= 5;

	}

	game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);

	if (-3*Math.PI/4 <= this.rotation && this.rotation <= -Math.PI/4) {
		this.animations.play('fly-down');
	} else if (3*Math.PI/4 <= this.rotation || this.rotation <= -3 *Math.PI/4) {
		this.animations.play('fly-left');
	} else if (Math.PI/4 <= this.rotation && this.rotation <= 3 *Math.PI/4) {
		this.animations.play('fly-up');
	} else {
		this.animations.play('fly-right');
	}
};

// Missile constructor
var Missile = function(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'bird');
	// Set the pivot point for this sprite to the center
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(0.5, 0.5);

	// Enable physics on the missile
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	// Define constants that affect motion
	this.SPEED = 150; // missile speed pixels/second
	this.TURN_RATE = 5; // turn rate in degrees/frame
	this.WOBBLE_LIMIT = 15; // degrees
	this.WOBBLE_SPEED = 200; // milliseconds
	this.SMOKE_LIFETIME = 200; // milliseconds
	this.AVOID_DISTANCE = 30; // pixels

	// Create a variable called wobble that tweens back and forth between
	// -this.WOBBLE_LIMIT and +this.WOBBLE_LIMIT forever
	this.wobble = this.WOBBLE_LIMIT;
	this.game.add.tween(this)
		.to({
				wobble: -this.WOBBLE_LIMIT
			},
			this.WOBBLE_SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
			Number.POSITIVE_INFINITY, true
		);

	// Add a smoke emitter with 100 particles positioned relative to the
	// bottom center of this missile
	this.smokeEmitter = this.game.add.emitter(0, 0, 100);

	// Set motion parameters for the emitted particles
	this.smokeEmitter.gravity = 0;
	this.smokeEmitter.setXSpeed(0, 0);
	this.smokeEmitter.setYSpeed(-80, -50); // make smoke drift upwards

	// Make particles fade out after 1000ms
	this.smokeEmitter.setAlpha(1, 0, this.SMOKE_LIFETIME,
		Phaser.Easing.Linear.InOut);

	// Create the actual particles
	// this.smokeEmitter.makeParticles('bird');

	// Start emitting smoke particles one at a time (explode=false) with a
	// lifespan of this.SMOKE_LIFETIME at 50ms intervals
	// this.smokeEmitter.start(false, this.SMOKE_LIFETIME, 50);
	this.animations.add('fly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15, true);
	this.animations.play('fly');

	this.direction = 0;
	this.directionAngle = 0;

};

// Missiles are a type of Phaser.Sprite
Missile.prototype = Object.create(Phaser.Sprite.prototype);
Missile.prototype.constructor = Missile;

Missile.prototype.update = function() {
	// If this missile is dead, don't do any of these calculations
	// Also, turn off the smoke emitter
	if (!this.alive) {
		this.smokeEmitter.on = false;
		return;
	} else {
		this.smokeEmitter.on = true;
	}

	// Position the smoke emitter at the center of the missile
	this.smokeEmitter.x = this.x;
	this.smokeEmitter.y = this.y;

	// Calculate the angle from the missile to the mouse cursor game.input.x
	// and game.input.y are the mouse position; substitute with whatever
	// target coordinates you need.
	var targetAngle = this.game.math.angleBetween(
		this.x, this.y,
		target.x, target.y
	);

	// Add our "wobble" factor to the targetAngle to make the missile wobble
	// Remember that this.wobble is tweening (above)
	targetAngle += this.game.math.degToRad(this.wobble);


	// Make each missile steer away from other missiles.
	// Each missile knows the group that it belongs to (missileGroup).
	// It can calculate its distance from all other missiles in the group and
	// steer away from any that are too close. This avoidance behavior prevents
	// all of the missiles from bunching up too tightly and following the
	// same track.
	var avoidAngle = 0;
	this.parent.forEachAlive(function(m) {
		// Don't calculate anything if the other missile is me
		if (this == m) return;

		// Already found an avoidAngle so skip the rest
		if (avoidAngle !== 0) return;

		// Calculate the distance between me and the other missile
		var distance = this.game.math.distance(this.x, this.y, m.x, m.y);

		// If the missile is too close...
		if (distance < this.AVOID_DISTANCE) {
			// Chose an avoidance angle of 90 or -90 (in radians)
			avoidAngle = Math.PI / 2; // zig
			if (this.game.math.chanceRoll(50)) avoidAngle *= -1; // zag
		}
	}, this);

	// Add the avoidance angle to steer clear of other missiles
	targetAngle += avoidAngle;

	// Gradually (this.TURN_RATE) aim the missile towards the target angle
	if (this.direction !== targetAngle) {
		// Calculate difference between the current angle and targetAngle
		var delta = targetAngle - this.direction;

		// Keep it in range from -180 to 180 to make the most efficient turns.
		if (delta > Math.PI) delta -= Math.PI * 2;
		if (delta < -Math.PI) delta += Math.PI * 2;

		if (delta > 0) {
			// Turn clockwise
			this.direction += this.game.math.degToRad(this.TURN_RATE);
		} else {
			// Turn counter-clockwise
			this.direction -= this.game.math.degToRad(this.TURN_RATE);
		}

		// Just set angle to target angle if they are close
		if (Math.abs(delta) < this.game.math.degToRad(this.TURN_RATE)) {
			this.direction = targetAngle;
		}
	}

	// Calculate velocity vector based on this.direction and this.SPEED
	this.body.velocity.x = Math.cos(this.direction) * this.SPEED;
	this.body.velocity.y = Math.sin(this.direction) * this.SPEED;
};
