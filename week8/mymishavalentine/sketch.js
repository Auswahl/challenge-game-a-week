var grassBlockImg;
var happyPoint;
var playerImg;
var playerImgHop;
var playerImgHurt;
var bg;
var soundhop;
var beaver;
var loveImg;
var apartImg;



function preload() {
bg = loadImage("../assets/backgroundImg.png");
playerImg = loadImage("../assets/happylena.png");
playerImgHop = loadImage("../assets/hoppylena.png");
playerImgHurt = loadImage("../assets/happylenahurt.png");
grassBlockImg = loadImage("../assets/GrassBlock.png");
happyPoint = loadImage("../assets/heartImg.png");
loveImg = loadImage("../assets/love.png");
apartImg = loadImage("../assets/apart.png");
soundhop = loadSound('../assets/hop.mp3');
soundhurt = loadSound('../assets/heartbeat.mp3');
soundairhorn = loadSound('../assets/airhorn.mp3');
soundfanfare = loadSound('../assets/fanfare.mp3');
}

var Beaver = function(x,y) {
    this.x = x;
    this.y = y;

    this.sticks = 0;
    this.JUMP_HEIGHT = 250;
    this.isJumping = false;
    this.hurtFrame = 0;
};

Beaver.prototype.draw = function() { 
    imageMode(CENTER);

   if(this.y < height-50){
        image(playerImgHop, this.x, this.y, 60, 60);
   } else if (this.isHurt === true){
        image(playerImgHurt, this.x, this.y, 60, 60);
   } else {
        image(playerImg, this.x, this.y, 60, 60);
   }

  

};

Beaver.prototype.update = function(){
    this.y = constrain(this.y, 0, height-50);
    if(this.isJumping === true){
        this.y -=5;
    } else if(this.y <= height-50){
        this.y+=5;
    }
    if(this.y <= this.JUMP_HEIGHT){
        this.isJumping = false;
    }
    if (frameCount > this.hurtFrame+30){
        this.isHurt = false;
    }
};

Beaver.prototype.hop = function(){
    if(this.y >= height - 50){
        soundhop.play();
        this.isJumping = true;
    }
    
};



Beaver.prototype.hurt = function(){
    soundhurt.play();
    this.isHurt = true;
    this.hurtFrame = frameCount;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    //if beaver is over stick, do something
    if ((stick.x >= this.x && stick.x <= (this.x+40)) &&
        (stick.y >= this.y && stick.y <= (this.y+40))) {
            stick.y = -400;
            this.sticks++;
            
            beaver.hurt();
        }
};

//sticks
var Stick = function(x,y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    imageMode(CENTER);
    image(happyPoint, this.x, this.y); //points
     
};





// environment



//array of sticks
var sticks = [];

//array of X positions for each grass block
var grassXs = [];

var drawSadFinalScene = function() { // Final Scene
    currentScene = 2;
    soundairhorn.play();
    noLoop();
    imageMode(CORNER);
    background(bg);
    rectMode(CORNER);

    //stroke(1);
    fill(255,255,255);
    textSize(25);
    textAlign(CENTER);
    textFont("Georgia");
    text("Lena failed, so now", width/2, height/6);
    text("Misha and Lena", width/2, height/6+35);
    text("are too far from each other", width/2, height/6+70);
    image(apartImg, 0, height/6+90 )
    imageMode(CORNER);
    rectMode(CORNER);
    fill(38, 26, 26);
    rect(0, height*0.93, width, height*0.09);
    fill(255, 255, 255);
    textSize(13);
    text("and I hate you for that :(", width/2, 395);
    noLoop();
}

var drawHappyFinalScene = function() { // Final Scene
    currentScene = 3;
    soundfanfare.play();
    noLoop();
    imageMode(CORNER);
    background(bg);
    rectMode(CORNER);

    //stroke(1);
    fill(255,255,255);
    textSize(28);
    textAlign(CENTER);
    textFont("Georgia");
    text("You did it!", width/2, height/6);
    text("Misha and Lena", width/2, height/6+35);
    text("are finally together", width/2, height/6+70);
    image(loveImg, 75, height/6+90)
    imageMode(CORNER);
    rectMode(CORNER);
    fill(38, 26, 26);
    rect(0, height*0.93, width, height*0.09);
    fill(255, 255, 255);
    textSize(13);
    textAlign(CENTER);
    text("Thank you, oh brave hero :)", 200, 390);
    noLoop();

}

function mainScene(){
     currentScene = 1;

     imageMode(CORNER);
     rectMode(CORNER);

     background(bg, 0, 0);
     noStroke();
     fill(38, 26, 26);
     rect(0, height*0.93, width, height*0.09);

     
     
    //grass
    for (var i = 0; i < grassXs.length; i++) {
        
        image(grassBlockImg, grassXs[i], height*0.90, 20, 20); //new version of Grass image
        grassXs[i] -= 2;//grass moving
        if (grassXs[i] <= -20) { //grass respawn
            grassXs[i] = width;
        }
    }
    
    
    // //check grabbed sticks
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -=2;
    } 

    textSize(20);
    fill(255, 255, 255);
    textAlign(LEFT);
    text("Love damage: " + beaver.sticks, 20, 30);
    fill(255, 255, 255);
    textSize(13);
    textAlign(CENTER);
    text("Bring me to my beloved Misha!", width/2, 395);

    if (beaver.sticks/sticks.length >= 0.85) {
        textSize(26); 
        fill(41, 1, 52);
        textAlign(CENTER);       
        text("Oh no!!!", width/2, 150);
        text("That was too much for my love", width/2, 200);
        //text("We'll never be together...", 55, 250);
    } else if (beaver.sticks/sticks.length >= 0.70 && beaver.sticks/sticks.length < 0.85) {
         fill(41, 1, 52);
        textSize(20);        
        text("My heart is almost broken!", width/2, 200);
        
    } else if (beaver.sticks/sticks.length >= 0.40 && beaver.sticks/sticks.length < 0.65) {
         fill(41, 1, 52);
        textSize(20);        
        text("Oh, that totally hurts my feelings", width/2, 200);
        
    } 



    

    beaver.draw();
    beaver.update();
    if((sticks[sticks.length-1].x < 0)&&(beaver.sticks/sticks.length >= 0.85)){
        currentScene = 2;
    } else if((sticks[sticks.length-1].x < 0)&&(beaver.sticks/sticks.length < 0.85)){
        currentScene = 3;
    } 

}

function setup() {
    createCanvas(400, 400);
    beaver = new Beaver(75, 300);
    for ( var i = 0; i < 25; i++ ) {
        grassXs.push(i*20);
    } 

    var x = random(200, 400);
    for ( var i = 0; i < 20; i++) {
        x = x + random(100, 200);
        sticks.push(new Stick(x, height-40));
    }
    mainScene();

  }

function draw() {
    if (currentScene === 1) {
        mainScene();
    }
    if (currentScene === 2) {
        drawSadFinalScene();
        
    }
    if (currentScene === 3) {
        drawHappyFinalScene();
        
    }

};


 function keyPressed() {
    beaver.hop();
    return false;
 };