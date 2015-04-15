var score = 30;
var speed = 2;
var drinks = 0;

function preload() {
    //background img
    bg = loadImage('../assets/pavementdark.jpg');
    bg1 = loadImage('../assets/intro1.jpg');
    bg2 = loadImage('../assets/rules.jpg');
    //bg3 = loadImage('../assets/scene3.jpg');
    bgfinalgood = loadImage('../assets/win.jpg');
    bgfinalbad = loadImage('../assets/finalbad.jpg');

    //objects img
    
    mishaImg = loadImage('../assets/misha1.png');
    //oldladyImg = loadImage('../assets/oldy.png');

    //sounds
    soundtrack100 = loadSound('../assets/sound/sound100.wav');
    soundtrack110 = loadSound('../assets/sound/sound110.wav');
    soundtrack120 = loadSound('../assets/sound/sound120.wav');
    soundtrack130 = loadSound('../assets/sound/sound130.wav');

    soundfinal = loadSound('../assets/sound/fanfare.mp3');
    soundloose = loadSound('../assets/sound/airhorn.mp3');
    soundclick = loadSound('../assets/sound/drum.mp3');

    drinkImages = [
        loadImage('../assets/cocktail1.png'),
        loadImage('../assets/cocktail2.png'),
        loadImage('../assets/cocktail3.png'),
        loadImage('../assets/cocktail4.png'),
        loadImage('../assets/cocktail5.png')
    ];
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
    this.looseScene = createLooseScene(this);
    
}

function gameOver() {
    this.currentScene = this.finalScene;
    this.soundtrack.stop();
    this.soundfinal.play();
}


function loose() {
    this.currentScene = this.looseScene;
    this.soundtrack.stop();
    this.soundloose.play();
}




function createGameScene(game) {
    var scene = new SceneSub(bg);

    game.misha = new Player();
    scene.widgets.push(misha);
    scene.widgets.push(new Walls());
    
    
    scene.widgets.push(new ScoreScreen());
    scene.widgets.push(new DrunkScreen());


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
    var btnfinal = new Button("Restart", restartFunction(game));

    var finalScore = new FinalScreen();

    scene.widgets.push(finalScore);
    scene.widgets.push(btnfinal);

    return scene;
}

function createLooseScene(game) {
    var scene = new Scene(bgfinalbad);
    var btnfinal = new Button("Restart", restartFunction(game));

    var finalScore = new FinalScreen();

    scene.widgets.push(finalScore);
    scene.widgets.push(btnfinal);

    return scene;
}

function createRuleScene(game) {

    var scene = new Scene(bg2);

    var btn2 = new Button("Go,go,go!", function() {
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
