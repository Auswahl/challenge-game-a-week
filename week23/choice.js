var Choice = function(game) {

};

Choice.prototype = {
	preload: function() {
		game.load.image("bg", "assets/back/scenechoice.jpg");
		game.load.spritesheet("megafon-choice", "assets/char/megafon-choice.png", 150, 202);
		game.load.spritesheet("mts-choice", "assets/char/mts-choice.png", 142, 249);
	},

	create: function() {
		var bg = game.add.sprite(0, 0, 'bg');
		bg.height = 600;
		bg.width = 800;

		button = this.game.add.button(
			game.world.centerX/2,
			500,
			'megafon-choice', this.startAsMegafon, this, 1, 0, 1, 0);
		button.anchor.setTo(0.5, 1);

		button = this.game.add.button(
			game.world.centerX*1.5,
			500,
			'mts-choice', this.startAsMts, this, 1, 0, 1, 0);

		button.anchor.setTo(0.5, 1);
	},

	startAsMts: function() {
		game.sound.play('clickSound');
		this.game.globals.heroIs = 'mts';
		this.game.state.start("TheGame");
	},

	startAsMegafon: function() {
		game.sound.play('clickSound');
		this.game.globals.heroIs = 'megafon';
		this.game.state.start("TheGame");
	},
};
