var Text = function(label, x, y, color) {
	this.x = x;
	this.y = y;
	this.sizeTxt = 16;
	this.label = label;
	this.color = color;
};

Text.prototype.draw = function() {
	noStroke();
	fill(this.color);
	textSize(this.sizeTxt);
	textAlign(CENTER);
	text(this.label, this.x, this.y);
};

var TimerScreen = function() {
	this.x = 12 * width / 20;
	this.y = height / 2.5;
};

TimerScreen.prototype.draw = function() {
	noStroke();

	fill(255, 255, 255);
	textSize(32);
	textAlign(LEFT);
	text("Time: " + this.time, this.x, this.y);
};
TimerScreen.prototype.start = function() {
		this.time = 50;
		var that = this;

		this.timer = setInterval(function() {
			that.time--;
			if (that.time <= 0) {
				clearInterval(that.timer);
				gameOver();
			}
		}, 1000);
	}
	//Anima

// var Anima = function(img){
// 	this.x = width/2-50;
// 	this.y = 150;
// 	this.img = img;
// };

// Anima.prototype.draw = function(){
// 	image(this.img, this.x, this.y);
// }



//Buttons
var Button = function(labelText, action) {
	this.width = width * 0.33;
	this.height = 60;
	this.x = width / 2 - this.width / 2;
	this.y = height - 50 - this.height / 2;

	this.labelText = labelText;
	this.action = action;
	this.color = color(237, 28, 36);
};

Button.prototype.draw = function() {

	rectMode(CORNER);
	
	fill(this.color);
	stroke(172, 48, 36);
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

//kendoka

var KendokaPart = function(options) {

	// image, x, y, width, height, action

	this.image = options.image;
	this.hoverImage = options.hoverImage;
	this.selectedImage = options.selectedImage;
	this.width = options.width;
	this.height = options.height;
	this.x = options.x;
	this.y = options.y;
	this.action = options.action;
};

KendokaPart.prototype.draw = function() {
	if (this.selected) {
		image(this.selectedImage, this.x, this.y, this.width, this.height);
	} else if (this.hover) {
		image(this.hoverImage, this.x, this.y, this.width, this.height);
	} else {
		image(this.image, this.x, this.y, this.width, this.height);
	}

};

KendokaPart.prototype.clicked = function(x, y) {
	if (this.isMouseInside(x, y)) {
		console.log("KendokaPart caught click: " + x + " : " + y);
		if (this.action()) {
			this.selected = !this.selected;
		}
	}
};

KendokaPart.prototype.start = function() {
	this.selected = false;
};

KendokaPart.prototype.isMouseInside = function(mouseX, mouseY) {
	return (mouseX >= this.x &&
		mouseX <= (this.x + this.width) &&
		mouseY >= this.y &&
		mouseY <= (this.y + this.height));
};

KendokaPart.prototype.onMousehover = function(x, y) {
	if (this.isMouseInside(x, y)) {
		this.hover = true;
	} else if (this.hover) {
		this.hover = false;
	}

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
}

Scene.prototype.onMousehover = function(x, y) {
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].onMousehover !== undefined) {
			this.widgets[objectId].onMousehover(x, y);
		}
	}
}




//Proto scene
var Kendoka = function() {
	this.widgets = [];
};

Kendoka.prototype.draw = function() {
	for (var objectId in this.widgets) {
		this.widgets[objectId].draw();
	}

};

Kendoka.prototype.clicked = function(x, y) {
	console.log("Kendoka caught click: " + x + " : " + y);
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].clicked !== undefined) {
			this.widgets[objectId].clicked(x, y);
		}

	}
}

Kendoka.prototype.onMousehover = function(x, y) {
	console.log("Kendoka onMousehover!");
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].onMousehover !== undefined) {
			this.widgets[objectId].onMousehover(x, y);
		}

	}
}

Kendoka.prototype.update = function() {
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].update !== undefined) {
			this.widgets[objectId].update();
		}
	}
}


Kendoka.prototype.start = function() {
	for (var objectId in this.widgets) {
		if (this.widgets[objectId].start !== undefined) {
			this.widgets[objectId].start();
		}
	}
}

