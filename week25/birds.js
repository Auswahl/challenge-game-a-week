var Bird = function(game, tint) {
	Phaser.Sprite.call(this, game, 0, 0, 'bird');
	// Set the pivot point for this sprite to the center
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(0.5, 0.5);
	this.tint = tint;

	// Enable physics on the Bird
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	// Define constants that affect motion
	this.SPEED = 150; // Bird speed pixels/second
	this.TURN_RATE = 5; // turn rate in degrees/frame
	this.WOBBLE_LIMIT = 15; // degrees
	this.WOBBLE_SPEED = 200; // milliseconds
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
	this.animations.add('fly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15, true);
	this.animations.play('fly');

	this.direction = 0;
	this.directionAngle = 0;

};
// Birds are a type of Phaser.Sprite
Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

// Bird constructor
var TakenBird = function(game) {
	Bird.call(this, game, 0x000);

	this.SMOKE_LIFETIME = 1000; // milliseconds

	// Add a smoke emitter with 100 particles positioned relative to the
	// bottom center of this Bird
	this.smokeEmitter = this.game.add.emitter(0, 0, 100);

	// Set motion parameters for the emitted particles
	this.smokeEmitter.gravity = 0;
	this.smokeEmitter.setXSpeed(0, 0);
	this.smokeEmitter.setYSpeed(-80, -50); // make smoke drift upwards
	this.smokeEmitter.setScale(0.5, 0.1, 0.5, 0.1, this.SMOKE_LIFETIME);
	// Make particles fade out after 1000ms
	this.smokeEmitter.setAlpha(1, 0, this.SMOKE_LIFETIME, Phaser.Easing.Linear.InOut);
	// Create the actual particles
	this.smokeEmitter.makeParticles('bird', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

	this.smokeEmitter.forEach(function(particle) {
		// tint every particle red
		particle.tint = 0x000;
	});

	// Start emitting smoke particles one at a time (explode=false) with a
	// lifespan of this.SMOKE_LIFETIME at 50ms intervals
	this.smokeEmitter.start(false, this.SMOKE_LIFETIME, 50);

};

// Birds are a type of Phaser.Sprite
TakenBird.prototype = Object.create(Bird.prototype);
TakenBird.prototype.constructor = TakenBird;

TakenBird.prototype.update = function() {
	// If this Bird is dead, don't do any of these calculations
	// Also, turn off the smoke emitter
	if (!this.alive) {
		this.smokeEmitter.on = false;
		return;
	} else {
		this.smokeEmitter.on = true;
	}

	// Position the smoke emitter at the center of the Bird
	this.smokeEmitter.x = this.x;
	this.smokeEmitter.y = this.y;

	// Calculate the angle from the Bird to the mouse cursor game.input.x
	// and game.input.y are the mouse position; substitute with whatever
	// target coordinates you need.
	var targetAngle = this.game.math.angleBetween(
		this.x, this.y,
		target.x, target.y
	);

	// Add our "wobble" factor to the targetAngle to make the Bird wobble
	// Remember that this.wobble is tweening (above)
	targetAngle += this.game.math.degToRad(this.wobble);


	// Make each Bird steer away from other Birds.
	// Each Bird knows the group that it belongs to (BirdGroup).
	// It can calculate its distance from all other Birds in the group and
	// steer away from any that are too close. This avoidance behavior prevents
	// all of the Birds from bunching up too tightly and following the
	// same track.
	var avoidAngle = 0;
	this.parent.forEachAlive(function(m) {
		// Don't calculate anything if the other Bird is me
		if (this == m) return;

		// Already found an avoidAngle so skip the rest
		if (avoidAngle !== 0) return;

		// Calculate the distance between me and the other Bird
		var distance = this.game.math.distance(this.x, this.y, m.x, m.y);

		// If the Bird is too close...
		if (distance < this.AVOID_DISTANCE) {
			// Chose an avoidance angle of 90 or -90 (in radians)
			avoidAngle = Math.PI / 2; // zig
			if (this.game.math.chanceRoll(50)) avoidAngle *= -1; // zag
		}
	}, this);

	// Add the avoidance angle to steer clear of other Birds
	targetAngle += avoidAngle;

	// Gradually (this.TURN_RATE) aim the Bird towards the target angle
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


var GoodBirdsPack = function(game) {
	this.game = game;
	this.lightPack = this.game.add.group();
	this.SCARCITY = 300;
};

GoodBirdsPack.prototype.update = function() {

	var right = game.world.camera.x + game.world.camera.width;
	if (this.lastSpritePosition < right - SCARCITY) {

	if (this.firstIsOutOfBounds()) {
		removeFirst();
	}
	var left, right;
	if (!this.lastBird) {
		right = this.game.height;
		left = 0;
	} else {
		left = this.lastBird.x;
		right = left + this.SCARCITY;
	}

	this.lastBird = new Bird(this.game, 0x00ff00);
	this.lastBird.x = this.game.rnd.integerInRange(left+50, right - 50);
	this.lastBird.y = this.game.rnd.integerInRange(50, this.game.height - 50);
	this.lightPack.add(this.lastBird);


};

