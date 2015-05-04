var intro = function(game) {
	// body...
};

intro.prototype.preload = function() {

	//  This sets a limit on the up-scale
	game.scale.maxWidth = 800;
	game.scale.maxHeight = 600;

	//  Then we tell Phaser that we want it to scale up to whatever the browser can handle, but to do it proportionally
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();
	game.scale.pageAlignVertically = true;


	this.game.load.image('background', 'assets/background3.jpg');
	this.game.load.image('backgroundfinal', 'assets/background3.jpg');
	this.game.load.image('buttonStart', 'assets/button1.png');
	this.game.load.image('buttonRestart', 'assets/button2.png');
	this.game.load.image('logo', 'assets/logo1.png');
	this.game.load.image('logofinal', 'assets/logofinal.png');
	//this.game.load.image('mush', 'assets/logo1.png');


	game.load.audio('soundtrack', 'assets/soundtrack.mp3');
	game.load.audio('coin', 'assets/coin.wav');
	game.load.audio('jump', 'assets/jump.wav');
	game.load.audio('final', 'assets/final.wav');


};

var startGame = function() {
	this.game.state.start("TheGame");

};

intro.prototype.create = function() {
	bg = game.add.tileSprite(0, 0, 800, 600, 'background');
	bg.fixedToCamera = true;

	game.add.image(game.world.centerX - game.world.width / 3, game.world.centerY - game.world.height / 3, 'logo');

	button = this.game.add.button(game.world.centerX, game.world.centerY + game.world.height / 3, 'buttonStart', startGame, this);
	button.anchor.setTo(0.5, 0.5);
	button.input.useHandCursor = true;
	// button.width = 200;
	// button.height = 50;



};
