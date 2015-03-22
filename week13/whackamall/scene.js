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
	text("SCORE: " + score, this.x, this.y);
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
	text("Your Score: " + score, this.x, this.y);
};

var TimerScreen = function() {
	this.x = 12 * width / 20;
	this.y = height / 12;
};

TimerScreen.prototype.draw = function() {
	noStroke();

	fill(255, 255, 255);
	textSize(30);
	textAlign(LEFT);
	text("MALLS: " + necroWin, this.x, this.y);
};
TimerScreen.prototype.update = function() {
	gameOver();
	// this.currentScene = this.scenefinalgood;

	// };
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
};

Scene.prototype.draw = function() {
	background(this.background);
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
}

Scene.prototype.start = function() {
	console.log("ProtoScene started!");
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].start !== undefined) {
			this.widgets[objectId].start();
		}

	}
}

Scene.prototype.update = function() {
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].update !== undefined) {
			this.widgets[objectId].update();
		}
	}

	// for (var odjectId in this.widgets) {
	// 	if (this.widgets[objectId].update) {
	// 		this.widgets[objectId].update();
	// 	}
	// }
}


//Malls
var Mall = function(x, y) {
	this.normalImg = [mall0, mall1, mall2, mall3, mall4];
	this.state = 0;
	this.necro = false;
	this.width = width / 10;
	this.height = this.width / 0.8;
	this.x = x;
	this.y = y;
};

Mall.prototype.start = function() {
	this.startTime = frameCount;
	this.state = 0;
	this.necro = false;
}


Mall.prototype.update = function() {

	if (this.state === 4) {
		return;
	};

	var realTime = (frameCount - this.startTime) / 30;
	var randomTime = random(dudu);

	if (realTime >= randomTime) {
		this.state++;

		if (this.state === 4) {
			necroWin++;
		}
		this.startTime = frameCount;
	};

	return;
};


Mall.prototype.draw = function() {
	image(this.normalImg[this.state], this.x, this.y, this.width, this.height);
};


Mall.prototype.clicked = function(x, y) {

	if (this.state != 4 && this.state != 0 && this.isMouseInside(x, y)) {
		score++;
		this.state = 0;
		this.startTime = frameCount;
		soundclick.play();
	}



};



Mall.prototype.isMouseInside = function(mouseX, mouseY) {
	return (mouseX >= this.x &&
		mouseX <= (this.x + this.width) &&
		mouseY >= this.y &&
		mouseY <= (this.y + this.height));
};



// function click ... {
// 	if (state.hungry) {
// 		//check if clicked on plate
// 		//if clicked on plate = addScore
// 	}
// }


// addScore function... 
// if age
