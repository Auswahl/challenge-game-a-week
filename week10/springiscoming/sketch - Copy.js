var button1;



var soundbell;
var soundzombie;
var soundkiller;
var soundmove;

var zombieImg;
var leftZombieImg;

function preload() {
    zombieImg = [
        loadImage("../assets/zombie/zombie11.png"),
        loadImage("../assets/zombie/zombie12.png"),
        loadImage("../assets/zombie/zombie13.png"),
        loadImage("../assets/zombie/zombie14.png"),
        loadImage("../assets/zombie/zombie15.png"),
        loadImage("../assets/zombie/zombie16.png"),
        loadImage("../assets/zombie/zombie17.png"),
        loadImage("../assets/zombie/zombie18.png"),
        loadImage("../assets/zombie/zombie19.png"), 
        loadImage("../assets/zombie/zombie20.png"),  
        loadImage("../assets/zombie/zombie21.png"),  
        loadImage("../assets/zombie/zombie22.png"),  
        loadImage("../assets/zombie/zombie23.png"),  
        loadImage("../assets/zombie/zombie24.png"),  
        loadImage("../assets/zombie/zombie25.png"), 
        loadImage("../assets/zombie/zombie26.png"),  
        loadImage("../assets/zombie/zombie27.png")  


    ];

    leftZombieImg = [
        loadImage("../assets/zombie/leftzombie1.png"),
        loadImage("../assets/zombie/leftzombie2.png"),
        loadImage("../assets/zombie/leftzombie3.png"),
        loadImage("../assets/zombie/leftzombie4.png"),
        loadImage("../assets/zombie/leftzombie5.png"),
        loadImage("../assets/zombie/leftzombie6.png"),
        loadImage("../assets/zombie/leftzombie7.png"),
        ];

    tank1Img = [
        loadImage("../assets/zombie/player11.png"),
        loadImage("../assets/zombie/player12.png"),
        loadImage("../assets/zombie/player21.png"),
        loadImage("../assets/zombie/player22.png"),
        loadImage("../assets/zombie/player31.png"),
        loadImage("../assets/zombie/player32.png"),
        loadImage("../assets/zombie/player31.png"),
        loadImage("../assets/zombie/player22.png"),
        loadImage("../assets/zombie/player21.png"),
        loadImage("../assets/zombie/player12.png")
    ];

     
    //soundbell = loadSound('../assets/sound/funeral_bells.mp3');
    soundkiller = loadSound('../assets/sound/killer_movie.mp3');
    soundzombie = loadSound('../assets/sound/zombie_attack.mp3');
    soundmove = loadSound('../assets/sound/getout.mp3');
    
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
    fill(255,255,255);
    stroke(255);
    fill(0,0,0);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255,255,255);
    textSize(13);
    textAlign(LEFT);
    noStroke();
    text(this.labelText, this.x+10, this.y+this.height/1.5);
};

Button.prototype.isMouseInside = function(mouseX, mouseY) {
    return (mouseX >= this.x &&
            mouseX <= (this.x+this.width) &&
            mouseY >= this.y && 
            mouseY <= (this.y+this.height));
};

//Zombie
var Zombie = function(x,y, arrayOfImages, width, height){
    this.x = x;
    this.y = y;
    this.images = arrayOfImages;
    this.width = width;
    this.height = height;
    this.currentIndex = 0;
}

Zombie.prototype.update = function() {
    if ((frameCount%12) === 0){
      this.currentIndex = this.currentIndex+1;  
    }  
    
        
    if (this.currentIndex >= 8) {
        this.x--;
    };

    if (this.currentIndex === 16){
        this.currentIndex = 10;
    }
    
}

Zombie.prototype.draw = function() {
    imageMode(CORNER);
    image(this.images[this.currentIndex],this.x, this.y, this.width, this.height);
};


var LeftZombie = function(x,y, arrayOfImages, width, height){
    Zombie.call(this,x,y, arrayOfImages, width, height);
};

LeftZombie.prototype = Object.create(Zombie.prototype);

LeftZombie.prototype.update = function(){
    this.x++;

    if ((frameCount%10) === 0){
      this.currentIndex = this.currentIndex+1;  
    }  

    if (this.currentIndex === 6){
        this.currentIndex = 0;
    }

}





