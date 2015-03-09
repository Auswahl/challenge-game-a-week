//Header Text

var HeaderTxt = function(colorTxt, label, y, sizeTxt) {
	this.x = width/2;
	this.y = y;
	this.sizeTxt = sizeTxt;
	this.colorTxt = colorTxt;
	this.label = label;
};

HeaderTxt.prototype.draw = function(){
	noStroke();
	
	fill(this.colorTxt);
	textSize(this.sizeTxt);
	textAlign(CENTER);
	text(this.label, this.x, this.y);
};


var ScoreScreen = function() {
	this.x = 4*width/20;
	this.y = height/2.5;
};

ScoreScreen.prototype.draw = function(){
	noStroke();
	
	fill(255, 255, 255);
	textSize(32);
	textAlign(LEFT);
	text("Score: " + score, this.x, this.y);
};

var TimerScreen = function() {
	this.x = 12*width/20;
	this.y = height/2.5;
};

TimerScreen.prototype.draw = function(){
	noStroke();
	
	fill(255, 255, 255);
	textSize(32);
	textAlign(LEFT);
	text("Time: " + this.time, this.x, this.y);
};
TimerScreen.prototype.start = function(){
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
    this.width = width*0.33;
    this.height = 60;
    this.x = width/2 - this.width/2;
    this.y = height-50 - this.height/2;

    this.labelText = labelText;
    this.action = action;
};

Button.prototype.draw = function() {
    
    rectMode(CORNER);
    fill(255,72,68);
    stroke(172, 48, 36);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255,255,255);
    noStroke();
    textSize(23);
    textAlign(CENTER);
    //noStroke();
    text(this.labelText, this.x + this.width/2, this.y + this.height/2+5);
};

Button.prototype.clicked = function(x, y){
	if(this.isMouseInside(x, y)) {
		this.action();
	}
};

Button.prototype.isMouseInside = function(mouseX, mouseY) {
    return (mouseX >= this.x &&
            mouseX <= (this.x+this.width) &&
            mouseY >= this.y && 
            mouseY <= (this.y+this.height));
};


// var ImageButton = function(labelText, img, actionBtn){
// 	Button.call(this, labelText, actionBtn);
// 	this.img = img;
// }

// ImageButton.prototype = Object.create(Button.prototype);

// ImageButton.prototype.draw = function(){
	
// 	image(this.img, this.x, this.y);
// 	noStroke();
	
// 	textSize(16);
// 	fill(28, 199, 45);
// 	text(this.labelText, this.x-15, this.y+65);
// }

//Proto scene
var Scene = function(background){
	this.background = background;
	this.widgets = [];
};

Scene.prototype.draw = function(){
	background(this.background);
	for(var objectId in this.widgets) {
		this.widgets[objectId].draw();
	}

};

Scene.prototype.clicked = function(x, y) {
	console.log("ProtoScene caught click: " + x + " : " + y);
	for(var objectId in this.widgets) {
		if (this.widgets[objectId].clicked  !== undefined) {
			this.widgets[objectId].clicked(x, y);
		}
		
	}
}

Scene.prototype.start = function() {
	console.log("ProtoScene started!");
	for(var objectId in this.widgets) {
		if (this.widgets[objectId].start  !== undefined) {
			this.widgets[objectId].start();
		}
		
	}
}

