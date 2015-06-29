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

var Flock = function(game) {
	this.game = game;
	this.lightPack = this.game.add.group();
	this.SCARCITY = 300;
};

Flock.prototype.update = function() {
	var left, right;
	right = game.world.camera.x + game.world.camera.width;
	if (this.lastSpritePosition < right - SCARCITY) {
	}

	// if (this.checkAndRemove()) {
	// 	this.removeFirst();
	// }

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
	// this.lightPack.add(this.lastBird);

};

Flock.prototype.firstIsOutOfBounds = function() {
	return false;
};