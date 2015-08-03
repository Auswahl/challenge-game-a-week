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
	this.input.recordPointerHistory = true;
	this.input.recordLimit = 10;
	game.input.onUp.add(this.attack, this);
	game.input.onDown.add(this.ready, this);

	globalGroup = game.add.group();

	this.murder = new Murder(this.game, this.raven);
	this.prey = new Flock(this.game, this.raven);
	this.background = new Background(game);

	// this.raven = new Raven(game, this.cursors);
	// this.raven.inputEnabled = true;
	// this.raven.events.onInputDown.add(this.loginput, this);
	// this.raven.events.onInputUp.add(this.loginput, this);

	this.previousCameraPosition = 0;
	globalGroup.sort();
	this.CAM_SPEED = 3;


};

GameState.prototype.ready = function(pointer) {
	SPEED = 0;
};

GameState.prototype.attack = function(pointer) {

	var bmd = game.add.bitmapData(game.world.width, game.world.height);
	var sprite = game.add.sprite(0, 0, bmd);
	bmd.ctx.fillStyle = "rgba(0, 1, 1, 0.1)";
	bmd.ctx.fillRect(0, 0, 800, 600);
	bmd.ctx.beginPath();
	bmd.ctx.strokeStyle = "white";


	var drawLine = function(point) {
		bmd.ctx.lineTo(point.x, point.y);
		bmd.ctx.lineWidth = 2;
		bmd.ctx.stroke();
		bmd.dirty = true;
	};

	for(var i in pointer._history) {
		console.log(pointer._history[i]);
		game.time.events.add(100*i, drawLine.bind(this, pointer._history[i]));
	}

	game.time.events.add(100 * pointer._history.length + 200, function() {
		bmd.ctx.closePath();

		sprite.destroy();
		SPEED = 2;
	});


};


// The update() method is called every frame
GameState.prototype.update = function() {
	// var velocity = this.camera.x - this.previousCameraPosition;
	// if (velocity <= this.CAM_SPEED) {
	// 	this.camera.x += this.CAM_SPEED;
	// }
	// this.previousCameraPosition = this.camera.x;

	// this.game.world.setBounds(
	// 	game.world.camera.x,
	// 	this.game.world.bounds.y,
	// 	game.world.width*2,
	// 	this.game.world.bounds.height);

	this.background.update();
	// this.murder.update();
	// this.prey.update();

	// game.physics.arcade.collide(this.raven, this.prey, this.attackHandler, null, this);



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

var game = new Phaser.Game(800, 450, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
