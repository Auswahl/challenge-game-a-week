var theGame = function(game) {
	console.log("%cStarting my awesome game", "color:white; background:red");
};

theGame.prototype.preload = function() {
	this.game.load.audio('creditsSound', 'assets/sounds/credits.mp3');
};

var ship;
var line;
var mouseBody;
var mouseSpring;
var alien;
var drawLine = false;

var result;
var distance, info;
var currentTool;

var FULL_HITPOINTS = 773, hitpoints = 773;
var score = {
	text: "0:00",
	number: 0
};
var FRAMES_NUMBER = 44;

var liveness = FRAMES_NUMBER/hitpoints;
var time = 0, timer, timerText;

var fireSound, soundtrack, explosion, explosionSprite, explosionSound;

var gameStop = false;

var blow = function(callback) {
	gameStop = true;
	fireSound.volume = 0.3;
	soundtrack.stop();
	explosionSprite.visible = true;
	explosion.play(7, false, true);
	explosionSound.play();
	explosion.onComplete.add(callback, this);
};

theGame.prototype.create = function() {
	var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
	bg.fixedToCamera = true;

	this.createSpaceship(game);
	createWeapons();

	soundtrack = game.add.audio('soundtrack');
	soundtrack.play("", 0, 0.6, true);

	fireSound = game.add.audio('fireSound');
	explosionSound = game.add.audio('blowSound');

	explosionSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'explosion');
	explosionSprite.scale.set(6);
	explosionSprite.anchor.set(0.5, 0.5);
	explosionSprite.visible = false;
	explosion = explosionSprite.animations.add("bum");

	timer = game.time.events.loop(1000, this.updateTimer, this);
	timerText = game.add.text(32, 48, '', {
		font: "16px Arial",
		fill: "#ffffff"
	});
};

theGame.prototype.updateTimer = function(game) {
	time++;
	var date = new Date(time * 1000);
	var hh = date.getUTCHours();
	var mm = date.getUTCMinutes();
	var ss = date.getSeconds();
	if (hh < 10) {hh = "0"+hh;}
	if (mm < 10) {mm = "0"+mm;}
	if (ss < 10) {ss = "0"+ss;}
	var t = hh+":"+mm+":"+ss;
	score = {
		"text" : t,
		'number': time
	};
	timerText.setText(t);
};

theGame.prototype.createSpaceship = function(game) {
	ship = game.add.sprite(game.world.centerX, game.world.height, 'ship');
	ship.anchor.set(0.5, 1);
	ship.inputEnabled = true;
	ship.events.onInputDown.add(this.click, this);
};

theGame.prototype.click = function(pointer) {
	if (gameStop) return;

	info = currentTool + ' hit';
	var hit = currentTool.hitForce();
	hitpoints -= hit;

	ship.frame = 44 - Math.round(liveness*hitpoints);
	if (!fireSound.isPlaying) {
		fireSound.play("", 0, 0, true);
	}
	fireSound.volume = (FULL_HITPOINTS - hitpoints)/FULL_HITPOINTS;
	if (hitpoints <= 0 ) {
		blow(function() {
			this.game.state.start("Win");
			askForName();
		});
	}
};

theGame.prototype.preRender = function() {
	if (line) {
		line.setTo(ship.x, ship.y, mouseBody.x, mouseBody.y);
	}
};

theGame.prototype.render = function() {

	if (drawLine) {
		game.debug.geom(line);
	}
	game.debug.text("Hitpoints: " + hitpoints, 32, 32);
};
