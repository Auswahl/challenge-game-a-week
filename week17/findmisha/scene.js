
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
	this.x = 8*width / 20;
	this.y = height/20;

};

ScoreScreen.prototype.start = function(){
	countdownTimer = setInterval(this.secondPassed, 1000);
};

ScoreScreen.prototype.secondPassed = function(){
	score++;
};


ScoreScreen.prototype.draw = function() {
	fill(0,0,0);
	rect(this.x, this.y-height/10, width/4, height/10);
	noStroke();

	fill(255, 255, 255);
	textSize(30);
	textAlign(LEFT);
	text("Time: " + score + " sec ", this.x, this.y);
};



var FinalScreen = function() {
	this.x = 6*width / 20;
	this.y = 16 * height / 20;

};

FinalScreen.prototype.draw = function() {
	noStroke();

	fill(0, 0, 0);
	textSize(36);
	textAlign(LEFT);
	text("It took you " + score + " seconds", this.x, this.y);
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
	this.backgroundX = 0;
	this.drawBg = false;
};

SceneSub.prototype = Object.create(Scene.prototype);

SceneSub.prototype.update = function() {
	Scene.prototype.update.call(this);
};

SceneSub.prototype.clicked = function(x, y) {
	console.log("ProtoScene caught click: " + x + " : " + y);
	
		if ((mouseX >= 3.8*width/20 &&
		mouseX <= (3.8*width/20 + width/18) &&
		mouseY >= 11.5*height/20 &&
		mouseY <= (11.5*height/20 + height/13))) {
			gameOver();
		}
	
};

SceneSub.prototype.draw = function() {	
	image(this.background, 0, height/20, width, height-height/20);
	
	
	Scene.prototype.draw.call(this);


};
