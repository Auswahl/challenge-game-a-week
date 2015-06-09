var TheGame = function(game) {
	// body...
};

WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Droid Sans Mono']
    }

};
TheGame.prototype.preload = function() {
	game.load.image("game-bg", "assets/back/stage.jpg");
	game.load.image("rules", "assets/back/rules.png");

	game.load.atlasJSONHash('megafon', 'assets/megafon/sprites.png', 'assets/megafon/sprites.js');
	game.load.atlasJSONHash('mts', 'assets/mts/sprites.png', 'assets/mts/sprites.js');

	game.load.spritesheet('leftSprite', 'assets/joystick/left.png', 64, 64);
	game.load.spritesheet('rightSprite', 'assets/joystick/right.png', 64, 64);
	game.load.spritesheet('blockSprite', 'assets/joystick/block.png', 64, 64);
	game.load.spritesheet('strikeSprite', 'assets/joystick/strike.png', 64, 64);

	this.game.load.audio('looseSound', 'assets/sound/lose.wav');

	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

};

var megafonAnimations = [
	['block', ["block-up_001.png", "block-up_000.png"], 3],
	['attack', ["standing-punch_000.png", "standing-puch_001.png", "standing-puch_002.png", "standing-puch_003.png", "standing-puch_004.png", "standing-puch_005.png"], 10],
	['walkForwardStart', ["walking-forward_000.png", "walking-forward_001.png", "walking-forward_002.png", "walking-forward_003.png", "walking-forward_004.png", "walking-forward_005.png", "walking-forward_006.png", "walking-forward_007.png"], 16],
	['walkBackwardStart', ["walking-back_000.png", "walking-back_001.png", "walking-back_002.png", "walking-back_003.png", "walking-back_004.png", "walking-back_005.png", "walking-back_006.png", "walking-back_007.png"], 16],
	['loose', ["loose_000.png", "loose_001.png", "loose_002.png", "loose_003.png"], 3],
	['win', ["win_0018_Layer-1.png", "win_0017_Layer-2.png", "win_0016_Layer-3.png", "win_0015_Layer-4.png", "win_0014_Layer-5.png", "win_0013_Layer-6.png", "win_0012_Layer-7.png", "win_0011_Layer-8.png", "win_0010_Layer-9.png", "win_0009_Layer-10.png", "win_0008_Layer-11.png", "win_0007_Layer-12.png", "win_0006_Layer-13.png", "win_0005_Layer-14.png", "win_0004_Layer-15.png", "win_0003_Layer-16.png", "win_0002_Layer-17.png", "win_0001_Layer-18.png", "win_0000_Layer-19.png"], 6],
	['standing', ["standing_0000_Layer-8.png", "standing_0001_Layer-7.png", "standing_0002_Layer-6.png", "standing_0003_Layer-5.png", "standing_0004_Layer-4.png", "standing_0005_Layer-3.png", "standing_0006_Layer-2.png", "standing_0007_Layer-1.png"], 11],

];

