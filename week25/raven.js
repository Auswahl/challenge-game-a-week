var Raven = function(game, cursors) {
	Phaser.Sprite.call(this, game, 100, 100, 'raven');
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
	this.z = 7;
	globalGroup.addChild(this);

};
Raven.prototype = Object.create(Phaser.Sprite.prototype);
Raven.prototype.constructor = Raven;


Raven.prototype.update = function() {
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
