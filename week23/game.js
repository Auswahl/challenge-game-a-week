var TheGame = function(game) {
	// body...
};

TheGame.prototype.preload = function() {
	game.load.atlasJSONHash('megafon', 'assets/megafon/sprites.png', 'assets/megafon/sprites.js');
	game.load.atlasJSONHash('mts', 'assets/mts/sprites.png', 'assets/mts/sprites.js');

	game.load.spritesheet('leftSprite', 'assets/joystick/left.png', 64, 64);
	game.load.spritesheet('rightSprite', 'assets/joystick/right.png', 64, 64);
	game.load.spritesheet('blockSprite', 'assets/joystick/block.png', 64, 64);
	game.load.spritesheet('strikeSprite', 'assets/joystick/strike.png', 64, 64);
};


TheGame.prototype.create = function() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	this.game.stage.backgroundColor = '#CCCCCC';

	game.globals = {};
	var megafonAnimations = [
		['block', ["block-up_001.png", "block-up_000.png"], 3],
		['attack', ["standing-puch_000.png", "standing-puch_001.png", "standing-puch_002.png", "standing-puch_003.png", "standing-puch_004.png", "standing-puch_005.png"], 10],
		['walkForwardStart', ["walking-forward_000.png", "walking-forward_001.png", "walking-forward_002.png", "walking-forward_003.png", "walking-forward_004.png", "walking-forward_005.png", "walking-forward_006.png", "walking-forward_007.png"], 16, true],
		['walkBackwardStart', ["walking-back_000.png", "walking-back_001.png", "walking-back_002.png", "walking-back_003.png", "walking-back_004.png", "walking-back_005.png", "walking-back_006.png", "walking-back_007.png"], 16, true],
		['loose', ["loose_000.png", "loose_001.png", "loose_002.png", "loose_003.png"], 4]
	];

	var mtsAnimations = [
		['block', ["block-up_001.png", "block-up_002.png", "block-up_003.png"], 5],
		['attack', ["standing-punch_000.png", "standing-punch_001.png", "standing-punch_002.png", "standing-punch_003.png", "standing-punch_004.png", "standing-punch_005.png"], 12],
		['walkForwardStart', ["walking-forward_000.png", "walking-forward_001.png", "walking-forward_002.png", "walking-forward_003.png", "walking-forward_004.png", "walking-forward_005.png", "walking-forward_006.png", "walking-forward_007.png", "walking-forward_008.png", "walking-forward_009.png"], 20, true],
		['walkBackwardStart', ["walking-back_000.png", "walking-back_001.png", "walking-back_002.png", "walking-back_003.png", "walking-back_004.png", "walking-back_005.png", "walking-back_006.png", "walking-back_007.png", "walking-back_008.png", "walking-back_009.png"], 20, true],
		['loose', ["loose_000.png", "loose_001.png", "loose_002.png", "loose_003.png", "loose_004.png", "loose_005.png", "loose_006.png"], 6]
	];
	game.globals.character = new Character(game, "mts", mtsAnimations);
	game.globals.character.setUpJoystick(this);
	game.globals.character.setUpKeys(this);

	game.globals.enemy = new Enemy(game, "megafon", megafonAnimations);

	game.globals.character.setEnemy (game.globals.enemy);
	game.globals.enemy.setEnemy (game.globals.character);

};

TheGame.prototype.update = function() {
	game.physics.arcade.collide(game.globals.character, game.globals.enemy, null, null, this);
	game.globals.distance =
		Phaser.Math.roundTo(
			game.globals.character.position.distance(game.globals.enemy.position), -3);
};

TheGame.prototype.render = function() {
	game.debug.spriteInfo(game.globals.character, 20, 32);
	game.debug.body(game.globals.character);
	game.debug.text("Life: " + game.globals.character.health, 50, 178);
	game.debug.text("Life: " + game.globals.enemy.health, 600, 178);

	game.debug.text("Status: " + game.globals.enemy.status, 500, 230);

};

function addMobileButton(game, x, y, frame) {
	var button = {};

	buttonjump = game.add.button(x, y, frame, null, this, 0, 1, 0, 1);
	buttonjump.anchor.setTo(0.5, 0.5);
	buttonjump.fixedToCamera = true;
	buttonjump.events.onInputDown.add(function() {
		button.isDown = true;
	});

	buttonjump.events.onInputUp.add(function() {
		button.isDown = false;
	});

	button.onUp = function(action, context) {
		buttonjump.events.onInputUp.add(action, context);
	};

	button.onDown = function(action, context) {
		buttonjump.events.onInputDown.add(action, context);
	};


	return button;
}

