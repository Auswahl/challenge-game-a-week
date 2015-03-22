
var score = 0;
var dudu = 1200;
var necroWin = 0;

function preload() {
    bg1 = loadImage('../assets/scene1.jpg');
    bg2 = loadImage('../assets/scene2.jpg');
    bg3 = loadImage('../assets/bg3.jpg');
    bgfinalbad = loadImage('../assets/finalbad.jpg');
    bgfinalgood = loadImage('../assets/finalgood.jpg');
    mall0 = loadImage('../assets/hole1.png');
    mall1 = loadImage('../assets/mall1.png');
    mall2 = loadImage('../assets/mall2.png');
    mall3 = loadImage('../assets/mall3.png');
    mall4 = loadImage('../assets/mall4.png');

    soundtrack = loadSound('../assets/sound/mozart.mp3');
    soundfinal = loadSound('../assets/sound/fanfare.mp3');
    soundclick = loadSound('../assets/sound/drum.mp3');
}


function draw() {
    //this.scene1.draw();
    //this.scene2.draw();
    this.currentScene.draw();
    this.currentScene.update();
    //this.scenefinalbad.draw();
    //this.scenefinalgood.draw();

    if (frameCount%30 === 0) {
        dudu -= 12;
    }
};

function mouseClicked(event) {
    this.currentScene.clicked(mouseX, mouseY);
    event.preventDefault();
    return false;

}

function touchEnded(e) {
    this.currentScene.clicked(touchX, touchY);
    event.preventDefault();
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

    var btn1 = new Button("Start It", function() {
        that.currentScene = that.scene2;
    })
    this.scene1.widgets.push(btn1);
    this.currentScene = this.scene1;

    this.scene2 = new Scene(bg2);

    var btn2 = new Button("Whack it!", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        soundtrack.loop();
    })
    this.scene2.widgets.push(btn2);

    this.scene3 = new Scene(bg3);
    var mall1 = new Mall(width/20, height/20*2);
    this.scene3.widgets.push(mall1); 
    var mall2 = new Mall(width/20, height/20*8);
    this.scene3.widgets.push(mall2); 
    var mall3 = new Mall(width/20, height/20*16);
    this.scene3.widgets.push(mall3); 
    var mall4 = new Mall(width/20*9, height/20*2);
    this.scene3.widgets.push(mall4); 
    var mall5 = new Mall(width/20*9, height/20*8);
    this.scene3.widgets.push(mall5); 
    var mall6 = new Mall(width/20*9, height/20*16);
    this.scene3.widgets.push(mall6); 
    var mall7 = new Mall(width/20*17, height/20*2);
    this.scene3.widgets.push(mall7); 
    var mall8 = new Mall(width/20*17, height/20*8);
    this.scene3.widgets.push(mall8); 
    var mall9 = new Mall(width/20*17, height/20*16);
    this.scene3.widgets.push(mall9); 
    this.scene3.widgets.push(new ScoreScreen());
    this.scene3.widgets.push(new TimerScreen());


    this.scenefinalbad = new Scene(bgfinalbad);
    var btnfinal = new Button("Restart", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        score = 0;
        //soundtrack.loop();
    })
    this.scenefinalbad.widgets.push(btnfinal);

    this.scenefinalgood = new Scene(bgfinalgood);
    var btnfinal = new Button("Restart", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        necroWin = 0;
        score = 0;
        soundfinal.stop();

        soundtrack.loop();
    })

    var finalScore = new FinalScreen();
    this.scenefinalgood.widgets.push(finalScore);

    this.scenefinalgood.widgets.push(btnfinal);
};    

function gameOver() {
    if (necroWin >= 5) {
        this.currentScene = this.scenefinalgood;
        soundtrack.stop();
        soundfinal.play();
    }
}