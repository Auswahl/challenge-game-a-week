var Enemy = function(game, key, animationsArgs, x, hitDistance, hitStrength) {
	this.direction = -1;
	Character.call(this, game, key, animationsArgs, x, hitDistance, hitStrength);

	this.acting = game.time.events.loop(600, function() {
		this.act();
	}, this);
	this.isEnemy = true;
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.loose = function() {
	game.time.events.remove(this.acting);
	Character.prototype.loose.call(this);
};

Enemy.prototype.win = function() {
	game.time.events.remove(this.acting);
	Character.prototype.win.call(this);
};

Enemy.prototype.act = function() {
	if (this.health >= 30) {
		this.actAggressive();
	} else {
		this.actDefensive();
	}

};

Enemy.prototype.actAggressive = function() {
	this.status = "Acting aggressively";
	var actions = ["nothing"];
	if (game.globals.distance >= this.hitDistance) {
		actions.push("walk-forward");
	} else {
		actions.push("attack");
		actions.push("attack");
		actions.push("attack");
		actions.push("defense");
	}

	this.chooseAndAct(actions);

};

Enemy.prototype.chooseAndAct = function(actions) {
	this.status = "";
	for(var a in actions) {
		this.status += actions[a] + "\n";
	}

	var action = Phaser.ArrayUtils.getRandomItem(actions);


	switch (action) {
		case "attack":
			this.attackStart(game.globals.character);
			break;
		case "defense":
			this.blockStart();
			break;
		case "walk-forward":
			this.walkForwardStart();
			game.time.events.add(600, function() {
				this.walkForwardStop();
			}, this);

			break;
		case "walk-backward":
			this.walkBackwardStart();
			game.time.events.add(600, function() {
				this.walkBackwardStop();
			}, this);

			break;
		case "nothing":
			break;
	}
};

Enemy.prototype.actDefensive = function() {
	this.status = "Acting defensive";
	var actions = ["nothing", "walk-backward"];
	if (game.globals.distance >= this.hitDistance) {
		actions.push("walk-forward");
	} else {
		actions.push("attack");
		actions.push("defense");
		actions.push("defense");
		actions.push("defense");
	}

	this.chooseAndAct(actions);
};
