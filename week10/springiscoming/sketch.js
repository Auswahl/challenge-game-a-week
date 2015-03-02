var button1;
var txt1;


var bg;
var fl1Img;
var fl2Img;
var fl3Img;

var soundtrack;

var state = {};
	
function preload() {

    bg = loadImage("../assets/back/brace.png");
    bg2 = loadImage("../assets/back/bgimg2.png");
    bg3 = loadImage("../assets/back/bgimg3.png");
    bg4 = loadImage("../assets/back/bgimg4.png");
    bg5 = loadImage("../assets/back/bgimg5.png");
    bgfinal1 = loadImage("../assets/back/bgfinal1.png");
    bgfinal2 = loadImage("../assets/back/bgfinal2.png");
    bgfinal3 = loadImage("../assets/back/bgfinal3.png");
    seedImg1 = loadImage("../assets/back/seed1.png");
    seedImg2 = loadImage("../assets/back/seed2.png");
    seedImg3 = loadImage("../assets/back/seed3.png");
    dropImg1 = loadImage("../assets/back/drop1.png");
    dropImg2 = loadImage("../assets/back/drop2.png");
    dropImg3 = loadImage("../assets/back/drop3.png");
    shitImg1 = loadImage("../assets/back/shit1.png");
    shitImg2 = loadImage("../assets/back/shit2.png");
    shitImg3 = loadImage("../assets/back/shit3.png");
    misha = loadImage("../assets/back/misha.png");

    fl1Img = [
	    loadImage("../assets/back/fl11.png"),
	    loadImage("../assets/back/fl12.png"),
    ];

    fl2Img = [
	    loadImage("../assets/back/fl21.png"),
	    loadImage("../assets/back/fl22.png"),
    ];

    fl3Img = [
	    loadImage("../assets/back/fl31.png"),
	    loadImage("../assets/back/fl32.png"),
    ];

    soundtrack = loadSound('../assets/sound/cabaret.mp3');

}

var currentScene;

mouseClicked = function() {
	currentScene.clicked(mouseX, mouseY);
	if (!soundtrack.isPlaying()) {
		soundtrack.play();  	
	}

};

touchEnded = function() {
	currentScene.clicked(touchX, touchY);
	if (!soundtrack.isPlaying()) {
		soundtrack.play();  	
	}

	return false;
};

function draw(){
    currentScene.draw();    
};