var mtsAnimations = [
	['block', ["block-up_001.png", "block-up_002.png", "block-up_003.png"], 5],
	['attack', ["standing-punch_000.png", "standing-punch_001.png", "standing-punch_002.png", "standing-punch_003.png", "standing-punch_004.png", "standing-punch_005.png"], 12],
	['walkForwardStart', ["walking-forward_000.png", "walking-forward_001.png", "walking-forward_002.png", "walking-forward_003.png", "walking-forward_004.png", "walking-forward_005.png", "walking-forward_006.png", "walking-forward_007.png", "walking-forward_008.png", "walking-forward_009.png"], 20],
	['walkBackwardStart', ["walking-back_000.png", "walking-back_001.png", "walking-back_002.png", "walking-back_003.png", "walking-back_004.png", "walking-back_005.png", "walking-back_006.png", "walking-back_007.png", "walking-back_008.png", "walking-back_009.png"], 20],
	['loose', ["loose_000.png", "loose_001.png", "loose_002.png", "loose_003.png", "loose_004.png", "loose_005.png", "loose_006.png"], 30],
	['win', ["win_000.png", "win_001.png", "win_002.png", "win_003.png", "win_004.png", "win_005.png", "win_006.png", "win_007.png", "win_008.png", "win_009.png", "win_010.png", "win_011.png", "win_012.png", "win_013.png", "win_014.png", "win_015.png", "win_016.png", "win_017.png", "win_018.png", "win_019.png", "win_020.png", "win_021.png", "win_022.png", "win_023.png", "win_024.png", "win_025.png", "win_026.png", "win_027.png", "win_028.png", "win_029.png", "win_030.png", "win_031.png", "win_032.png", "win_033.png", "win_034.png", "win_035.png", "win_036.png", "win_037.png", "win_038.png", "win_039.png", "win_040.png", "win_041.png", "win_042.png", "win_043.png", "win_044.png", "win_045.png", "win_046.png", "win_047.png", "win_048.png", "win_049.png", "win_050.png", "win_051.png", "win_052.png", "win_053.png", "win_054.png", "win_055.png", "win_056.png", "win_057.png", "win_058.png", "win_059.png", "win_060.png", "win_061.png", "win_062.png", "win_063.png", "win_064.png", "win_065.png", "win_066.png", "win_067.png", "win_068.png", "win_069.png", "win_070.png", "win_071.png", "win_072.png", "win_073.png", "win_074.png", "win_075.png", "win_076.png", "win_077.png", "win_078.png", "win_079.png", "win_080.png", "win_081.png", "win_082.png", "win_083.png", "win_084.png", "win_085.png", "win_086.png", "win_087.png", "win_088.png", "win_089.png", "win_090.png", "win_091.png", "win_092.png", "win_093.png", "win_094.png", "win_095.png", "win_096.png"], 20],

	['standing', ["staniding_000.png", "staniding_001.png", "staniding_002.png", "staniding_003.png", "staniding_004.png", "staniding_005.png", "staniding_006.png", "staniding_007.png", "staniding_008.png", "staniding_009.png", "staniding_010.png", "staniding_011.png"], 15],
];

TheGame.prototype.create = function() {
	var bg = game.add.sprite(0, 0, 'game-bg');
	bg.height = 600;
	bg.width = 800;

	game.world.bounds.bottom = 500;
	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.gravity.y = 200;
	game.physics.p2.restitution = 0.2;
	this.game.stage.backgroundColor = '#CCCCCC';

	if (this.game.globals.heroIs === 'mts') {
		game.globals.character = new Character(game, "mts", mtsAnimations, this.world.centerX*0.5, 120, 5);
		game.globals.enemy = new Enemy(game, "megafon", megafonAnimations, this.world.centerX*1.5);
	} else {
		game.globals.character = new Character(game, "megafon", megafonAnimations, this.world.centerX*0.5);
		game.globals.enemy = new Enemy(game, "mts", mtsAnimations, this.world.centerX*1.5, 120, 5);
	}

	if (this.game.device.desktop) {
		this.showRules();
	} else {
		game.globals.character.setUpJoystick(this);
	}
	game.globals.character.setUpKeys(this);

	game.globals.character.setEnemy (game.globals.enemy);
	game.globals.enemy.setEnemy (game.globals.character);
	game.sound.play('battleSound');

	game.globals.sounds = {};
	game.globals.sounds.block = game.add.audio("blockSound");
	game.globals.sounds.loose = game.add.audio("looseSound");
	game.globals.sounds.win = game.add.audio("winSound");
	game.globals.sounds.strike = game.add.audio("strikeSound");


	var textOptions = {
		font: 'Droid Sans Mono',
		fontSize: 20,
		fill: '#FFFFFF',
		strokeThickness: 2
	};
	this.charLife = game.add.text(50, 178, '', textOptions);
	this.enemyLife = game.add.text(600, 178, '', textOptions);

};

TheGame.prototype.showRules = function() {
	var rules = this.game.add.image(this.game.world.centerX, 540, "rules");
	rules.anchor.set(0.5, 0.5);
	rules.scale.set(0.8, 0.8);
};

TheGame.prototype.update = function() {
	game.globals.distance =
		Phaser.Math.roundTo(
			game.globals.character.position.distance(game.globals.enemy.position), -3);

	this.charLife.setText("Здоровье: " + game.globals.character.health);
	this.enemyLife.setText("Здоровье: " + game.globals.enemy.health);
};

TheGame.prototype.render = function() {
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

var loose = function() {
	if (this.game.globals.heroIs === 'mts') {
		this.game.globals.result = 'mtslost';
	} else {
		this.game.globals.result = 'megafonlost';
	}
	game.state.start('Final');
};

var win = function() {
	game.globals.sounds.win.play();
	if (this.game.globals.heroIs === 'mts') {
		this.game.globals.result = 'mtswon';
	} else {
		this.game.globals.result = 'megafonwon';
	}
	game.state.start('Final');

};