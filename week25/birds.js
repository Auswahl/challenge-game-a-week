var Bird = function(game, tint) {
	Phaser.Sprite.call(this, game, 0, 0, 'bird');
	// Set the pivot point for this sprite to the center
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(0.5, 0.5);
	this.tint = tint;

	// Enable physics on the Bird
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.animations.add('fly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15, true);
	this.animations.play('fly');

	this.direction = 0;
	this.directionAngle = 0;

};
// Birds are a type of Phaser.Sprite
Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

// Bird constructor

var Flock = function(game, predator) {
	Phaser.Group.call(this, game);

	this.game = game;
	this.SCARCITY = 80;
	globalGroup.add(this);
};
Flock.prototype = Object.create(Phaser.Group.prototype);
Flock.prototype.constructor = Flock;

Flock.prototype.update = function() {
	var left, right;
	right = game.world.camera.x + game.world.camera.width;
	if (this.lastBird && this.lastBird.x > right - this.SCARCITY) {
		return;
	}

	this.checkAndRemoveInvisible();

	this.lastBird = new Bird(this.game, this.game.rnd.integerInRange(0, 0xffffff));
	this.lastBird.x = this.game.rnd.integerInRange(right, right + this.SCARCITY);
	this.lastBird.y = this.game.rnd.integerInRange(50, this.game.height - 50);

	this.add(this.lastBird);

};

Flock.prototype.checkAndRemoveInvisible = function() {
	var bird = this.getFirstAlive();
	if (bird && bird.x < game.world.camera.x) {
		this.remove(bird, true);
	}
};

Flock.prototype.bury = function(bird) {
	this.remove(bird, true);
};