//Tank
var Tank = function(x,y, arrayOfImages){
    this.x = x;
    this.y = y;
    this.images = arrayOfImages;
    this.width = 6.5;
    this.height = 10;
    this.currentIndex = 0;
    this.ellipseHeight = 5;
    this.ellipseWidth = 5;
}

Tank.prototype.update = function() {
    if ((frameCount%6) === 0){
      this.currentIndex = this.currentIndex+1;  
    }  

    if (this.currentIndex >= this.images.length) {
        
        this.currentIndex = 0;

        if (this.width <= 200) {
            this.height = this.height*1.5;
            this.width = this.width*1.5;
            this.ellipseHeight = this.height+this.height/1.5;
            this.ellipseWidth = this.width*2.2;

        }

    };


}

Tank.prototype.draw = function() {
    fill(255,255,255);
    ellipse(this.x, this.y, this.ellipseWidth, this.ellipseHeight);
    imageMode(CENTER);
    image(this.images[this.currentIndex],this.x, this.y, this.width, this.height);
};

var drawScene1 = function() { // Scene 1
    currentScene = 1;

    background(0,0,0);
   
    button1.draw();
};

var objects = [];
var tank1;

var startScene2 = function() {
    soundkiller.play();
    setTimeout(function() {
        objects.push(new Zombie(width/2.1, height-125, zombieImg, 100, 125));
    }, 1000);

    setTimeout(function() {
        tank1 = new Tank(width/2, height/2, tank1Img);
    }, 1000);

    setTimeout(function() {
        objects.push(new Zombie(width/1.9, height/1.9, zombieImg, 100, 125));
    }, 3000);
    
    setTimeout(function() {
        objects.push(new Zombie(width/1.2, height/2, zombieImg, 100, 125));
    }, 5500);

    setTimeout(function() {
        objects.push(new LeftZombie(-100, height-125, leftZombieImg, 100, 125));
    }, 2000);

    setTimeout(function() {
        objects.push(new LeftZombie(-100, height-250, leftZombieImg, 50, 65));
    }, 3000);
    
    setTimeout(function() {
        objects.push(new LeftZombie(-100, height-325, leftZombieImg, 35, 45));
    }, 4000);

    setTimeout(function() {
        soundzombie.play();
    }, 4000);

    setTimeout(function() {
        soundzombie.play();
    }, 7000);
    setTimeout(function() {
        soundmove.play();
    }, 7500);



    currentScene = 2;

    // if ((this.x <= 0) && (this.y = height/1.9)) {
    //     this.currentIndex = 0;
    //     this.x = width/1.2;
    //     this.y = height/2;
    // } else if (this.x <= 0) {
        
    //     this.currentIndex = 0;
    //     this.x = width/1.9;
    //     this.y = height/1.9;

    // };
}

var drawScene2 = function() { // Scene 2
    background(0,0,0);
    
    if (tank1.width >= 200){
        currentScene = 3;
    }

    
    for(var id in objects) {
        objects[id].draw();
        objects[id].update();
        
    }
    tank1.update();
    tank1.draw();
};
    
var drawScene3 = function(){
    currentScene = 3;
    soundkiller.stop();
    tank1.update();
    tank1.draw();
    fill(255,255,255);
    stroke(1);
    textSize(34);
    text ("February the 23th", 50, 50);
    textSize(23);
    stroke(1);
    text ("Happy Defender's day, walkers", 25, 350);
   
    
    
}




// function keyPressed(){
//     if(keyCode === RIGHT_ARROW){
//         misha.update();
//     }
// }

mouseClicked = function() {
    if (button1.isMouseInside(mouseX, mouseY) === true && currentScene === 1) {
        //soundtrack.loop();
        startScene2();
    } 

  
}
function draw(){
    if (currentScene === 1) {
        drawScene1();
    }
    if (currentScene === 2) {
        drawScene2();
        //machineSmall.checkForCollision(misha);
    }

    if (currentScene === 3) {
        drawScene3();

    }
    
};

function setup() {
    createCanvas(400, 400);
    
    button1 = new Button(width*0.33,height/2,135,34,"CLICK ME PLEASE");
    
    
    
    drawScene1();
}


