var TheGame = function(game) {
	// body...
};

TheGame.prototype.preload = function() {
	game.load.atlasJSONHash('megafon', 'assets/megafon/sprites.png', 'assets/megafon/sprites.js');
};


TheGame.prototype.create = function() {
	this.megafon = game.add.sprite(game.world.centerX, game.world.centerY, 'megafon');
	this.megafon.anchor.setTo(0.5, 0.5);
	this.megafon.scale.setTo(2, 2);

	this.megafon.animations.add('block', ["block-up_001.png", "block-up_000.png"], 3);
	this.megafon.animations.add('attack', ["standing-puch_000.png", "standing-puch_001.png", "standing-puch_002.png", "standing-puch_003.png", "standing-puch_004.png", "standing-puch_005.png"], 10);
	this.megafon.animations.add('walkForwardStart', ["walking-forward_000.png", "walking-forward_001.png", "walking-forward_002.png", "walking-forward_003.png", "walking-forward_004.png", "walking-forward_005.png", "walking-forward_006.png", "walking-forward_007.png"], 16);
	this.megafon.animations.add('walkBackwardStart', ["walking-back_000.png", "walking-back_001.png", "walking-back_002.png", "walking-back_003.png", "walking-back_004.png", "walking-back_005.png", "walking-back_006.png", "walking-back_007.png"], 16);


	var blockKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	blockKey.onDown.add(this.blockStart, this);

	var attackKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
	attackKey.onDown.add(this.attackStart, this);

	var walkForwardKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	walkForwardKey.onUp.add(this.walkForwardStop, this);

};

TheGame.prototype.blockStart = function() {
	this.megafon.animations.play('block');
};

TheGame.prototype.attackStart = function() {
	this.megafon.animations.play('attack');
};

TheGame.prototype.walkForwardStart = function() {
	this.megafon.animations.play('walkForwardStart');
};

TheGame.prototype.walkForwardStop = function() {
	this.megafon.animations.stop('walkForwardStart');

	this.megafon.frameName = 'standing-puch_000.png';
};

TheGame.prototype.walkBackwardStart = function() {

	this.megafon.animations.play('walkBackwardStart');
};


TheGame.prototype.walkBackwardStop = function() {
	this.megafon.animations.stop('walkBackwardStart');

	this.megafon.frameName = 'standing-puch_000.png';
};


TheGame.prototype.update = function() {

	if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		this.walkForwardStart();
		
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		this.walkBackwardStart();
	}
};

TheGame.prototype.render = function() {
	game.debug.spriteInfo(this.megafon, 20, 32);

};
