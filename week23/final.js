var Final = function(game) {

};

Final.prototype = {
	preload: function() {
		game.load.image("bg", "assets/back/final.jpg");
		game.load.image("loosemegafon", "assets/back/loosemegafon.png");
		game.load.image("loosemts", "assets/back/loosemts.png");
		game.load.image("winmegafon", "assets/back/winmegafon.png");
		game.load.image("winmts", "assets/back/winmts.png");
		game.load.image("btnresstart", "assets/back/btnrestart.jpg");

	},

	create: function() {
		game.input.enabled = true;
		var bg = game.add.sprite(0, 0, 'bg');
		bg.height = 600;
		bg.width = 800;

		var resultMessage;
		if (this.game.globals.result === 'mtswon') {
			resultMessage = this.game.add.image(game.world.centerX, game.world.centerY, 'winmts');
		} else if (this.game.globals.result === 'megafonwon') {
			resultMessage = this.game.add.image(game.world.centerX, game.world.centerY, 'winmegafon');
		} else if(this.game.globals.result === 'mtslost') {
			resultMessage = this.game.add.image(game.world.centerX, game.world.centerY, 'loosemts');
		} else {
			resultMessage = this.game.add.image(game.world.centerX, game.world.centerY, 'loosemegafon');
		}
		resultMessage.anchor.set(0.5, 0.5);
		this.game.add.image();
		button = this.game.add.button(
			game.world.centerX,
			500,
			'btnresstart', this.restart, this);
		button.anchor.setTo(0.5, 0.5);
	},

	restart: function() {
		game.sound.play('clickSound');
		this.game.state.start("Choice");
	},
};
