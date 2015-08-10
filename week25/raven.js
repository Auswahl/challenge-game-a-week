var Raven = function(game, cursors) {
	Phaser.Sprite.call(this, game, 100, 100, 'raven');
	game.add.existing(this);

	this.cursors = cursors;
	// Set the pivot point for this sprite to the center
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(1, 1);

	// Enable physics on the missile
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.animations.add('fly-right', ["7", "8", "9"], 8, true);
	this.animations.add('fly-left', ["4", "5", "6"], 8, true);
	this.animations.add('fly-down', ["1", "2", "3"], 8, true);
	this.animations.add('fly-up', ["10", "11", "12"], 8, true);

	this.animations.play('fly-right');
	game.camera.follow(this);
	this.body.collideWorldBounds = true;
	this.z = 7;
	globalGroup.addChild(this);

	this.inputEnabled = true;
	this.events.onInputDown.add(this.ready, this);
	this.events.onInputUp.add(this.attack, this);

	this.recordRate = 100;
	this._history = [];
};
Raven.prototype = Object.create(Phaser.Sprite.prototype);
Raven.prototype.constructor = Raven;

Raven.prototype.ready = function(raven, pointer) {
	SPEED = 0;
	this.recordMoves = true;
	this._nextDrop = this.game.time.time;
};

Raven.prototype.attack = function(raven, pointer) {

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

	for(var i in this._history) {
		console.log(this._history[i]);
		game.time.events.add(100*i, drawLine.bind(this, this._history[i]));
	}

	game.time.events.add(100 * this._history.length + 200, (function() {
		bmd.ctx.closePath();

		sprite.destroy();
		SPEED = 2;
		this._history = [];
		this.recordMoves = false;
	}).bind(this));


};
Raven.prototype.update = function() {
	// this.move();
	this.animate();

	if (this.recordMoves && this.game.time.time >= this._nextDrop && this._history.length <= 20) {
	    this._nextDrop = this.game.time.time + this.recordRate;

	    this._history.push({
	        x: game.input.position.x,
	        y: game.input.position.y
	    });

	}
};

Raven.prototype.animate = function() {
	if (-3*Math.PI/4 <= this.rotation && this.rotation <= -Math.PI/4) {
		this.animations.play('fly-down');
	} else if (3*Math.PI/4 <= this.rotation || this.rotation <= -3 *Math.PI/4) {
		this.animations.play('fly-left');
	} else if (Math.PI/4 <= this.rotation && this.rotation <= 3 *Math.PI/4) {
		this.animations.play('fly-up');
	} else {
		this.animations.play('fly-right');
	}
};
Raven.prototype.move = function() {
	if(this.cursors.left.isDown) {
		this.angle += 5;
	} else if (this.cursors.right.isDown) {
		this.angle -= 5;
	}

	game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);
};
