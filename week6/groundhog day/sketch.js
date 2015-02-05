
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;
var groundhogMusic;

function preload() {
    groundhog = loadImage("../assets/Hopper-Jumping.png");
    groundhogSad = loadImage("../assets/groundhog.png");
    backImage = loadImage("../assets/background.png");
    
    backScene9 = loadImage("../assets/backScene91.png");
    backScene7 = loadImage("../assets/backScene7.png");
    backScene6 = loadImage("../assets/backScene6.png");
    backScene5 = loadImage("../assets/backScene5.png");
    backScene4 = loadImage("../assets/backScene4.png");
    backScene3 = loadImage("../assets/backScene3.png");
    backScene2 = loadImage("../assets/backScene2.png");
    backScene1 = loadImage("../assets/backScene1.png");
    groundhogMusic = loadSound('../assets/wind.mp3');
}


var currentScene = 0;
//Scene 1
var Button = function(x, y, width, height, labelText) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.labelText = labelText;
};

Button.prototype.draw = function() {
    noStroke();
    fill(30, 163, 0);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0,0,0);
    textSize(13);
    textAlign(LEFT);
    text(this.labelText, this.x+10, this.y+this.height/1.5);
};

Button.prototype.isMouseInside = function(mouseX, mouseY) {
    return (mouseX >= this.x &&
            mouseX <= (this.x+this.width) &&
            mouseY >= this.y && 
            mouseY <= (this.y+this.height));
};




var drawScene1 = function() { // Scene 1
    currentScene = 1;
    imageMode(CORNER);
    image(backScene1, 0, 0);
    noStroke();
    
    // imageMode(CENTER);
    // image(groundhog, width/2, 138, 100, 100);
    noStroke();
    fill(30, 163, 0);
    textSize(38);
    text("The Groundhog Day", width/12, height/5);
    
    textSize(13);
    fill(247, 232, 232);
    text("At the Groundhog day Misha gets a chance to break a circle", width/16, height/1.6);
    text("and change something", width/16, height/1.6+20);
    text("Or every day will stay exactly the same.", width/16, height/1.6+60);
    text("Till the next Groundhog day", width/16, height/1.6+80);
    
    button1.draw();
};





var drawScene2 = function() { // Scene 2
    currentScene = 2;
    imageMode(CORNER);
    image(backScene2, 0, 0);
    noStroke();
    
    //fill(214, 88, 88);
    //textSize(38);
    
    
    
    textSize(13);
    fill(255, 255, 255);
    text("It's 8 AM", width/16, height/10);
    //text("It's 8 AM", width/16, height/1.5);
    text("You have to get up and go to work to the Beutsche Dank", width/16, height/10+20);
    text("People there are saving the world, like, everyday. For real. ", width/16, height/1.6+65);
    text("But you feel sick. And it's so bloody cold and windy outside", width/16, height/1.6+85);

    button2.draw();
    button3.draw();
    groundhogMusic.loop();
};


//Scene 3





var drawScene3 = function() { // Scene 3
    currentScene = 3;
    background(28, 22, 28);
    imageMode(CORNER);
    image(backScene3, 0, -15);
    noStroke();
    
    // Prologue
   

    
    
    textSize(13);
    fill(255, 255, 255);
    text("YOUR DOOR IS BLOCKED BY SNOW", width/16, height/14);
    text("You can clear the path with a shovel - ", width/16, height/14+25);
    text("The Beutsche Dank is waiting for its heroes!", width/16, height/14+40);
    text("Or you still can stay at home - no blame on you", width/16, height/14+70);
    
  
    button3.draw();
    button4.draw();
};


//Scene 4




var drawScene4 = function() { // Scene 4
    currentScene = 4;
    imageMode(CORNER);
    image(backScene4, 0, 0);
    noStroke();
    
    
    
    // fill(214, 88, 88);
    // textSize(38);
    // text("Scene 4", width/12, height/6);
    
    textSize(13);
    fill(247, 232, 232);
    text("So, Misha stays at home for the whole day", width/16, height/4);
    text("Nothing happens", width/16, height/4+20);
    text("The Groundhog day is over", width/16, height/2+60);
    text("But is this day really over, ever?", width/16, height/2+80);
    
    button5.draw();
};


// Scene 5







var drawScene5 = function() { // Scene 5
    currentScene = 5;
    background(28, 22, 28);
    imageMode(CORNER);
    image(backScene5, 0, 0);
    noStroke();
    

      
    textSize(15);
    fill(255, 255, 255);
    text("You have found something strange - it's totally frozen dog", width/30, height/14);
    textSize(13);
    text("You can leave it there and think about it later - ", width/26, height/14+30);
    text("The Beutsche Dank is waiting for its heroes NOW!", width/26, height/14+50);
    text("Or you can bring frozen dog inside the house", width/26, height/14+75);
    
  
    button6.draw();
    button7.draw();
};

