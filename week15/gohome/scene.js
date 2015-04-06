//Player

var Player = function() {
	this.width = width / 16;
	this.height = height / 8;
	this.x = width / 20 * 9;
	this.y = 0;
	this.velocity = 0;
};

Player.prototype.draw = function() {


	image(mishaImg, this.x, this.y, this.width, this.height);
};

Player.prototype.start = function() {
	this.x = width/2;
	this.velocity = 0;
};


Player.prototype.pressed = function(value) {};

Player.prototype.update = function() {

	if (keyIsDown(LEFT_ARROW)) {
		this.velocity -= drinks/10 + 1;
	} else if (keyIsDown(RIGHT_ARROW)) {
		this.velocity += drinks/10 + 1;
	}

	this.x += this.velocity;

	if (Math.abs(this.velocity) >= 1) {
		this.velocity *= 0.95;	
	} else {
		this.velocity = Math.sign(random(-1, 1)) * drinks/2;
	}

	if (this.x <= -50 || this.x >= width+50) {
		loose();
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
	this.img = drinkImages[Math.floor(random(0, drinkImages.length))];
};

Mess.prototype.draw = function() {
	image(this.img, this.x, this.y, this.width, this.height);
};

Mess.prototype.update = function() {
	this.y -= speed;
	if (this.y < 0) {
		this.y = random(height+250, height+400);
		this.x = random(Math.max(0, this.x - 300), Math.min(width, this.x + 300));
	}
	if (misha.checkForCollision(this)) {
		this.act();
	}
};

Mess.prototype.act = function() {
	this.y = height+400;
	// score++;
	drinks+=1;
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

//Distance


var ScoreScreen = function() {
	this.x = width / 20;
	this.y = height*0.95;
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

//Drunk score

var DrunkScreen = function() {
	this.x = width / 20 * 13;
	this.y = height*0.95;
};

DrunkScreen.prototype.draw = function(){
	noStroke();
	fill(255, 255, 255);
	textSize(30);
	textAlign(LEFT);
	text("Drunk: " + drinks/100 + "%", this.x, this.y);
};

DrunkScreen.prototype.update = function(){
	
};




var FinalScreen = function() {
	this.x = 6*width / 20;
	this.y = 12 * height / 20;

};

FinalScreen.prototype.draw = function() {
	noStroke();

	fill(255, 255, 255);
	textSize(36);
	textAlign(LEFT);
	text("Drunk Score: " + drinks/100 + "%", this.x, this.y);
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
	if (this.backgroundY <= -height) this.backgroundY = 0;
	this.backgroundY -= speed;

	if (drinks < 25 && drinks >= 10 && soundtrack !== soundtrack110) {
		soundtrack.stop();
		soundtrack = soundtrack110;
		soundtrack.loop();
	} else if (drinks < 40 && drinks >= 25 && soundtrack !== soundtrack120) {
		soundtrack.stop();
		soundtrack = soundtrack120;
		soundtrack.loop();
	} else if (drinks >= 40 && soundtrack !== soundtrack130) {
		soundtrack.stop();
		soundtrack = soundtrack130;
		soundtrack.loop();
	} 

	Scene.prototype.update.call(this);
};


SceneSub.prototype.draw = function() {
	if (drinks >= 10) {
		angleMode(DEGREES);
		rotate(random(-drinks/10, drinks/10));
	
	}
	
	image(this.background, 0, this.backgroundY + height, width, height);
	image(this.background, 0, this.backgroundY, width, height);
	
	Scene.prototype.draw.call(this);


};
