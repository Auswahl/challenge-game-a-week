var GameState = function(game) {
	this.MAX_PACK = 10; // number of missiles
};


// Load images and sounds
GameState.prototype.preload = function() {
	// this.game.load.image('rocket', '/assets/gfx/rocket.png');
	this.game.load.image('tree1', 'assets/background/trees/1.png');
	this.game.load.image('tree2', 'assets/background/trees/2.png');
	this.game.load.image('tree3', 'assets/background/trees/3.png');
	this.game.load.image('tree4', 'assets/background/trees/4.png');
	this.game.load.image('tree5', 'assets/background/trees/5.png');
	this.game.load.image('tree6', 'assets/background/trees/6.png');
	this.game.load.image('tree7', 'assets/background/trees/7.png');
	this.game.load.image('tree8', 'assets/background/trees/8.png');
	this.game.load.image('tree9', 'assets/background/trees/9.png');
	this.game.load.image('tree10', 'assets/background/trees/10.png');
	this.game.load.image('tree11', 'assets/background/trees/11.png');
	this.game.load.image('tree12', 'assets/background/trees/12.png');
	this.game.load.image('tree13', 'assets/background/trees/13.png');
	this.game.load.image('tree14', 'assets/background/trees/14.png');
	this.game.load.image('tree15', 'assets/background/trees/15.png');
	this.game.load.image('tree16', 'assets/background/trees/16.png');
	this.game.load.image('grass', 'assets/background/grass.png');
	this.game.load.image('terrain', 'assets/background/terrain.png');
	this.game.load.image('cloud', 'assets/background/cloud.png');

	game.load.atlasJSONHash('raven', 'assets/sprites/crow.png', 'assets/sprites/crow.js');
	game.load.spritesheet('bird', 'assets/sprites/bird.png', 68, 71);
};

var globalGroup;
// Setup the example
GameState.prototype.create = function() {
	// Set stage background to something sky colored
	this.game.stage.backgroundColor = 0x4488cc;
	game.world.setBounds(0, 0, 1920, 450);
	this.cursors = game.input.keyboard.createCursorKeys();

	globalGroup = game.add.group();

	this.raven = new Raven(game, this.cursors);
	this.murder = new Murder(this.game, this.raven);
	this.prey = new Flock(this.game, this.raven);



	this.background = new Background(game);

	// Simulate a pointer click/tap input at the center of the stage
	// when the example begins running.
	// this.game.input.activePointer.x = this.game.width / 2;
	// this.game.input.activePointer.y = this.game.height / 2 - 100;
	this.previousCameraPosition = 0;
	globalGroup.sort();
	this.CAM_SPEED = 3;
};

// The update() method is called every frame
GameState.prototype.update = function() {
	var velocity = this.camera.x - this.previousCameraPosition;
	if (velocity <= this.CAM_SPEED) {
		this.camera.x += this.CAM_SPEED;
	}
	this.previousCameraPosition = this.camera.x;

	this.game.world.setBounds(
		game.world.camera.x,
		this.game.world.bounds.y,
		game.world.width*2,
		this.game.world.bounds.height);

	this.background.update();
	this.murder.update();
	this.prey.update();

	game.physics.arcade.collide(this.raven, this.prey, this.attackHandler, null, this);

};

GameState.prototype.attackHandler = function(raven, bird) {
	this.prey.bury(bird);
	this.murder.launchBird(bird.x, bird.y);
};

var extend = function(defaults, options) {
	var extended = {};
	var prop;
	for (prop in defaults) {
		if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
			extended[prop] = defaults[prop];
		}
	}
	for (prop in options) {
		if (Object.prototype.hasOwnProperty.call(options, prop)) {
			extended[prop] = options[prop];
		}
	}
	return extended;
};

var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
