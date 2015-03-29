//Player

var Player = function() {
	this.width = width / 10;
	this.height = height / 8;
	this.x = width / 20 * 9;
	this.y = height - this.width;
};

Player.prototype.draw = function() {
	image(mishaImg, this.x, this.y, this.width, this.height);
};

Player.prototype.pressed = function(value) {};

Player.prototype.update = function() {
	if (keyIsDown(LEFT_ARROW) && (this.x > 0)){
		this.x -= 10;
	} else if (keyIsDown(RIGHT_ARROW) && ((this.x + this.width) < width)) {
		this.x += 10;
	}

};

Player.prototype.checkForCollision = function(mess) {
	var x1 = mess.x;
	var x2 = mess.x + mess.width;
	var x1p = this.x;
	var x2p = this.x + this.width;

	var y1 = mess.y;
	var y2 = mess.y + mess.height;
	var y1p = this.y;
	var y2p = this.y + this.height;

	if ((x1 <= x2p && x2 >= x1p) &&
		(y1 <= y2p && y2 >= y1p)) {
		return true;
	} else {
		return false;
	}
};

//Mess
var Mess = function(x, y) {
	this.x = x;
	this.y = y;
	this.width = 50;
	this.height = 50;
};

Mess.prototype.draw = function() {
	image(coffeeImg, this.x, this.y, this.width, this.height);
};

Mess.prototype.update = function() {
	this.y += speed;
	if (this.y > height) {
		this.y = -random(250, 400);
		this.x = random(Math.max(0, this.x - 300), Math.min(width, this.x + 300));
	}
	if (misha.checkForCollision(this)) {
		this.act();
	}
};

Mess.prototype.act = function() {
	this.y = -400;
	// score++;
	speed++;
};

var Mess2 = function(x, y) {
	Mess.call(this, x, y);
};

Mess2.prototype = Object.create(Mess.prototype);

Mess2.prototype.draw = function() {
	image(oldladyImg, this.x, this.y, this.width, this.height);
};


Mess2.prototype.act = function() {
	soundclick.play();
	this.y = -250;
	// score-=10;
	speed = 1;

};


//Header Text

var HeaderTxt = function(colorTxt, label, y, sizeTxt) {
	this.x = width / 2;
	this.y = y;
	this.sizeTxt = sizeTxt;
	this.colorTxt = colorTxt;
	this.label = label;
};

HeaderTxt.prototype.draw = function() {
	noStroke();

	fill(this.colorTxt);
	textSize(this.sizeTxt);
	textAlign(CENTER);
	text(this.label, this.x, this.y);
};


var ScoreScreen = function() {
	this.x = width / 20 * 3;
	this.y = height / 12;
};

ScoreScreen.prototype.draw = function() {
	noStroke();

	fill(255, 255, 255);
	textSize(30);
	textAlign(LEFT);
	text("Left: " + Math.ceil(score/1000) + " km " + Math.ceil(score%1000) + " m", this.x, this.y);
};

ScoreScreen.prototype.update = function() {
	score -= speed;
	if (score <= 0) {
		gameOver();
	}
};

var FinalScreen = function() {
	this.x = width / 20;
	this.y = 8 * height / 20;

};

FinalScreen.prototype.draw = function() {
	noStroke();

	fill(255, 255, 255);
	textSize(36);
	textAlign(LEFT);
};


//Buttons
var Button = function(labelText, action) {
	this.width = width * 0.33;
	this.height = 60;
	this.x = width / 2 - this.width / 2;
	this.y = height - 50 - this.height / 2;

	this.labelText = labelText;
	this.action = action;
};

Button.prototype.draw = function() {

	rectMode(CORNER);
	fill(0, 0, 0);
	stroke(255, 255, 255);
	rect(this.x, this.y, this.width, this.height, 5);
	fill(255, 255, 255);
	noStroke();
	textSize(23);
	textAlign(CENTER);
	//noStroke();
	text(this.labelText, this.x + this.width / 2, this.y + this.height / 2 + 5);
};

Button.prototype.clicked = function(x, y) {
	if (this.isMouseInside(x, y)) {
		this.action();
	}
};

Button.prototype.isMouseInside = function(mouseX, mouseY) {
	return (mouseX >= this.x &&
		mouseX <= (this.x + this.width) &&
		mouseY >= this.y &&
		mouseY <= (this.y + this.height));
};




//Proto scene
var Scene = function(background) {
	this.background = background;
	this.widgets = [];
	this.drawBg = true;
};

Scene.prototype.draw = function() {
	if (this.drawBg) {
		background(this.background);
	}
	for (var objectId in this.widgets) {
		this.widgets[objectId].draw();
	}

};

Scene.prototype.clicked = function(x, y) {
	console.log("ProtoScene caught click: " + x + " : " + y);
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].clicked !== undefined) {
			this.widgets[objectId].clicked(x, y);
		}
	}
};


Scene.prototype.pressed = function(keyCode) {
	console.log("ProtoScene caught pressed: " + keyCode);
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].pressed !== undefined) {
			this.widgets[objectId].pressed(keyCode);
		}
	}
};

Scene.prototype.start = function() {
	console.log("ProtoScene started!");
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].start !== undefined) {
			this.widgets[objectId].start();
		}
	}
};

Scene.prototype.update = function() {
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].update !== undefined) {
			this.widgets[objectId].update();
		}
	}
};

var SceneSub = function(x, y) {
	Scene.call(this, x, y);
	this.backgroundY = 0;
	this.drawBg = false;
};

SceneSub.prototype = Object.create(Scene.prototype);

SceneSub.prototype.update = function() {
	if (this.backgroundY >= height) this.backgroundY = 0;
	this.backgroundY += speed;

	Scene.prototype.update.call(this);
};


SceneSub.prototype.draw = function() {

	image(this.background, 0, this.backgroundY - height, width, height);
	image(this.background, 0, this.backgroundY, width, height);

	Scene.prototype.draw.call(this);


};
