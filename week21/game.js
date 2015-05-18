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


var ponies = ['pony1', 'pony2', 'pony3', 'pony4', 'pony5', 'pony6'];
theGame.prototype.create = function() {
	var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
	bg.fixedToCamera = true;


	game.input.onDown.add(this.click, this);

	// this.hit = game.add.audio('hit');
	
	this.soundtrack = game.add.audio('soundtrack');
	this.soundtrack.play("", 0, 0.6, true);

};

theGame.prototype.createPony = function() {
	var randomIndex = Math.floor(Math.random() * ponies.length);
	pony = this.game.add.sprite(game.input.activePointer.worldX, game.input.activePointer.worldY, ponies[randomIndex]);
	pony.anchor.setTo(0.5, 0.5);
	//pony.scale.setTo(0.1, 0.1);

};

theGame.prototype.click = function(pointer) {
	this.createPony();
};


theGame.prototype.preRender = function() {
};

theGame.prototype.render = function() {

	// if (drawLine) {
	// 	game.debug.geom(line);
	// }
	// game.debug.text("Hitpoints left: " + hitpoints, 32, 32);
	// game.debug.text("Info: " + info + " m/s", 32, 64);

	// game.debug.text("Distance to ISS: " + distance + " m", 500, 32);

};