var scene1;
function setup() {
    createCanvas(400, 400);
    
    button1 = new Button(135,34,"CLICK ME PLEASE");
    txt1 = new HeaderTxt(color(28, 199, 45), "Spring Is Coming", height/8, 40);
    txt11 = new HeaderTxt(color(28, 199, 45), "brace yourself", height/8+35, 22);
    txt2 = new HeaderTxt(color(255,255,255), "Misha is a spring warrior! He needs a weapon - ", height/8, 18);
    txt21 = new HeaderTxt(color(255,255,255), "help him grow The Perfect Flower", height/8+35, 18);
    txt3 = new HeaderTxt(color(255,255,255), "Choose The Perfect Seed", height/10, 33);
    txt31 = new HeaderTxt(color(255,255,255), "genetics is important", height/10+30, 20);
    txt4 = new HeaderTxt(color(255,255,255), "Choose The Perfect Liquid", height/10, 30);
    txt41 = new HeaderTxt(color(255,255,255), "we are what we eat. Or drink", height/10+30, 20);
    txt5 = new HeaderTxt(color(255,255,255), "Choose The Perfect Fertilizer", height/10, 30);
    txt51 = new HeaderTxt(color(255,255,255), "'cause shit happens", height/10+30, 20);
    txt6 = new HeaderTxt(color(255,255,255), "What a sweet Flower! It forces winter  to melt", height/10, 18);
    txt61 = new HeaderTxt(color(255,255,255), "and make us all puke rainbows. Too sweet, meh", height/10+30, 18);
    txt7 = new HeaderTxt(color(255,255,255), "That's a Tough Flower! It's gonna kick winters ass!", height/10, 17);
    txt71 = new HeaderTxt(color(255,255,255), "or maybe Mishas ass. Or yours", height/10+30, 17);
    txt8 = new HeaderTxt(color(255,255,255), "Not sure if it is even a Flower. Or plant", height/10, 18);
    txt81 = new HeaderTxt(color(255,255,255), "just think about choices you made, weirdo", height/10+30, 18);
    txtdescription = new HeaderTxt(color(255,255,255), "make a choice, then CLICK on it", height-50, 18);
    anima1 = new Anima(misha);

    var scene8 = new AnimatedFinalScene(bgfinal3, fl3Img);
    scene8.text = txt8;
    scene8.subtext = txt81;

    var scene7 = new AnimatedFinalScene(bgfinal2, fl1Img);
    scene7.text = txt7;
    scene7.subtext = txt71;
    
    var scene6 = new AnimatedFinalScene(bgfinal1, fl2Img);
    scene6.text = txt6;
    scene6.subtext = txt61;
    scene6.btn1.action

    var scene5 = new ChoiceScene(bg5, scene6);
    scene5.text = txt5;
    scene5.subtext = txt51;
    scene5.subsubtext = txtdescription;

    scene5.btn1 = new ImageButton("Chihuahua poop", shitImg1, function() {
    	state.shit = "shit1";
    	currentScene = chooseFinalScene(scene6, scene7, scene8);
    });
    scene5.btn1.x = 30;
    scene5.btn1.y = 200;

    
    scene5.btn2 = new ImageButton("Bull shit", shitImg2, function() {
    	state.shit = "shit2";
    	currentScene = chooseFinalScene(scene6, scene7, scene8);
    });
    scene5.btn2.x = width/2-24;
    scene5.btn2.y = 200;
    
    scene5.btn3 = new ImageButton("Unicorn way", shitImg3, function() {
    	state.shit = "shit3";
    	currentScene = chooseFinalScene(scene6, scene7, scene8);
    });
    scene5.btn3.x = width-78;
    scene5.btn3.y = 200;




    var scene4 = new ChoiceScene(bg4, scene5);
    scene4.text = txt4;
    scene4.subtext = txt41;
    scene4.subsubtext = txtdescription;



    scene4.btn1 = new ImageButton("Perrier drop", dropImg1, function() {
    	state.drop = "drop1";
    	currentScene = scene5;
    });
    scene4.btn1.x = 30;
    scene4.btn1.y = 200;

    
    scene4.btn2 = new ImageButton("Acid drop", dropImg2, function() {
    	state.drop = "drop2";
    	currentScene = scene5;
    });
    scene4.btn2.x = width/2-24;
    scene4.btn2.y = 200;
    
    scene4.btn3 = new ImageButton("Soup drop", dropImg3, function() {
    	state.drop = "drop3";
    	currentScene = scene5;
    });
    scene4.btn3.x = width-78;
    scene4.btn3.y = 200;



    var scene3 = new ChoiceScene(bg3, scene4);
    scene3.text = txt3;
    scene3.subtext = txt31;
    scene3.subsubtext = txtdescription;


    scene3.btn1 = new ImageButton("Glamorous", seedImg1, function() {
    	state.seed = "seed1";
    	currentScene = scene4;
    });
    scene3.btn1.x = 30;
    scene3.btn1.y = 200;

    
    scene3.btn2 = new ImageButton("Hard'n'Heavy", seedImg2, function() {
    	state.seed = "seed2";
    	currentScene = scene4;
    });
    scene3.btn2.x = width/2-24;
    scene3.btn2.y = 200;
    
    scene3.btn3 = new ImageButton("Mutable", seedImg3, function() {
    	state.seed = "seed3";
    	currentScene = scene4;
    });
    scene3.btn3.x = width-78;
    scene3.btn3.y = 200;

    var scene2 = new StoryScene(bg2, scene3);
    scene2.text = txt2;
    scene2.subtext = txt21;
    scene2.character = anima1;

    scene1 = new StoryScene(bg, scene2, "START");
    scene1.text = txt1;
    scene1.subtext = txt11;
    
    
    currentScene = scene1;   
}


function restart () {
	currentScene = scene1;
	state = {};
}

function chooseFinalScene (sweet, tough, weird) {	
	var sweetness = 0;
	var toughness = 0;
	var weirdness = 0;

	if (state.seed === "seed1") sweetness++;
	if (state.seed === "seed2") toughness++;
	if (state.seed === "seed3") weirdness++;
	if (state.drop === "drop1") sweetness++;
	if (state.drop === "drop2") toughness++;
	if (state.drop === "drop3") weirdness++;
	if (state.shit === "shit1") sweetness++;
	if (state.shit === "shit2") toughness++;
	if (state.shit === "shit3") weirdness++;

	if (toughness >= 2) {
		return tough;
	} else if (sweetness >= 2) {
		return sweet;
	}
	return weird;
}