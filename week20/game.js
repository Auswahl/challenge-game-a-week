var theGame = function(game) {
	console.log("%cStarting my awesome game", "color:white; background:red");
};

theGame.prototype.preload = function() {

};

var cow;
var line;
var mouseBody;
var mouseSpring;
var alien;
var drawLine = false;
var hitpoints = 100;
var result;
var distance, velocity;

theGame.prototype.create = function() {
	game.stage.backgroundColor = '#304871';
	// game.world.setBounds(0, 0, 800, 18000);
	// game.add.tileSprite(0, 0, 800, 18000, 'background');

	map = game.add.tilemap('map');
	map.addTilesetImage('space_tilesets');

	layer = map.createLayer('Tile Layer 1');

	layer.resizeWorld();
	// map.setCollisionBetween(31, 37);
	map.setCollisionByIndex(41);

	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.gravity.y = 0;
	game.physics.p2.restitution = 0;
	game.physics.p2.convertTilemap(map, layer);

	//  Create an object to pick-up
	this.createSpaceship(game);
	//  Create our Mouse Cursor / Spring

	mouseBody = game.add.sprite(100, 100, 'cursor');
	mouseBody.visible = false;
	game.physics.p2.enable(mouseBody);
	mouseBody.body.static = true;

	line = new Phaser.Line(cow.x, cow.y, mouseBody.x, mouseBody.y);

	game.input.onDown.add(this.click, this);
	game.input.onUp.add(this.release, this);
	// game.input.addMoveCallback(this.move, this);


	alien = game.add.sprite(0, 0, 'alien');
	game.physics.p2.enable(alien);

	this.soundtrack = game.add.audio('soundtrack');
	
	this.hit = game.add.audio('hit');
	this.soundtrack.play("", 0, 0.6, true);

};

theGame.prototype.createSpaceship = function() {
	// cow = game.add.sprite(30, 1200, 'cow');
	cow = game.add.sprite(400, game.world.height - 300, 'cow');
// 
	game.physics.p2.enable(cow);
	cow.body.setRectangle(50, 50);
	cow.scale.setTo(0.2, 0.2);
	game.camera.follow(cow, Phaser.Camera.FOLLOW_PLATFORMER);
	cow.body.onBeginContact.add(blockHit, this);
	cow.inputEnabled = true;
	game.physics.enable(game.camera);

	// cow.events.onInputDown.add(onDown, this);
	// cow.events.onInputUp.add(onUp, this);
};

theGame.prototype.click = function(pointer) {		
	mouseBody.position.x = game.input.activePointer.worldX;
	mouseBody.position.y = game.input.activePointer.worldY;

	var bodies = game.physics.p2.hitTest(mouseBody.position, [cow.body]);
	console.log("Click");
	if (bodies.length) {
		//  Attach to the first body the mouse hit
		mouseSpring = game.physics.p2.createSpring(mouseBody, bodies[0], 0, 30, 1);
		line.setTo(cow.x, cow.y, mouseBody.x, mouseBody.y);
		drawLine = true;
		game.camera.unfollow(cow);

	}

};

theGame.prototype.release = function() {
	game.physics.p2.removeSpring(mouseSpring);

	drawLine = false;
	game.camera.follow(cow, Phaser.Camera.FOLLOW_PLATFORMER);
	console.log("Release");


};

theGame.prototype.update = function() {
	mouseBody.body.x = game.input.activePointer.worldX;
	mouseBody.body.y = game.input.activePointer.worldY;
	line.setTo(cow.x, cow.y, mouseBody.x, mouseBody.y);
	console.log(mouseBody.position.toString()); 
	distance = Phaser.Math.roundTo(cow.position.distance(alien.position), -3);
	velocity = Phaser.Math.roundTo(new Phaser.Point(cow.body.velocity.x, cow.body.velocity.y).getMagnitude(), -3);
};

function blockHit(body, shapeA, shapeB, equation) {
	var velocity = new Phaser.Point(cow.body.velocity.x, cow.body.velocity.y);
	var hitForce = Math.floor(velocity.getMagnitude()/1000);

	if (body && body.sprite) {
		game.state.start("Win");
		this.soundtrack.stop();
	} else {
		hitpoints -= hitForce;
		this.hit.play();
		if (hitpoints <= 0 ) {
			game.state.start("Loose");
			this.soundtrack.stop();
		}
	}

}



theGame.prototype.preRender = function() {

	if (line) {
		line.setTo(cow.x, cow.y, mouseBody.x, mouseBody.y);
	}

};

theGame.prototype.render = function() {

	if (drawLine) {
		game.debug.geom(line);
	}
	game.debug.text("Hitpoints left: " + hitpoints, 32, 32);
	game.debug.text("Velocity: " + velocity + " m/s", 32, 64);

	game.debug.text("Distance to ISS: " + distance + " m", 500, 32);

};
