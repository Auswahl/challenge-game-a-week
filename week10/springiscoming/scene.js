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


//Anima

var Anima = function(img){
	this.x = width/2-50;
	this.y = 150;
	this.img = img;
};

Anima.prototype.draw = function(){
	image(this.img, this.x, this.y);
}



//Buttons
var Button = function(labelText, actionBtn) {
    this.x = width*0.3;
    this.y = height-50;
    this.width = width*0.33;
    this.height = 40;
    this.labelText = labelText;
    this.actionBtn = actionBtn;
};

Button.prototype.draw = function() {
    //noStroke();
    fill(255,255,255);
    stroke(0);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0,0,0);
    textSize(13);
    textAlign(LEFT);
    //noStroke();
    text(this.labelText, this.x+50, this.y+25);
};

Button.prototype.clicked = function(x, y){
	if(this.isMouseInside(x, y)) {
		this.actionBtn();
	}
};

Button.prototype.isMouseInside = function(mouseX, mouseY) {
    return (mouseX >= this.x &&
            mouseX <= (this.x+this.width) &&
            mouseY >= this.y && 
            mouseY <= (this.y+this.height));
};


var ImageButton = function(labelText, img, actionBtn){
	Button.call(this, labelText, actionBtn);
	this.img = img;
}

ImageButton.prototype = Object.create(Button.prototype);

ImageButton.prototype.draw = function(){
	
	image(this.img, this.x, this.y);
	noStroke();
	
	textSize(16);
	fill(28, 199, 45);
	text(this.labelText, this.x-15, this.y+65);
}

//Proto scene
var ProtoScene = function(background){
	this.background = background;
};

ProtoScene.prototype.draw = function(){
	background(this.background);
};

ProtoScene.prototype.clicked = function(x, y){
	console.log("ProtoScene caught click: " + x + " : " + y);
}


//Story scenes
var StoryScene = function(background, nextScene, textBtn){
	ProtoScene.call(this, background);

	if (textBtn === undefined) {
		this.btn1 = new Button("NEXT", function() {
	    	currentScene = nextScene;
	   });	
	} else {
		this.btn1 = new Button(textBtn, function() {
	    	currentScene = nextScene;
	   });
	}
	
};

StoryScene.prototype = Object.create(ProtoScene.prototype);

StoryScene.prototype.draw = function() {
	ProtoScene.prototype.draw.call(this);
	this.btn1.draw();
	if (this.text !== undefined) {
		this.text.draw();
	};
	if (this.subtext !== undefined) {
		this.subtext.draw();
	}

	if (this.character !== undefined) {
		this.character.draw();
	}

};

StoryScene.prototype.clicked = function(x, y) {
	this.btn1.clicked(x, y);
}










//Choice scenes
var ChoiceScene = function(background){
	ProtoScene.call(this, background);

};
ChoiceScene.prototype = Object.create(ProtoScene.prototype);

ChoiceScene.prototype.draw = function(){
	ProtoScene.prototype.draw.call(this);
	this.btn1.draw();
	this.btn2.draw();
	this.btn3.draw();
	if (this.text !== undefined) {
		this.text.draw();
	};
	if (this.subtext !== undefined) {
		this.subtext.draw();
	}
	if (this.subsubtext !== undefined) {
		this.subsubtext.draw();
	}
};


ChoiceScene.prototype.clicked = function(x, y) {
	this.btn1.clicked(x, y);
	this.btn2.clicked(x, y);
	this.btn3.clicked(x, y);

}



//Story scenes
var AnimatedFinalScene = function(background, animation){
	ProtoScene.call(this, background);
	this.btn1 = new Button("Restart", function() {
    	restart();
   });
	this.animation = animation;
	this.currentIndex = 0;
};

AnimatedFinalScene.prototype = Object.create(StoryScene.prototype);

AnimatedFinalScene.prototype.draw = function() {
	StoryScene.prototype.draw.call(this);
	this.currentIndex = (this.currentIndex == 0) ? 1 : 0;

	image(this.animation[this.currentIndex], width/2-50, 120);
};