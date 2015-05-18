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
var hitpoints = 100;
var result;
var distance, info;
var currentTool;

theGame.prototype.create = function() {
	var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
	bg.fixedToCamera = true;


	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.gravity.y = 0;
	game.physics.p2.restitution = 0;

	this.createSpaceship(game);
	this.createMorgen(game);
	this.createAxe(game);
	this.createWhip(game);
	this.createDyno(game);
	this.soundtrack = game.add.audio('soundtrack');

	this.hit = game.add.audio('hit');
	this.soundtrack.play("", 0, 0.6, true);

};

theGame.prototype.createSpaceship = function(game) {
	ship = game.add.sprite(400, game.world.height - 300, 'ship');
	ship.animations.add('bum');
	ship.animations.play('bum', 60, true);
	game.physics.p2.enable(ship);
	ship.body.setRectangle(50, 50);
	// ship.scale.setTo(0.2, 0.2);
	game.camera.follow(ship, Phaser.Camera.FOLLOW_PLATFORMER);
	ship.body.onBeginContact.add(blockHit, this);
	ship.inputEnabled = true;
	game.physics.enable(game.camera);

	ship.events.onInputDown.add(this.click, this);
};

theGame.prototype.createAxe = function(game) {
	toolbelt = game.add.sprite(200, 0, "axe");
	toolbelt.inputEnabled = true;

	toolbelt.events.onInputDown.add(this.axeClicked, this);
};


theGame.prototype.createMorgen = function(game) {
	toolbelt = game.add.sprite(300, 0, "morgen");
	toolbelt.inputEnabled = true;

	toolbelt.events.onInputDown.add(this.arrowClicked, this);
};

theGame.prototype.createWhip = function(game) {
	toolbelt = game.add.sprite(400, 0, "whip");
	toolbelt.inputEnabled = true;

	toolbelt.events.onInputDown.add(this.whipClicked, this);
};

theGame.prototype.createDyno = function(game) {
	toolbelt = game.add.sprite(500, 0, "dynamite");
	toolbelt.inputEnabled = true;

	toolbelt.events.onInputDown.add(this.dynamiteClicked, this);
};



theGame.prototype.click = function(pointer) {
	hitpoints--;
	info = currentTool + ' hit';
};

theGame.prototype.axeClicked = function(pointer) {
	document.getElementsByTagName("canvas")[0].style.cursor = "url('assets/ellipse.png'), auto";
	info = 'Axe selected';
	currentTool = 'Axe';
};

theGame.prototype.whipClicked = function(pointer) {
	document.getElementsByTagName("canvas")[0].style.cursor = "url('assets/ellipse.png'), auto";
	info = 'Whip selected';
	currentTool = 'Whip';
};

theGame.prototype.arrowClicked = function(pointer) {
	document.getElementsByTagName("canvas")[0].style.cursor = "url('assets/ellipse.png'), auto";
	info = 'Arrow selected';
	currentTool = 'Arrow';
};

theGame.prototype.dynamiteClicked = function(pointer) {
	document.getElementsByTagName("canvas")[0].style.cursor = "url('assets/ellipse.png'), auto";
	info = 'Arrow selected';
	currentTool = 'Arrow';
};


theGame.prototype.release = function() {
	game.physics.p2.removeSpring(mouseSpring);

	drawLine = false;
	game.camera.follow(ship, Phaser.Camera.FOLLOW_PLATFORMER);
	console.log("Release");


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

	game.debug.text("Distance to ISS: " + distance + " m", 500, 32);

};
