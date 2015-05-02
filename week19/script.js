var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
	preload: preload,
	create: create,
	update: update,
	render: render
});

function preload() {
	game.load.atlasJSONHash('dude', 'assets/jumping_dude.png', 'assets/jumping_dude.json');
    game.load.image('background', 'assets/background2.png');

    game.load.tilemap('mario', 'assets/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/super_mario.png');
}

var dude;
var jumpButton;
var jumpTimer = 0;
var bg;
var layer;

function create() {
	game.device.canvasBitBltShift = false;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 900;

    bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    bg.fixedToCamera = true;

    var map = game.add.tilemap('mario');
    map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
    
    map.setCollisionBetween(14, 16);
    map.setCollisionBetween(20, 25);
    map.setCollisionBetween(27, 29);
    map.setCollision(40);

	layer = map.createLayer('World1');
	// layer.debug = true;
	layer.resizeWorld();

	dude = game.add.sprite(32, 32, 'dude');
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

}

function update() {
	dude.body.velocity.x = 0;
    game.physics.arcade.collide(dude, layer);

	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) ) {
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
		dude.animations.play('jump');
		dude.body.velocity.y = -500;
		jumpTimer = game.time.now + 750;
	}

}

function render() {
	// game.debug.spriteInfo(dude, 20, 32);
// 	game.debug.body(dude);
// 	game.debug.bodyInfo(dude, 16, 24);
// 	game.debug.cameraInfo(game.camera, 16, 345);
}
