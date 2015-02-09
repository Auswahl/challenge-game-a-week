var button1;
var button2;
var misha;
var door1;
var door2;
var door3;
var positionImg;
var machineImg;
var stripImg;
var strip1;
var machineSmall;
var machineBig;
var arrowImg;
var finalImg;


function preload() {
    positionImg = [
    loadImage("../assets/position1.png"),
    loadImage("../assets/position2.png"),
    loadImage("../assets/position3.png")
    ];

    machineImg = [
    loadImage("../assets/machine1.png"),
    loadImage("../assets/machine2.png"),
    ];

    stripImg = [
    loadImage("../assets/strip1.png"),
    loadImage("../assets/strip3.png"),
    loadImage("../assets/strip2.png"),
    loadImage("../assets/strip3.png")
    ];

    finalImg = [
    loadImage("../assets/final1.png"),
    loadImage("../assets/final2.png")
    ];
    arrowImg = loadImage("../assets/arrow.png");
}

var currentScene = 0;


//Buttons

var Button = function(x, y, width, height, labelText) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.labelText = labelText;
};

Button.prototype.draw = function() {
    //noStroke();
    stroke(1);
    fill(255,255,255);
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



// Player

var Player = function(x,y, arrayOfImages){
    this.x = x;
    this.y = y;
    this.images = arrayOfImages;
    this.currentIndex = 0;
};

Player.prototype.update = function() {
    this.x++;
    
    this.currentIndex = this.currentIndex+1;
    
    
    if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
    };
}

Player.prototype.draw = function() {
    image(this.images[this.currentIndex],this.x, height/1.2, 65, 100);
};

//Machine
var Machine = function(x,y, arrayOfImages, width, height){
    this.x = x;
    this.y = y;
    this.images = arrayOfImages;
    this.width = width;
    this.height = height;
    this.currentIndex = 0;
}

Machine.prototype.update = function() {
    if ((frameCount%6) === 0){
      this.currentIndex = this.currentIndex+1;  
    }  
    
    
    
    if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
    };
}

Machine.prototype.draw = function() {
    image(this.images[this.currentIndex],this.x, this.y, this.width, this.height);
};

Machine.prototype.checkForCollision = function(Player) {
    //if Player reach the time machine
    if (Player.x >= this.x) {
        drawScene3();
    }
};

//Stripper
var Strip = function(x,y, arrayOfImages, width, height){
    this.x = x;
    this.y = y;
    this.images = arrayOfImages;
    this.width = width;
    this.height = height;
    this.currentIndex = 0;
}

Strip.prototype.update = function() {
    if ((frameCount%9) === 0){
      this.currentIndex = this.currentIndex+1;  
    }  
    
    
    
    if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
    };
}

Strip.prototype.draw = function() {
    image(this.images[this.currentIndex],this.x, this.y, this.width, this.height);
};

//final animation
var Final = function(x,y, arrayOfImages, width, height){
    this.x = x;
    this.y = y;
    this.images = arrayOfImages;
    this.width = width;
    this.height = height;
    this.currentIndex = 0;
}

Final.prototype.update = function() {
    if ((frameCount%6) === 0){
      this.currentIndex = this.currentIndex+1;  
    }  
    
    
    
    if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
    };
}

Final.prototype.draw = function() {
    image(this.images[this.currentIndex],this.x, this.y, this.width, this.height);
};




//Doors
var Door = function(x,y,year){
   this.x = x;
   this.y = y;
   this.width = width/10;
   this.height = height/6;
   this.year = year;
};

