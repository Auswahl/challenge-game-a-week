var cover = function(game) {
	// body...
};

cover.prototype.preload = function() {
	this.game.load.image("loading", "assets/pony/cover.jpg");
	this.game.load.image('buttonStart', 'assets/pony/btn.jpg');
	this.game.load.image('introBg', 'assets/pony/backhill.jpg');

	this.game.load.image('background', 'assets/pony/backhill.jpg');
	


	this.game.load.image('pony1', 'assets/pony/pony1.png');
	this.game.load.image('pony2', 'assets/pony/pony2.png');
	this.game.load.image('pony3', 'assets/pony/pony3.png');
	this.game.load.image('pony4', 'assets/pony/pony4.png');
	this.game.load.image('pony5', 'assets/pony/pony5.png');
	this.game.load.image('pony6', 'assets/pony/pony6.png');

	this.game.load.audio('soundtrack', 'assets/sounds/cabaret.mp3');

};

var startGame = function() {
	this.game.state.start("TheGame");

};

cover.prototype.create = function() {
	var bg = game.add.tileSprite(0, 0, 800, 600, 'loading');

	game.scale.maxWidth = 800;
	game.scale.maxHeight = 600;

	//  Then we tell Phaser that we want it to scale up to whatever the browser can handle, but to do it proportionally
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();
	game.scale.pageAlignVertically = true;
	button = this.game.add.button(game.world.centerX, game.world.centerY + game.world.height / 3, 'buttonStart', startGame, this);
	button.anchor.setTo(0.5, 0.5);
	button.input.useHandCursor = true;
};
