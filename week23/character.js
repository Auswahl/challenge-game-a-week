var Character = function(game, key, animationsArgs, x, hitDistance, hitStrength) {
	Phaser.Sprite.call(this, game, x, 450, key);
	game.add.existing(this);
	game.physics.enable(this, Phaser.Physics.P2JS);
	this.body.collideWorldBounds = true;

	if (!this.direction) this.direction = 1;
	this.scale.set(1*this.direction, 1);

	this.anchor.setTo(0.5, 1);

	for(var id in animationsArgs) {
		this.animations.add.apply(this.animations, animationsArgs[id]);
	}


	this.health = 100;
	this.hitDistance = hitDistance || 90;
	this.blocking = false;
	this.attacking = false;
	this.walking = false;
	this.status = "";
	this.hitStrength = hitStrength || 10;
	this.events.onAnimationComplete.add(this.animationComplete, this);
	this.events.onAnimationStart.add(this.animationStart, this);

};

Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

Character.prototype.setEnemy= function(enemy) {
	this.enemy = enemy;
};

Character.prototype.animationStart= function(char, animation) {

};

Character.prototype.animationComplete= function(char, animation) {
	if (animation.name === 'walkForwardStart' && this.walking) {
		this.walkForwardStart();
	} else if (animation.name === 'loose') {

	} else if (animation.name === 'win') {
		if (this.isEnemy) {
			loose();
		} else {
			win();
		}
	} else if(animation.name === 'walkBackwardStart' && this.walking) {
		this.walkBackwardStart();
	} else if (!this.walking && !this.attacking && !this.blocking) {
		this.animations.play('standing');
	} else if (animation.name === 'attack' && this.attacking) {
		this.attacking = false;
	} 
};

Character.prototype.blockStart = function() {
	if (this.attacking || this.blocking) return;
	if (this.walking) {
		this.walkForwardStop();
	}

	this.blocking = true;
	this.animations.play('block');
	game.time.events.add(600, function() {
		this.blocking = false;
	}, this);
};

Character.prototype.attackStart = function() {
	if (this.attacking || this.blocking) return;

	if (this.walking) {
		this.walkForwardStop();
		this.walkBackwardStop();

	}
	this.attacking = true;

	this.animations.play('attack');
	this.hit();

};

Character.prototype.hit = function() {
	if (game.globals.distance <= this.hitDistance) {
			if (!this.enemy.blocking) {
				game.globals.sounds.strike.play();
				this.enemy.health -= this.hitStrength;

				if (this.enemy.health <= 0) {
					this.enemy.loose();
					this.win();

					if (this.isEnemy) {
						game.globals.sounds.loose.play();
					} else {
						game.globals.sounds.win.play();
					}
				}

			} else {
				game.globals.sounds.block.play();
			}
		} else {
		}
};


Character.prototype.walkForwardStart = function() {
	if (this.attacking || this.blocking) return;
	this.body.velocity.x = 100*this.direction;
	this.animations.play('walkForwardStart');

	this.walking = true;
};

Character.prototype.walkForwardStop = function() {
	this.walking = false;
	this.body.velocity.x = 0;
	// this.animations.stop('walkForwardStart');
};

Character.prototype.loose = function() {
	game.input.enabled = false;
	this.animations.play('loose');
};

Character.prototype.win = function() {
	game.input.enabled = false;
	this.animations.play('win');
};

Character.prototype.walkBackwardStart = function() {
	if (this.attacking || this.blocking) return;
	this.body.velocity.x = -100*this.direction;
	this.animations.play('walkBackwardStart');

	this.walking = true;

};

Character.prototype.walkBackwardStop = function() {
	this.walking = false;
	this.body.velocity.x = 0;
};

Character.prototype.setUpKeys = function(theGame) {
	theGame.blockKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	theGame.blockKey.onDown.add(this.blockStart, this);
	theGame.attackKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
	theGame.attackKey.onDown.add(this.attackStart, this);
	theGame.walkForwardKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	theGame.walkForwardKey.onUp.add(this.walkForwardStop, this);
	theGame.walkForwardKey.onDown.add(this.walkForwardStart, this);
	theGame.walkBackwardKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	theGame.walkBackwardKey.onUp.add(this.walkBackwardStop, this);
	theGame.walkBackwardKey.onDown.add(this.walkBackwardStart, this);

};

Character.prototype.setUpJoystick = function(theGame) {
	theGame.blockMobileButton = addMobileButton(game, 690, 490, "blockSprite");
	theGame.blockMobileButton.onDown(this.blockStart, this);
	theGame.attackMobileButton = addMobileButton(game, 740, 540, "strikeSprite");
	theGame.attackMobileButton.onDown(this.attackStart, this);
	theGame.walkForwardButton = addMobileButton(game, 150, 540, "rightSprite");
	theGame.walkForwardButton.onUp(this.walkForwardStop, this);
	theGame.walkForwardButton.onDown(this.walkForwardStart, this);
	theGame.walkBackwardButton = addMobileButton(game, 60, 540, "leftSprite");
	theGame.walkBackwardButton.onUp(this.walkBackwardStop, this);
	theGame.walkBackwardButton.onDown(this.walkBackwardStart, this);
};