Door.prototype.draw = function() {
    stroke(1);
    fill(255,255,255);
    rect(this.x-10, this.y-10, this.width+20, this.height+10);
    noStroke();
    fill(0, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    
    textSize(10);
    noStroke();
    fill(255,255,255);
    textAlign(LEFT);
    text(this.year, this.x+10, this.y+15);
    textSize(24);
    text("?", this.x+15, this.y+45);
};

Door.prototype.isMouseInside = function(mouseX, mouseY) {
    return (mouseX >= this.x &&
            mouseX <= (this.x+this.width) &&
            mouseY >= this.y && 
            mouseY <= (this.y+this.height));
};

var drawScene1 = function() { // Scene 1
    currentScene = 1;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("Misha", width/2.1, height/6);
    text("and", width/2.1, height/6+35);
    text("the Time Machine", width/2.1, height/6+65);
    machineBig.draw();
    machineBig.update();
    button1.draw();
};

var drawScene2 = function() { // Scene 2

    currentScene = 2;
    background(255,255,255);
    noStroke();
    textSize(15);
    //textAlign(CENTER);
    text("Misha has invented a real time machine.", width/9, height/6);
    text("Sounds like fun.", width/9, height/6+30);
    textSize(26);
    text("Go ahead, give it a try!", width/9, height/6+80);

    textSize(15);
    text("Press RIGHT ARROW on a keyboard to move", width/9, height/6+120);
    image(arrowImg,width/2-25, height/6+130);
    //door1.draw();
    misha.draw();
    machineSmall.draw();
    machineSmall.update();
    //misha.update();
    //button1.draw();
    //door1.draw();
};

var drawScene3 = function() { // Scene 3
    currentScene = 3;
    background(255,255,255);
    noStroke();
    fill(0,0,0);
    textSize(15);
    textAlign(LEFT);
    text("Misha is in the middle of nowhere.", width/9, height/6);
    text("There are three time-doors leading back to this day ", width/9, height/6+30);
    text("in the past", width/9, height/6+60);
    
    
    
    textSize(30);
    textAlign(CENTER);
    textFont("Georgia");
    //stroke(2);
    text("February the 9th:", width/2.1, height/1.9);

    textSize(15);
    //noStroke();
    textAlign(LEFT);
    text("Only one attempt, so choose and CLICK carefully.", width/9, height/1.15);
    text("It can affect the future.", width/9, height/1.15+20);
   
    
    
    
    door1.draw();
    door2.draw();
    door3.draw();
   
};

var drawScene4 = function() { // Scene 4
    currentScene = 4;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("Year 1893", width/2.1, height/6);
    noStroke();
    fill(0,0,0);
    textSize(15);
    textAlign(LEFT);
    text("Paris, Moulin Rouge.", width/9, height/6+35);
    text("The first public strip-tease took place here, ", width/9, height/6+65);
    text("followed by rather funny trial and not so funny riot ", width/9, height/6+85);
    text("in protest from student strip-tease fans.", width/9, height/6+105);
    strip1.draw();
    strip1.update();
    button2.draw();
};

var drawScene5 = function() { // Scene 5
    currentScene = 5;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("Year 1893", width/2.1, height/6);
    text("and", width/2.1, height/6+35);
    text("the Time Machine", width/2.1, height/6+65);
    machineBig.draw();
    machineBig.update();
    button2.draw();
};

var drawScene6 = function() { // Scene 6
    currentScene = 6;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("1923", width/2.1, height/6);
    text("and", width/2.1, height/6+35);
    text("the Time Machine", width/2.1, height/6+65);
    machineBig.draw();
    machineBig.update();
    button2.draw();
};

var drawScene7 = function() { // Scene 7
    currentScene = 7;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("BOOM!", width/2.1, height/6);
    noStroke();
    textAlign(LEFT);
    fill(0,0,0);
    textSize(15);
    text("The Time Machine has exploded.", width/9, height/6+35);
    text("Misha woke up just fine at his home, ", width/9, height/6+65);
    text("without remembering a thing...", width/9, height/6+95);
    text("...but with a strange desire to get naked on a scene.", width/9, height/1.15);
    text("Weirdo.", width/9, height/1.15+20);
    home.draw();
    home.update();
    //button2.draw();
};

var drawScene8 = function() { // Scene 8
    currentScene = 8;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("BOOM!", width/2.1, height/6);
    noStroke();
    textAlign(LEFT);
    fill(0,0,0);
    textSize(15);
    text("The Time Machine has exploded.", width/9, height/6+35);
    text("Misha woke up just fine at his home, ", width/9, height/6+65);
    text("without remembering a thing...", width/9, height/6+95);
    text("...but with a strange desire to join YMCA ", width/9, height/1.15);
    text("and throw some ball over the tennis net.", width/9, height/1.15+20);
    text("Maybe not the best choice.", width/9, height/1.15+40);
    home.draw();
    home.update();
};

var drawScene9 = function() { // Scene 9
    currentScene = 9;
    background(255,255,255);
    stroke(1);
    fill(255,255,255);
    textSize(32);
    textAlign(CENTER);
    textFont("Georgia");
    text("BOOM!", width/2.1, height/6);
    noStroke();
    textAlign(LEFT);
    fill(0,0,0);
    textSize(15);
    text("The Time Machine has exploded.", width/9, height/6+35);
    text("Misha woke up just fine at his home, ", width/9, height/6+65);
    text("without remembering a thing...", width/9, height/6+95);
    text("...but with a strange desire to fly away, right now.", width/9, height/1.15);
    text("Good choice, Misha!", width/9, height/1.15+20);
    home.draw();
    home.update();
};



function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        misha.update();
    }
}

