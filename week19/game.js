var theGame = function(game) {
	console.log("%cStarting my awesome game", "color:white; background:red");
};

var dude;
var score = 0;
var jumpTimer = 0;

theGame.prototype = {

	init: function(){
		score = 0;
		
	},

	preload: function() {
		game.load.atlasJSONHash('dude', 'assets/jumping_dude.png', 'assets/jumping_dude.json');
		game.load.image('background', 'assets/background2.png');

		game.load.tilemap('jumps', 'assets/jump-map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/super_mario.png');
	},



	create: function() {
		game.device.canvasBitBltShift = false;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 900;

		bg = game.add.tileSprite(0, 0, 800, 600, 'background');
		bg.fixedToCamera = true;

		var map = game.add.tilemap('jumps');
		map.addTilesetImage('super_mario', 'tiles');

		map.setCollisionBetween(14, 16);
		map.setCollisionBetween(20, 25);
		map.setCollisionBetween(27, 29);
		map.setCollision(40);

		map.setTileIndexCallback(11, this.hitCoin, this);
		map.setTileIndexCallback(12, this.hitShroom, this);

		layer = map.createLayer('Tile Layer 1');
		// layer.debug = true;
		layer.resizeWorld();

		dude = game.add.sprite(0*16, 498*16, 'dude');
		//dude = game.add.sprite(39 * 16, 8 * 16, 'dude');
		game.physics.enable(dude);

		dude.body.collideWorldBounds = true;

		dude.scale.setTo(0.2, 0.1);
		dude.anchor.setTo(0.5, 0.5);
		// dude.body.setSize(10, 10);

		dude.body.bounce.y = 0.2;
		dude.body.linearDamping = 1;

		dude.animations.add('jump', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], 15);
		dude.animations.add('walk', [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]);

		game.camera.follow(dude, Phaser.Camera.FOLLOW_PLATFORMER);
		game.physics.enable(game.camera);
		// game.camera.x = 300;
		jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


		scoreScreen = game.add.text(0, 0, "Score: 0", {
			font: "30pt Courier",
			fill: "#ffffff",
			stroke: "#ffffff",
			strokeThickness: 2
		});
		scoreScreen.fixedToCamera = true;

		soundtrack = game.add.audio('soundtrack');
		coin = game.add.audio('coin');
		jump = game.add.audio('jump');
		soundtrack.play("", 0, 0.6, true);

	},


	hitShroom: function(sprite, tile) {
		coin.play();
		soundtrack.stop();
		this.game.state.start("GameOver", true, false, score);
		return false;
	},

	hitCoin: function(sprite, tile) {
		coin.play();
		tile.index = 1;
		score++;
		tile.layer.dirty = true;
		scoreScreen.setText("Score: " + score);
		return false;
	},


	update: function() {
		dude.body.velocity.x = 0;
		game.physics.arcade.collide(dude, layer);

		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			if (dude.scale.x > 0) {
				dude.scale.x *= -1;
			}

			if (dude.body.onFloor()) {
				dude.play("walk");
			}

			dude.body.velocity.x = -150;
		} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			if (dude.scale.x < 0) {
				dude.scale.x *= -1;
			}
			if (dude.body.onFloor()) {
				dude.play("walk");
			}
			dude.body.velocity.x = 150;
		}

		if (jumpButton.isDown && dude.body.onFloor() && game.time.now > jumpTimer) {
			jump.play();
			dude.animations.play('jump');
			dude.body.velocity.y = -500;
			jumpTimer = game.time.now + 750;
		}

	},

	render: function() {
		// game.debug.spriteInfo(dude, 20, 32);
		// 	game.debug.body(dude);
		// 	game.debug.bodyInfo(dude, 16, 24);
		// 	game.debug.cameraInfo(game.camera, 16, 345);
	}
};
