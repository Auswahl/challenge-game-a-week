var Cover = function(game) {

};

Cover.prototype = {
	init: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.maxWidth = 800;
		game.scale.maxHeight = 600;
		game.scale.pageAlignVertically = true;
		game.scale.pageAlignHorizontally = true;

		if (!this.game.device.desktop) {
			this.scale.forceOrientation(true, false);
			this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
			this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
		}
		game.scale.refresh();
	},

	preload: function() {

		game.load.image("bg", "assets/back/cover.jpg");
		game.load.image("buttonStart", "assets/back/btnstart.jpg");
		this.game.load.audio('clickSound', 'assets/sound/click.wav');
		this.game.load.audio('soundtrack', 'assets/sound/soundtrack.mp3');

	},

	create: function() {
		var bg = game.add.sprite(0, 0, 'bg');
		bg.height = 600;
		bg.width = 800;
		game.sound.play('soundtrack');

		
		button = this.game.add.button(
			game.world.centerX,
			game.world.centerY + game.world.height / 3,
			'buttonStart', this.startIntro, this);
		button.anchor.setTo(0.5, 0.5);
	},

	startIntro: function() {
		if (!this.game.device.desktop) {
			game.scale.startFullScreen();
		}
		game.sound.play('clickSound');
		this.game.state.start("Legend");
	},

	enterIncorrectOrientation: function() {
		this.orientated = false;
		document.getElementById('orientation').style.display = 'block';
	},

	leaveIncorrectOrientation: function() {
		this.orientated = true;
		document.getElementById('orientation').style.display = 'none';
	}
};
