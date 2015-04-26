//Player

var Player = function(walls) {
	Mover.call(this, walls);

	this.width = width / 16;
	this.height = height / 8;

	this.start();
	this.MAX_VELOCITY = 6;
	this.ACCELERATION = 0.3;
	this.MAX_ACCELERATION = 1;

	this.safeZone = {
		x: 18*150,
		y: 0,
		width: 150,
		height: 150
	};

};

Player.prototype = Object.create(Mover.prototype);

Player.prototype.bite = function() {
	score--;
};

Player.prototype.draw = function() {
	push();
	translate(this.position.x, this.position.y);
	image(mishaImg, 0, 0, this.width, this.height);
	stroke(255, 255, 255);
	pop();
};

Player.prototype.start = function() {
	this.velocity = createVector(0, 0);
	this.acceleration = createVector(0, 0);
	this.position = createVector(width/2, height/2);
};


Player.prototype.pressed = function(value) {};

Player.prototype.update = function() {

	var mousePosition = createVector(mouseX, mouseY);
	this.acceleration = mousePosition.sub(p5.Vector.sub(this.position, viewPosition)); //mx - x, my - y
	this.acceleration.limit(this.MAX_ACCELERATION);

	this.velocity.add(this.acceleration).limit(this.MAX_VELOCITY);
	this.collided(this.position, this.velocity);

	viewPosition.add(this.velocity);
	this.position.add(this.velocity);

	this.checkGaol(this.safeZone);
};

Player.prototype.checkGaol = function(target) {
	if (
		this.position.x <= target.x + target.width &&
		this.position.x + this.width >= target.x &&
		this.position.y <= target.y + target.height &&
		this.position.y + this.height >= target.y
		) {
		win();
	}
};