Scene.prototype.update = function(){
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

 






 //Pigs
 var Pig = function(x){
 	this.babyImg = babyImg;
 	this.teenImg = teenImg;	
 	this.adultImg = adultImg;
 	this.age = "baby";
 	this.ageToll = 1;
 	this.state = {
 		"hungry": false,
 		"thirsty" : false,
 		"dirty": false
 	}
 	this.width = width/4;
 	this.height = height/3;
 	this.x = x;
 	this.y = height - this.height - 20;

 	this.lasteat = 0;
 	this.lastdrink = 0;
 	this.lastclean = 0;

 	this.iconWidth = this.width/3;
 	this.iconHeight = this.height/3;
 	this.iconY = this.y-this.iconHeight - 10;
 	this.time = 80;
 	this.aging = 0;
 };

Pig.prototype.start = function() {
 	this.aging = 0;
 	this.age = "baby";
 	this.ageToll = 1;
 	this.state = {
 		"hungry": false,
 		"thirsty" : false,
 		"dirty": false
 	}
 	this.lasteat = frameCount-220;
 	this.lastdrink = frameCount-120;
 	this.lastclean = frameCount;

}
Pig.prototype.update = function() {
    var time = (4 - this.ageToll) * this.time;
    if ((frameCount - this.lasteat) >= time * 2) {
        this.lasteat = frameCount;
        this.state.hungry = false;
    } else if ((frameCount - this.lasteat) >= time) {
        this.state.hungry = true;
    }

    if ((frameCount - this.lastdrink) >= time*1.2 * 2) {
        this.lastdrink = frameCount;
        this.state.thirsty = false;
    } else if ((frameCount - this.lastdrink) >= time*1.2) {
        this.state.thirsty = true;
    }

    if ((frameCount - this.lastclean) >= (time*1.5) * 2) {
        this.lastclean = frameCount;
        this.state.dirty = false;
    } else if ((frameCount - this.lastclean) >= time*1.5) {
        this.state.dirty = true;
    }
};


 Pig.prototype.draw = function(){
 	switch(this.age) {
 		case "baby":
 			image(babyImg, this.x, this.y, this.width, this.height); 
 			break;
 		case "teen":
 			image(teenImg, this.x, this.y, this.width, this.height); 
 			break;
 		case "adult":
 			image(adultImg, this.x, this.y, this.width, this.height); 
 			break;
 	}

 	if (this.state.hungry) {
 		image(food, this.x, this.iconY, this.iconWidth, this.iconHeight);
 	};

 	if (this.state.thirsty) {
 		image(water, this.x + this.iconWidth + 20, this.iconY, this.iconWidth, this.iconHeight);
 	};
 	
 	if (this.state.dirty) {
 		image(broom, this.x + this.iconWidth*2 + 35, this.iconY, this.iconWidth, this.iconHeight);
 	};
 };


Pig.prototype.clicked = function(x, y) {
    if (this.state.hungry && this.isMouseInsideFood(x, y)) {
    	score += this.ageToll;
        this.lasteat = frameCount;
        this.state.hungry = false;
        this.aging++;

    }
    if (this.state.thirsty && this.isMouseInsideDrop(x, y)) {
    	score += this.ageToll;
        this.lastdrink = frameCount;
        this.state.thirsty = false;
		this.aging++;
    }
    if (this.state.dirty && this.isMouseInsideBroom(x, y)) {
    	score += this.ageToll;
        this.lastclean = frameCount;
        this.state.dirty = false;
        this.aging++;
    }

    if (this.aging >= 9) {
    	this.raise();
    }
};

Pig.prototype.raise = function() {
	this.aging = 0;

	if (this.age === "adult") {
		return;
	}
	
	this.state.hungry = false;
	this.state.thirsty = false;
	this.state.dirty = false;
	
 	this.lasteat = frameCount;
 	this.lastdrink = frameCount;
 	this.lastclean = frameCount;
	this.ageToll++;
 	this.age = (this.age === "baby") ? "teen" : "adult";
}

Pig.prototype.isMouseInsideFood = function(mouseX, mouseY) {
    return (mouseX >= this.x &&
        mouseX <= (this.x + this.iconWidth) &&
        mouseY >= this.iconY &&
        mouseY <= (this.iconY + this.iconHeight));
};

Pig.prototype.isMouseInsideDrop = function(mouseX, mouseY) {
    var x = this.x + this.iconWidth + 20;
    return (
    	mouseX >= x &&
        mouseX <= (x + this.iconWidth) &&
        mouseY >= this.iconY &&
        mouseY <= (this.iconY + this.iconHeight));
};

Pig.prototype.isMouseInsideBroom = function(mouseX, mouseY) {
    var x = this.x + this.iconWidth*2 + 35;

    return (
    	mouseX >= x &&
        mouseX <= (x + this.iconWidth) &&
        mouseY >= this.iconY &&
        mouseY <= (this.iconY + this.iconHeight));
};

// function click ... {
// 	if (state.hungry) {
// 		//check if clicked on plate
// 		//if clicked on plate = addScore
// 	}
// }


// addScore function... 
// if age