//Scene 6





var drawScene6 = function() { // Scene 6
    currentScene = 6;
    background(255,255,255);
    imageMode(CORNER);
    image(backScene6, 0, 0);
    noStroke();
    
      
    textSize(24);
    fill(0,0,0);
    text("Oh my, looks like it's alive!", width/16, height/8);
    textSize(13);
    text("This litte doggy is adorable", width/16, height/1.5+20);
    text("and gonna love you forever", width/16, height/1.5+40);
    text("For real", width/16, height/1.5+60);
    
    button8.draw();
};


//Scene 7





var drawScene7 = function() { // Scene 7
    currentScene = 7;
    background(28, 22, 28);
    imageMode(CORNER);
    image(backScene7, 0, -15);
    noStroke();
    
    
    textSize(16);
    fill(247, 232, 232);
    text("Wow, another day as a Beutsche Dank warrior ", width/16, height/12);
    textSize(13);
    text("Misha's totally gonna do that again", width/16, height/6+20);
    text("And again. And again", width/16, height/6+40);
    text("Till the next year", width/16, height/6+60);
    
    button9.draw();
};


//Scene 8


var drawScene8 = function() { // Scene 8
    currentScene = 8;
    imageMode(CORNER);
    image(backImage, 0, 0);
    noStroke();
    
    // Prologue
    imageMode(CENTER);
    image(groundhog,width/2, 138, 100, 100);
     
    textSize(20);
    fill(247, 232, 232);
    text("Looks like Misha have broken the circle", width/16, height/8);
    textSize(13);
    text("and finished the Groundhog day.", width/16, height/1.6+20);
    text("Something good has happened - with your help", width/16, height/1.6+40);
    textSize(20);
    text("P.S. Phil have seen his shadow, ", width/6, height/1.6+104);
    text("so only 6 weeks left till the spring=)", width/7, height/1.6+127);

  
    
};


//Scene 9



var drawScene9 = function() { // Scene 9
    currentScene = 9;
    imageMode(CORNER);
    image(backScene9, 0, 0);
    noStroke();
   
    
    // Prologue
    imageMode(CENTER);
    image(groundhogSad,width/2+20, 180, 90, 90);

    
    //fill(0,0,0)
    fill(247, 232, 232);
    textSize(20);
    text("Well, Phil have seen his shadow today, ", width/10, height/1.4);
    text("so no spring for all of us", width/4, height/1.4+30);
    textSize(13);
    text("but maybe it'll get better in 6 weeks", width/4, height/1.6+120);    
};

mouseClicked = function() {
    if (button1.isMouseInside(mouseX, mouseY) === true && currentScene === 1) {
        drawScene2();
    } else if (button2.isMouseInside(mouseX, mouseY) === true && currentScene === 2) {
        drawScene3();
    } else if (button3.isMouseInside(mouseX, mouseY) === true && currentScene === 2) {
        drawScene4();
    } else if (button3.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
        drawScene4();
    } else if (button4.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
        drawScene5();
    } else if (button5.isMouseInside(mouseX, mouseY) === true && currentScene === 4) {
        drawScene9();
    } else if (button6.isMouseInside(mouseX, mouseY) === true && currentScene === 5) {
        drawScene6();
    } else if (button7.isMouseInside(mouseX, mouseY) === true && currentScene === 5) {
        drawScene7();
    } else if (button8.isMouseInside(mouseX, mouseY) === true && currentScene === 6) {
        drawScene8();
    } else if (button9.isMouseInside(mouseX, mouseY) === true && currentScene === 7) {
        drawScene9();
    };

}

function setup() {
    createCanvas(400, 400);

    button1 = new Button(width*0.33,height*0.87,140,34,"START THIS DAY");
    button2 = new Button(width*0.06,height*0.87,140,34,"LEAVE FOR WORK");
    button3 = new Button(width*0.64,height*0.87,125,34,"STAY AT HOME");
    
    button4 = new Button(width*0.06,height*0.87,140,34,"DIG THE SNOW");
    button5 = new Button(width*0.33,height*0.87,140,34,"SO WHAT NOW?");
    button6 = new Button(width*0.64,height*0.87,125,34,"TAKE THE DOG");
    button7 = new Button(width*0.06,height*0.87,140,34,"WALK TO WORK");
    button8 = new Button(width*0.33,height*0.87,140,34,"WHAT ABOUT PHIL?");
    button9 = new Button(width*0.33,height*0.87,140,34,"WHAT ABOUT PHIL?");
    
    drawScene1();

}



// drawScene2();
// drawScene3();
// drawScene4();
// drawScene5();
// drawScene6();
// drawScene7();
// drawScene8();
// drawScene9();
