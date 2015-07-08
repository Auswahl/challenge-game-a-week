var Background = function(game) {
	this.SCARCITY = 10;
	this.lastSpritePosition = 0;

	this.layers = [];

	this.layers.push(new BgLayer(game, {
		scrollFactor: 0.2,
		y: game.world.height - 40,
		z: 9,
		scale: 0.8,

	}));
	this.layers.push(new BgLayer(game, {
		scrollFactor: 0.4,
		y: game.world.height - 80,
		z: 8,
		scale: 0.6
	}));
	this.layers.push(new BgLayer(game, {
		scrollFactor: 0.6,
		y: game.world.height - 120,
		z: 6,
		scale: 0.4
	}));

	this.layers.push(new BgLayer(game, {
		scrollFactor: 0.9,
		y: 200,
		z: -1,
		scale: 0.3,
		// scarcity: 2000,
		sprites: ["cloud"]

	}));

	var grass = game.add.tileSprite(0, game.world.height, 20000, 128, "grass");
	grass.anchor.set(0, 1);
	grass.z = 10;

	var terrain = game.add.tileSprite(0, game.world.height, 1920, 200, "terrain");
	terrain.anchor.set(0, 1);
	terrain.fixedToCamera = true;
	terrain.z = 0;

	globalGroup.addChild(grass);
	globalGroup.addChild(terrain);
};

var BgLayer = function(game, options) {
	var defaults = {
		scrollFactor: 1,
		scale: 1,
		scarcity: 1000,
		sprites: ["tree1", "tree2", "tree3", "tree4", "tree5", "tree6"]
	};
	this.game = game;
	this.group = this.game.add.group();

	this.options = extend(defaults, options);

	this.group.z = options.z || this.group.z;
	this.scrollFactor = this.options.scrollFactor;
	this.scale = this.options.scale;
	this.SCARCITY = this.options.scarcity;
	this.sprites = this.options.sprites;

	this.lastSpritePosition = 0;
	while (this.lastSpritePosition <= this.game.world.camera.x + this.game.world.camera.width) {
		this.createSprite();
	}

	globalGroup.addChild(this.group);
};

BgLayer.prototype.update = function() {
	this.group.x = this.game.camera.x * this.scrollFactor;

	if (this.lastSpritePosition <= this.game.world.camera.x + this.game.world.camera.width) {
		this.createSprite();
	}
};

BgLayer.prototype.nextSprite = function(right) {
	return Phaser.ArrayUtils.getRandomItem(this.sprites);
};

BgLayer.prototype.createSprite = function() {
	var spriteName = this.nextSprite(this.lastSpritePosition);
	this.lastSpritePosition = this.game.rnd.integerInRange(
		this.lastSpritePosition,
		this.lastSpritePosition + this.SCARCITY);
	var sprite = this.group.create(this.lastSpritePosition, this.options.y, spriteName);
	sprite.scale.set(this.scale, this.scale);
	sprite.anchor.set(0, 1);
};

Background.prototype.fillClouds = function(group) {

	group.create(50, 50, 'tree1');
	group.create(450, 350, 'tree1');
	group.create(550, 250, 'tree1');

};

Background.prototype.update = function() {

	for (var id in this.layers) {
		this.layers[id].update();
	}
};