mouseClicked = function() {
    if (button1.isMouseInside(mouseX, mouseY) === true && currentScene === 1) {
        drawScene2();
    }  else if (button2.isMouseInside(mouseX, mouseY) === true && currentScene === 4) {
        drawScene7();
    } else if (button2.isMouseInside(mouseX, mouseY) === true && currentScene === 5) {
        drawScene8();
    } else if (button2.isMouseInside(mouseX, mouseY) === true && currentScene === 6) {
        drawScene9();
    };

    if (door1.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
        drawScene4();
    } else if (door2.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
        drawScene5();
    } else if (door3.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
        drawScene6();
    };


    // } else if (button2.isMouseInside(mouseX, mouseY) === true && currentScene === 2) {
    //     drawScene3();
    // } else if (button3.isMouseInside(mouseX, mouseY) === true && currentScene === 2) {
    //     drawScene4();
    // } else if (button3.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
    //     drawScene4();
    // } else if (button4.isMouseInside(mouseX, mouseY) === true && currentScene === 3) {
    //     drawScene5();
    // } else if (button5.isMouseInside(mouseX, mouseY) === true && currentScene === 4) {
    //     drawScene9();
    // } else if (button6.isMouseInside(mouseX, mouseY) === true && currentScene === 5) {
    //     drawScene6();
    // } else if (button7.isMouseInside(mouseX, mouseY) === true && currentScene === 5) {
    //     drawScene7();
    // } else if (button8.isMouseInside(mouseX, mouseY) === true && currentScene === 6) {
    //     drawScene8();
    // } else if (button9.isMouseInside(mouseX, mouseY) === true && currentScene === 7) {
    //     drawScene9();
    // };

}
function draw(){
    if (currentScene === 1) {
        drawScene1();
    }
    if (currentScene === 2) {
        drawScene2();
        machineSmall.checkForCollision(misha);
    }

    if (currentScene === 3) {
        drawScene3();

    }
    if (currentScene === 4) {
        drawScene4();

    }
    if (currentScene === 5) {
        drawScene5();

    }
    if (currentScene === 6) {
        drawScene6();

    }
    if (currentScene === 7) {
        drawScene7();

    }
    if (currentScene === 8) {
        drawScene8();

    }
    if (currentScene === 9) {
        drawScene9();

    }
};

function setup() {
    createCanvas(400, 400);
    
    button1 = new Button(width*0.33,height*0.87,130,34,"CLICK TO START");
    button2 = new Button(width*0.33,height*0.87,130,34,"GO BACK HOME");
    misha = new Player(width/2, height/2, positionImg);
    door1 = new Door(width/8, height/1.6, "1893");
    door2 = new Door(width/2.4, height/1.6, "1895");
    door3 = new Door(width/1.4, height/1.6, "1923");
    machineSmall = new Machine(width/1.3, height-125, machineImg, 100, 125);
    machineBig = new Machine(width/2-50, height/3+25, machineImg, 100, 125);
    strip1 = new Strip(width/2-25, height/2, stripImg, 75, 125);
    home = new Final(width/2-75, height/2, finalImg);
    drawScene1();
}


