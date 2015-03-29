var score = 20000;
var speed = 1;

function preload() {
    //background img
    bg = loadImage('../assets/pavementdark.jpg');
    bg1 = loadImage('../assets/scene1.jpg');
    bg2 = loadImage('../assets/scene2.jpg');
    bg3 = loadImage('../assets/scene3.jpg');
    bgfinalgood = loadImage('../assets/finalgood.jpg');

    //objects img
    mishaImg = loadImage('../assets/skater1.png');
    oldladyImg = loadImage('../assets/oldy.png');
    coffeeImg = loadImage('../assets/coffeelight.png');

    //buttons
    arrowRightImg = loadImage('../assets/arrowr.png');
    arrowLeftImg = loadImage('../assets/arrowl.png');


    //sounds
    soundtrack = loadSound('../assets/sound/musical034.mp3');
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
}

function gameOver() {
    this.currentScene = this.finalScene;
    this.soundtrack.stop();
    this.soundfinal.play();
}

function createGameScene(game) {
    var scene = new SceneSub(bg);

    game.misha = new Player();
    scene.widgets.push(misha);

    for (var i = 0; i < 5; i++) {
        scene.widgets.push(
            new Mess(random(i * width / 5, i * width / 5 + width / 5), random(20, 260))
        );


    }
    for (i = 0; i < 2; i++) {
        scene.widgets.push(
            new Mess2(random(i * width / 2, i * width / 2 + width / 2), random(20, 260))
        );
    }
    scene.widgets.push(new ScoreScreen());

    return scene;
}

function createFinalScene(game) {
    var scene = new Scene(bgfinalgood);
    var btnfinal = new Button("Restart", function() {
        clear();
        game.currentScene = game.gameScene;
        game.gameScene.start();
        score = 20000;
        speed = 1;
        soundfinal.stop();
        soundtrack.loop();
    });

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
        soundtrack.loop();

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
