var Fas = function(game) {

};

Fas.prototype = {
	preload: function() {
		game.load.image("bg", "assets/back/scenefas.jpg");
		game.load.spritesheet("buttonNext", "assets/back/btnnext.jpg");
		this.game.load.audio('winSound', 'assets/sound/win.wav');

	},

	create: function() {
		var bg = game.add.sprite(0, 0, 'bg');
		bg.height = 600;
		bg.width = 800;

		button = this.game.add.button(
			game.world.centerX,
			game.world.centerY + game.world.height / 3,
			'buttonNext', this.startIntro, this);
		button.anchor.setTo(0.5, 0.5);
	},

	startIntro: function() {
		if (!this.game.device.desktop) {
			game.scale.startFullScreen();
		}
		game.sound.play('clickSound');
		this.game.state.start("Choice");
	},
};
