var score = 0;
var countdownTimer;

function preload() {
    //background img
    bg = loadImage('../assets/canvas3.jpg');
    bg1 = loadImage('../assets/intro1.jpg');
    bg2 = loadImage('../assets/rules.jpg');
    
    bgfinalgood = loadImage('../assets/win.jpg');
    
    //objects img
    
    

    //sounds
    soundtrack100 = loadSound('../assets/sound/cabaret.mp3');
   

    soundfinal = loadSound('../assets/sound/fanfare.mp3');


    
}


function draw() {
    //this.scene1.draw();
    //this.scene2.draw();
    this.currentScene.draw();
    this.currentScene.update();
    //this.scenefinalbad.draw();
    //this.scenefinalgood.draw();

	


}

function mouseClicked(event) {
    if (this.currentScene) {
        this.currentScene.clicked(mouseX, mouseY);
        event.preventDefault();
        return false;
    }
}

function keyPressed(event) {
    if (this.currentScene) {
        this.currentScene.pressed(keyCode);
        event.preventDefault();
        return false;
    }
}

function touchEnded(event) {
    if (this.currentScene) {
        this.currentScene.clicked(touchX, touchY);
        event.preventDefault();
        return false;
    }
}

function setup() {
    var screenSize;
    viewPosition = createVector(0,0);

    if (window.innerWidth > window.innerHeight) {
        screenSize = Math.min(200, window.innerHeight / 3);
        createCanvas(screenSize * 4, screenSize * 3);
    } else {
        screenSize = Math.min(200, window.innerWidth / 4);
        createCanvas(screenSize * 4, screenSize * 3);
    }


    //noLoop();
    //scenes

    this.currentScene = this.introScene = createIntroScene(this);
    this.ruleScene = createRuleScene(this);
    this.gameScene = createGameScene(this);
    this.finalScene = createFinalScene(this);
  
}

function gameOver() {
	if (countdownTimer) {
		clearInterval(countdownTimer);
	}
    this.currentScene = this.finalScene;
    this.soundtrack.stop();
    this.soundfinal.play();
}


function createGameScene(game) {
    var scene = new SceneSub(bg);

    
    scene.widgets.push(new ScoreScreen());
  


    return scene;
}

var restartFunction = function(game) {
    return function() {
        clear();
        game.currentScene = game.gameScene;
        game.gameScene.start();
        score = 20000;
        drinks = 0;
        soundfinal.stop();
        soundloose.stop();

        game.soundtrack = soundtrack100;
        game.soundtrack.loop();  
    };
};
function createFinalScene(game) {
    var scene = new Scene(bgfinalgood);
    //var btnfinal = new Button("Restart", restartFunction(game));

    var finalScore = new FinalScreen();

    scene.widgets.push(finalScore);
    //scene.widgets.push(btnfinal);

    return scene;
}



function createRuleScene(game) {

    var scene = new Scene(bg2);

    var btn2 = new Button("Click to start!", function() {
        clear();
        game.currentScene = game.gameScene;  
        game.soundtrack = soundtrack100;          
        game.soundtrack.loop();

        game.gameScene.start();
    });
    scene.widgets.push(btn2);
    return scene;
}

function createIntroScene(game) {
    var scene = new Scene(bg1);

    var btn1 = new Button("Start Me", function() {
        game.currentScene = game.ruleScene;
    });
    scene.widgets.push(btn1);
    return scene;
}
