var Herocomes = function(game) {

};

Herocomes.prototype = {
	preload: function() {
		game.load.image("bg", "assets/back/scenemegafon.jpg");
		game.load.image("buttonNext", "assets/back/btnnext.jpg");
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
		this.game.state.start("Fas");
	},
};
