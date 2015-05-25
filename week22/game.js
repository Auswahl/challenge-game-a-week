var theGame = function(game) {
	console.log("%cStarting my awesome game", "color:white; background:red");
};

theGame.prototype.preload = function() {

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

var hitpoints = 100;
var score = {
	text: "0:00",
	number: 0
};
var FRAMES_NUMBER = 44;

var liveness = FRAMES_NUMBER/hitpoints;
var time = 0, timer, timerText;


theGame.prototype.create = function() {
	var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
	bg.fixedToCamera = true;


	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.gravity.y = 0;
	game.physics.p2.restitution = 0;

	this.createSpaceship(game);

	createWeapons();

	this.soundtrack = game.add.audio('soundtrack');

	this.hit = game.add.audio('hit');
	this.soundtrack.play("", 0, 0.6, true);

	timer = game.time.events.loop(1000, this.updateTimer, this);
	timerText = game.add.text(32, 32, '', {
		font: "30pt Courier",
		fill: "#00ff00",
		stroke: "#119f4e",
		strokeThickness: 2
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
	ship = game.add.sprite(400, game.world.height - 300, 'ship');

	game.physics.p2.enable(ship);
	ship.body.setRectangle(50, 50);
	game.camera.follow(ship, Phaser.Camera.FOLLOW_PLATFORMER);
	ship.body.onBeginContact.add(blockHit, this);
	ship.inputEnabled = true;
	game.physics.enable(game.camera);

	ship.events.onInputDown.add(this.click, this);



};

theGame.prototype.click = function(pointer) {
	info = currentTool + ' hit';
	var hit = currentTool.hitForce();
	hitpoints -= hit;

	ship.frame = 44 - Math.round(liveness*hitpoints);
	if (hitpoints <= 0 ) {
		this.game.state.start("Win");
		askForName();
	}
};

theGame.prototype.update = function() {
	velocity = Phaser.Math.roundTo(new Phaser.Point(ship.body.velocity.x, ship.body.velocity.y).getMagnitude(), -3);
};

function blockHit(body, shapeA, shapeB, equation) {
	var velocity = new Phaser.Point(ship.body.velocity.x, ship.body.velocity.y);
	var hitForce = Math.floor(velocity.getMagnitude() / 1000);

	if (body && body.sprite) {
		game.state.start("Win");
		this.soundtrack.stop();
	} else {
		hitpoints -= hitForce;
		this.hit.play();
		if (hitpoints <= 0) {
			game.state.start("Loose");
			this.soundtrack.stop();
		}
	}
}

theGame.prototype.preRender = function() {
	if (line) {
		line.setTo(ship.x, ship.y, mouseBody.x, mouseBody.y);
	}
};

theGame.prototype.render = function() {

	if (drawLine) {
		game.debug.geom(line);
	}
	game.debug.text("Hitpoints left: " + hitpoints, 32, 32);
	game.debug.text("Info: " + info + " m/s", 32, 64);
};
