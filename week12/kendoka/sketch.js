
var score = 0;

function preload() {
    bg1 = loadImage('../assets/back/kendoscene1.jpg');
    bg2 = loadImage('../assets/back/kendoscene2.jpg');
    bg3 = loadImage('../assets/back/kendoscene3.jpg');
    bgfinalbad = loadImage('../assets/back/kendoscenefinal3.jpg');
    bgfinalgood = loadImage('../assets/back/kendoscenefinal1.jpg');
    bgfinalneutral = loadImage('../assets/back/kendoscenefinal2.jpg');
    // babyImg = loadImage('../assets/pig1.png');
    // teenImg = loadImage('../assets/pig2.png');
    // adultImg = loadImage('../assets/pig3.png');
    // food = loadImage('../assets/apple.png');
    // water = loadImage('../assets/raindrop.png');
    // broom = loadImage('../assets/broom.png');
    playerkb = loadImage('../assets/player/koteblueplayer.jpg');
    playerkg = loadImage('../assets/player/kotegreenplayer.jpg');
    playerkr = loadImage('../assets/player/koteredplayer.jpg');
    
    playermb = loadImage('../assets/player/menblueplayer.jpg');
    playermg = loadImage('../assets/player/mengreenplayer.jpg');
    playermr = loadImage('../assets/player/menredplayer.jpg');
    
    playerdb = loadImage('../assets/player/doblueplayer.jpg');
    playerdg = loadImage('../assets/player/dogreenplayer.jpg');
    playerdr = loadImage('../assets/player/doredplayer.jpg');

    mishakb = loadImage('../assets/misha/koteblue.jpg');
    mishakg = loadImage('../assets/misha/kotegreen.jpg');
    mishakr = loadImage('../assets/misha/kotered.jpg');
    
    mishamb = loadImage('../assets/misha/menblue.jpg');
    mishamg = loadImage('../assets/misha/mengreen.jpg');
    mishamr = loadImage('../assets/misha/menred.jpg');
    
    mishadb = loadImage('../assets/misha/doblue.jpg');
    mishadg = loadImage('../assets/misha/dogreen.jpg');
    mishadr = loadImage('../assets/misha/dored.jpg');

    soundtrack = loadSound('../assets/sound/drum_rythm1.mp3');
    soundfinal = loadSound('../assets/fanfare.mp3');
}


function draw() {
    this.currentScene.draw();
    this.currentScene.update();
}

function mouseClicked(event) {
    this.currentScene.clicked(mouseX, mouseY);
    // event.preventDefault();
    return false;

}

function touchEnded(event) {
    this.currentScene.clicked(touchX, touchY);
    // if (event.preventDefault) event.preventDefault();
    // if (event.stopPropagation) event.stopPropagation();
    return false;
}

