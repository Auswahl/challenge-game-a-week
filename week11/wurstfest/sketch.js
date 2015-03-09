
var score = 0;

function preload() {
    bg1 = loadImage('../assets/scene1.jpg');
    bg2 = loadImage('../assets/scene2.jpg');
    bg3 = loadImage('../assets/bg3.png');
    bgfinalbad = loadImage('../assets/finalbad.jpg');
    bgfinalgood = loadImage('../assets/finalgood.jpg');
    babyImg = loadImage('../assets/pig1.png');
    teenImg = loadImage('../assets/pig2.png');
    adultImg = loadImage('../assets/pig3.png');
    food = loadImage('../assets/apple.png');
    water = loadImage('../assets/raindrop.png');
    broom = loadImage('../assets/broom.png');
    soundtrack = loadSound('../assets/soundtrack.wav');
    soundfinal = loadSound('../assets/fanfare.mp3');
}


function draw() {
    //this.scene1.draw();
    //this.scene2.draw();
    this.currentScene.draw();
    this.currentScene.update();
    //this.scenefinalbad.draw();
    //this.scenefinalgood.draw();
};

function mouseClicked() {
    this.currentScene.clicked(mouseX, mouseY);
    return false;

}

function touchEnded() {
    this.currentScene.clicked(touchX, touchY);
    return false;
}

function setup() {
    if(window.innerWidth > window.innerHeight){
        var screenSize = window.innerHeight/3;
        createCanvas(screenSize*4, screenSize*3);
    } else {
        var screenSize = window.innerWidth/4;
        createCanvas(screenSize*4, screenSize*3);
    }

    //noLoop();
    //scenes

    this.scene1 = new Scene(bg1);
    var that = this;

    var btn1 = new Button("Start the Game", function() {
        that.currentScene = that.scene2;
    })
    this.scene1.widgets.push(btn1);
    this.currentScene = this.scene1;

    this.scene2 = new Scene(bg2);

    var btn2 = new Button("Let's begin", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        soundtrack.loop();
    })
    this.scene2.widgets.push(btn2);

    this.scene3 = new Scene(bg3);
    var pig1 = new Pig(width/20);
    this.scene3.widgets.push(pig1);
    var pig2 = new Pig(7.5*width/20);
    this.scene3.widgets.push(pig2);
    var pig3 = new Pig(14*width/20);
    this.scene3.widgets.push(pig3);

    this.scene3.widgets.push(new ScoreScreen());
    this.scene3.widgets.push(new TimerScreen());


    this.scenefinalbad = new Scene(bgfinalbad);
    var btnfinal = new Button("Click to Restart", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        score = 0;
        soundtrack.loop();
    })
    this.scenefinalbad.widgets.push(btnfinal);

    this.scenefinalgood = new Scene(bgfinalgood);
    var btnfinal = new Button("Click to Restart", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        score = 0;
        soundtrack.loop();
    })

    this.scenefinalgood.widgets.push(btnfinal);
};    

function gameOver() {
    if (score >= 200) {
        this.currentScene = this.scenefinalgood;
        soundtrack.stop();
        soundfinal.play();
    } else {
        this.currentScene = this.scenefinalbad;
        soundtrack.stop();
        soundfinal.play();
    }
}