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
	this.game.load.image('tree17', 'assets/background/trees/17.png');

	game.load.atlasJSONHash('raven', 'assets/sprites/crow.png', 'assets/sprites/crow.js');
	game.load.spritesheet('bird', 'assets/sprites/bird.png', 68, 71);
};

var target;
// Setup the example
GameState.prototype.create = function() {
	// Set stage background to something sky colored
	this.game.stage.backgroundColor = 0x4488cc;
	game.world.setBounds(0, 0, 1920, 600);

	// Create a group to hold the missile
	this.murder = new Murder(this.game);
	this.goodies = new Flock(this.game);

	// Simulate a pointer click/tap input at the center of the stage
	// when the example begins running.
	this.game.input.activePointer.x = this.game.width / 2;
	this.game.input.activePointer.y = this.game.height / 2 - 100;

	this.cursors = game.input.keyboard.createCursorKeys();

	target = this.raven = new Raven(game, this.cursors, 100, 100);

	this.lastSpritePosition = 0;
	while(this.lastSpritePosition <= game.world.camera.x + game.world.camera.width) {
		this.addNextSprite(this.lastSpritePosition + SCARCITY);
	}

	var bush = game.add.sprite(0, game.world.height, 'tree1');
	bush.anchor.set(0.5, 1);

};

// The update() method is called every frame
GameState.prototype.update = function() {
	this.game.world.setBounds(
		game.world.camera.x,
		this.game.world.bounds.y,
		game.world.width*2,
		this.game.world.bounds.height);

	this.updateBackground();
	this.murder.update();
	this.goodies.update();

};
var SCARCITY = 10;
GameState.prototype.updateBackground = function() {

	var right = game.world.camera.x + game.world.camera.width;
	if (this.lastSpritePosition < right - SCARCITY) {
		this.addNextSprite(right);
	}

};

GameState.prototype.addNextSprite = function(right) {
	var sprite = this.chooseFromSprites(right);
	this.lastSpritePosition = this.rnd.integerInRange(right, right + SCARCITY);
	var tree = game.add.sprite(this.lastSpritePosition, game.world.height, sprite);
	tree.anchor.set(0, 1);
};

GameState.prototype.chooseFromSprites = function(right) {

	if (right < 1000) {
		return "tree" + this.rnd.integerInRange(1, 11);
	} else if ( 1000 < right && right < 2000) {
		return "tree" + this.rnd.integerInRange(1, 16);
	} else {
		return "tree" + this.rnd.integerInRange(12, 16);
	}

};

var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
