
//Mess
var Wall = function(position) {
	this.position = position.get();
	this.width = 150;
	this.height = 150;
};

Wall.prototype.draw = function() {
	rect(this.position.x, this.position.y, this.width, this.height);
};

Wall.prototype.update = function() {
};

Wall.prototype.act = function() {
	// this.y = height+400;
	// // score++;
	// drinks+=1;
	// this.img = drinkImages[Math.floor(random(0, drinkImages.length))];
};


var Walls = function(){
	this.walls = [];
	var vectors = [
		[0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0],
		[0, 1, 0, 1, 0,   1, 0, 0, 0, 1,   0, 0, 0, 0, 1,   0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0,   0, 0, 1, 0, 1,   1, 0, 1, 0, 1,   0, 0, 0, 0, 1],
		[0, 1, 1, 0, 1,   1, 0, 1, 0, 0,   0, 0, 1, 0, 0,   0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0,   0, 0, 0, 0, 1,   1, 0, 0, 0, 1,   1, 0, 0, 0, 1],

		[0, 0, 1, 1, 1,   0, 0, 1, 0, 0,   0, 0, 1, 0, 0,   0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0,   0, 0, 1, 0, 0,   0, 0, 0, 0, 0,   0, 0, 1, 0, 0],
		[0, 1, 0, 1, 1,   1, 0, 0, 0, 1,   0, 1, 1, 1, 1,   0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0,   0, 0, 1, 0, 1,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0,   1, 0, 1, 0, 1,   0, 1, 1, 0, 1,   0, 1, 1, 1, 0],

		[0, 1, 1, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1,   0, 1, 0, 1, 1,   0, 1, 0, 1, 0,   0, 1, 0, 1, 0],
		[0, 0, 1, 0, 1,   0, 1, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0,   0, 0, 0, 1, 0,   1, 0, 1, 0, 1,   0, 1, 0, 1, 0],
		[0, 0, 0, 0, 1,   1, 0, 0, 0, 0,   0, 0, 0, 0, 1,   0, 0, 0, 0, 0],

		[0, 1, 0, 0, 0,   0, 0, 0, 0, 1,   0, 0, 1, 0, 0,   0, 0, 1, 1, 0],
		[0, 1, 0, 0, 0,   0, 0, 1, 0, 0,   0, 0, 1, 0, 1,   1, 0, 0, 0, 0],
		[0, 1, 0, 1, 0,   1, 0, 0, 0, 1,   1, 0, 1, 0, 0,   0, 0, 1, 1, 0],
		[0, 0, 0, 1, 0,   1, 0, 1, 0, 0,   0, 0, 0, 0, 1,   1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0,   0, 0, 0, 0, 0]
  	];
	for (var i in vectors) {
 		for (var j in vectors[i]) {
 			if (vectors[i][j]) {
 				this.walls.push(new Wall(createVector(j*150, i*150)));
 			}
 		}
	}

	this.realWidth = 3000;
	this.realHeight = 3000;
	this.margin = 800;

	this.Left = 0;
	this.Right = this.realWidth;
	this.Top = 0;
	this.Bottom = this.realHeight;

};

Walls.prototype.addWall = function() {
	var x = this.walls[this.walls.length-1].position.x + 350;
	var y = random(25,1250);

   this.walls.push(new Wall(x,y));
};


Walls.prototype.draw = function(){
	push();
	fill(0, 0, 0);

	for (var i in this.walls) {
		this.walls[i].draw();
	}

	noStroke();
	rectMode(CORNERS);

	//Top wall
	rect(
		this.Left - this.margin,
		this.Top - this.margin,
		this.Right + this.margin,
		this.Top);

	//Bottom wall
	rect(
		this.Left - this.margin,
		this.Bottom,
		this.Right + this.margin,
		this.Bottom + this.margin);

	//Left wall
	rect(
		this.Left - this.margin,
		this.Top - this.margin,
		this.Left,
		this.Bottom + this.margin);

	//Right wall
	rect(
		this.Right,
		this.Top - this.margin,
		this.Right + this.margin,
		this.Bottom + this.margin);

	pop();
};

Walls.prototype.update = function(){
	for (var i in this.walls) {
		this.walls[i].update();
	}
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

ScoreScreen.prototype.start = function(){
	var countdownTimer = setInterval(this.secondPassed, 1000);
};

ScoreScreen.prototype.secondPassed = function(){
	score--;
};

ScoreScreen.prototype.draw = function() {
	noStroke();

	fill(255, 255, 255);
	textSize(30);
	textAlign(LEFT);
	text("Left: " + score + " hp ", this.x + viewPosition.x, this.y + viewPosition.y);
};

ScoreScreen.prototype.update = function() {
	if (score <= 0) {
		loose();
	}
};


var FinalScreen = function() {
	this.x = 6*width / 20;
	this.y = 12 * height / 20;

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

var SceneSub = function() {
	Scene.call(this);
	this.backgroundX = 0;
	this.drawBg = false;
};

SceneSub.prototype = Object.create(Scene.prototype);

SceneSub.prototype.update = function() {
	if (this.backgroundX <= -width) {
		this.backgroundX = 0;
	}


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
	background(100, 0, 0);
	push();
	translate(-viewPosition.x, -viewPosition.y);

	Scene.prototype.draw.call(this);

	fill(0, 150, 0);
	rect(18*150, 0, 150, 150);
	pop();
};
