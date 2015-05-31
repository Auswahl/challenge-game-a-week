var cover = function(game) {
	// body...
};

cover.prototype.preload = function() {
	this.game.load.image("loading", "assets/intro1.jpg");
	this.game.load.image('buttonStart', 'assets/button1.jpg');
	this.game.load.image('introBg', 'assets/back1.jpg');

};

var startGame = function() {
	this.game.state.start("Intro");

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