function mouseMoved() {
    if (this.currentScene) {
        this.currentScene.onMousehover(mouseX, mouseY);
        return false;
    }
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

    var btn1 = new Button("Click to Start", function() {
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
 
    createScene3();

    this.scenefinalbad = new Scene(bgfinalbad);
    var btnfinal = new Button("Click to Restart", function() { 
        clear();      
        that.currentScene = that.scene3;
        that.scene3.start();
        reset();
    })
    this.scenefinalbad.widgets.push(btnfinal);

    this.scenefinalgood = new Scene(bgfinalgood);
    this.scenefinalgood.widgets.push(btnfinal);

    this.scenefinalneutral = new Scene(bgfinalneutral);
    this.scenefinalneutral.widgets.push(btnfinal);
};    


var state = {
    player: {
        defense: {
            kote: false,
            do: false,
            men: false,
            clickes: 2,
        },
        attack: {
            kote: false,
            do: false,
            men: false,
            clickes: 2
        },
        ippon: 0
    },
    misha: {
        defense: {},
        attack: {},
        ippon: 0
    }
};

function action(kendokaState, part) {
    if (kendokaState[part]) {
        kendokaState.clickes++;
        kendokaState[part] = false;
        this.hajime.color = color(80, 80, 80);
        return true;
    } else if (kendokaState.clickes > 0) {
        kendokaState.clickes--;
        kendokaState[part] = true;

        if (state.player.defense.clickes === 0 && state.player.attack.clickes === 0) {
            this.hajime.color = color(237, 28, 36);
        } 
        return true;
    } else {
        this.hajime.color = color(80, 80, 80);

        return false;
    }

}


function mishaAttacks() {
    state.misha.attack.kote = true;
    state.misha.attack.men = true;
    state.misha.attack.do = true;

    var attack = floor(random(3));

    if (attack === 0) {
        state.misha.attack.kote = false;
    } else if (attack === 1) {
        state.misha.attack.men = false;
    } else if (attack === 2) {
        state.misha.attack.do = false;
    } 
}

function mishaDefends() {
    state.misha.defense.kote = true;
    state.misha.defense.men = true;
    state.misha.defense.do = true;

    var defense = floor(random(3));

    if (defense === 0) {
        state.misha.defense.kote = false;
    } else if (defense === 1) {
        state.misha.defense.men = false;
    } else if (defense === 2) {
        state.misha.defense.do = false;
    } 
}

function judge() {
    //check mishas attacks
    var attackSuccess = false, defenseSuccess = true;
    if (state.misha.attack.men && !state.player.defense.men) {
        state.misha.ippon++;
        defenseSuccess = false;
    }

    if (state.misha.attack.kote && !state.player.defense.kote) {
        state.misha.ippon++;
        defenseSuccess = false;
    }

    if (state.misha.attack.do && !state.player.defense.do) {
        state.misha.ippon++;
        defenseSuccess = false;
    }


    if (state.player.attack.men && !state.misha.defense.men) {
        state.player.ippon++;
        attackSuccess = true;
    }

    if (state.player.attack.kote && !state.misha.defense.kote) {
        state.player.ippon++;
        attackSuccess = true;
    }

    if (state.player.attack.do && !state.misha.defense.do) {
        state.player.ippon++;
        attackSuccess = true;
    }


    this.MishasScore.label = "Ippons: " + state.misha.ippon;
    this.PlayerScore.label = "Ippons: " + state.player.ippon;
   

    this.attackSuccess.label = (attackSuccess) ? "Successful attack!" : "No success...";
    this.defenseSuccess.label = (defenseSuccess) ? "Successful defense!" : "Ouch!";


    if (state.player.ippon === 3 || state.misha.ippon === 3) {
        gameOver();
    } else {
        halfReset();
    }
}

function halfReset() {
    this.player.start();
    this.misha.start();
    this.hajime.color = color(80, 80, 80);
    state.player.defense = {
                kote: false,
                do: false,
                men: false,
                clickes: 2,
            };
    state.player.attack = {
                kote: false,
                do: false,
                men: false,
                clickes: 2
            }
}

function reset() {
    state = {
        player: {
            defense: {
                kote: false,
                do: false,
                men: false,
                clickes: 2,
            },
            attack: {
                kote: false,
                do: false,
                men: false,
                clickes: 2
            },
            ippon: 0
        },
        misha: {
            defense: {},
            attack: {},
            ippon: 0
        }
    };

    this.MishasScore.label = "Ippons: 0";
    this.PlayerScore.label = "Ippons: 0";
    this.player.start();
    this.misha.start();

    this.attackSuccess.label  = "";
    this.defenseSuccess.label = "";

}


function gameOver() {
    if (state.misha.ippon > state.player.ippon) {
        this.currentScene = this.scenefinalbad;
    } else if (state.player.ippon > state.misha.ippon) {
        this.currentScene = this.scenefinalgood;
    } else {
        this.currentScene = this.scenefinalgood;
    }
}

function createScene3() {
    this.hajime = new Button("Hajime!", function() {
        if (state.player.defense.clickes > 0 || state.player.attack.clickes > 0) {
            return;
        }
        mishaAttacks(); mishaDefends();
        judge();   
    });
    this.hajime.color = color(80, 80, 80);
    this.scene3 = new Scene(bg3);

    this.player = new Kendoka();
    
    var options = {
        image: playerkb,
        hoverImage: playerkg,
        selectedImage: playerkr,
        x: width/4,
        y: height/5, 
        width: width*0.2, 
        height: height*0.2,
        action: function() { return action(state.player.defense, "kote"); }
    };
    var kotePlayer = new KendokaPart(options);
    this.player.widgets.push(kotePlayer)

    options = {
        image: playermb,
        hoverImage: playermg,
        selectedImage: playermr,
        x: width/18 - 10,
        y: height/5, 
        width: width*0.2, 
        height: height*0.2,
        action: function() { return action(state.player.defense, "men"); }
    };
    var menPlayer = new KendokaPart(options);
    this.player.widgets.push(menPlayer)

    options = {
        image: playerdb,
        hoverImage: playerdg,
        selectedImage: playerdr,
        x: width/18 - 10,
        y: height/5 + height*0.2+10, 
        width: width*0.4, 
        height: height*0.2,
        action: function() { return action(state.player.defense, "do"); }
    };
    var doPlayer = new KendokaPart(options);
    this.player.widgets.push(doPlayer)



    this.misha = new Kendoka();
    
    var options = {
        image: mishakb,
        hoverImage: mishakg,
        selectedImage: mishakr,
        x: width/1.8,
        y: height/5, 
        width: width*0.2, 
        height: height*0.2,
        action: function() { return action(state.player.attack, "kote"); }
    };
    var koteMisha = new KendokaPart(options);
    this.player.widgets.push(koteMisha)


    options = {
        image: mishamb,
        hoverImage: mishamg,
        selectedImage: mishamr,
        x: width/1.8 + width*0.2 + 7,
        y: height/5, 
        width: width*0.2, 
        height: height*0.2,
        action: function() { return action(state.player.attack, "men"); }
    };    
    var menMisha = new KendokaPart(options);
    this.player.widgets.push(menMisha)


    options = {
        image: mishadb,
        hoverImage: mishadg,
        selectedImage: mishadr,
        x: width/1.8,
        y: height/5 + height*0.2+10, 
        width: width*0.4, 
        height: height*0.2,
        action: function() { return action(state.player.attack, "do"); }
    };
    var doMisha = new KendokaPart(options);
    this.player.widgets.push(doMisha)


    this.scene3.widgets.push(this.hajime);
    this.scene3.widgets.push(this.player);
    this.scene3.widgets.push(this.misha);

    this.scene3.widgets.push(new Text("Choose defense:", width/4, height/6, color(0,0,0)));
    this.scene3.widgets.push(new Text("Choose attack:", width/1.3, height/6, color(0,0,0)));

    this.MishasScore = new Text("Ippons: 0", width/1.3, 4*height/6, color(237, 28, 36));
    this.PlayerScore = new Text("Ippons: 0", width/4, 4*height/6, color(237, 28, 36));
   
    this.attackSuccess = new Text("", width/1.3, 4.5*height/6, color(237, 28, 36));
    this.defenseSuccess = new Text("", width/4, 4.5*height/6, color(237, 28, 36));

    this.scene3.widgets.push(this.MishasScore);
    this.scene3.widgets.push(this.PlayerScore);
    this.scene3.widgets.push(this.attackSuccess);
    this.scene3.widgets.push(this.defenseSuccess);

}