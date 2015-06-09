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
			// this.scale.forceOrientation(true, false);
			// this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
			// this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
			this.checkOrientaion();

			window.addEventListener("resize", this.checkOrientaion, false);

		}


		game.scale.refresh();
	},

	preload: function() {

		game.load.image("bg", "assets/back/front.png");
		game.load.image("buttonStart", "assets/control/button1.jpg");
		this.game.load.audio('explosion', 'assets/sound/explosion.mp3');
		this.game.load.audio('soundtrack', 'assets/sound/wind.mp3');
	

	},

	create: function() {
		var bg = game.add.sprite(0, 0, 'bg');
		bg.height = 600;
		bg.width = 800;
		game.sound.play('soundtrack', 1, true);

		
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
		this.game.state.start("TheGame");
	},

	checkOrientaion: function() {
		if(window.innerHeight > window.innerWidth){
			document.getElementById('orientation').style.display = 'block';
		} else {
			document.getElementById('orientation').style.display = 'none';
		}
	},
};