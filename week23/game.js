var TheGame = function(game) {
	// body...
};

TheGame.prototype.preload = function() {
	game.load.atlasJSONHash('megafon', 'assets/megafon/sprites.png', 'assets/megafon/sprites.js');
	game.load.spritesheet('buttonA', 'assets/joystick/button-round-a.png', 64, 64);
	game.load.spritesheet('buttonB', 'assets/joystick/button-round-b.png', 64, 64);
};


TheGame.prototype.create = function() {
	this.game.stage.backgroundColor = '#FFFFFF';

	this.megafon = game.add.sprite(game.world.centerX, game.world.centerY, 'megafon');
	this.megafon.anchor.setTo(0.5, 0.5);
	this.megafon.scale.setTo(2, 2);

	this.megafon.animations.add('block', ["block-up_001.png", "block-up_000.png"], 3);
	this.megafon.animations.add('attack', ["standing-puch_000.png", "standing-puch_001.png", "standing-puch_002.png", "standing-puch_003.png", "standing-puch_004.png", "standing-puch_005.png"], 10);
	this.megafon.animations.add('walkForward', ["walking-forward_000.png", "walking-forward_001.png", "walking-forward_002.png", "walking-forward_003.png", "walking-forward_004.png", "walking-forward_005.png", "walking-forward_006.png", "walking-forward_007.png"], 16);

	var blockKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	blockKey.onDown.add(this.blockStart, this);

	this.attackMobileButton = this.addMobileButton(game, 750, 550, "buttonA", this.attackStart);
	this.attackKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
	this.attackKey.onDown.add(this.attackStart, this);

	this.walkForwardButton = this.addMobileButton(game, 50, 550, "buttonB", this.walkForward);
	this.walkForwardKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
};

TheGame.prototype.blockStart = function() {
	this.megafon.animations.play('block');
};

TheGame.prototype.attackStart = function() {
	this.megafon.animations.play('attack');
};

TheGame.prototype.walkForward = function() {
	this.megafon.animations.play('walkForward');
};

TheGame.prototype.update = function() {

	if (this.walkForwardButton.isDown || this.walkForwardKey.isDown) {
		this.walkForward();
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
	}

	if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
	}

};

TheGame.prototype.render = function() {
	game.debug.spriteInfo(this.megafon, 20, 32);

};


TheGame.prototype.addMobileButton = function(game, x, y, frame, clicked) {
    var button = {};
    // if (!this.game.device.desktop) {
        // create our virtual game controller buttons
        buttonjump = game.add.button(x, y, frame, clicked, this, 1, 0, 1, 0);
        buttonjump.anchor.setTo(0.5, 0.5);
        buttonjump.fixedToCamera = true; //our buttons should stay on the same place

        buttonjump.events.onInputDown.add(function() {
            button.isDown = true;
        });
        buttonjump.events.onInputUp.add(function() {
            button.isDown = false;
        });
    // }
    return button;
};
