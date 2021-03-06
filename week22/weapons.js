var weapons = [];
var margin = 20;
var Weapon = function(frame, cursorIcon, tooltipText) {
	var previousWeapon = weapons[weapons.length - 1];
	var y;
	if (previousWeapon) {
		y = previousWeapon.sprite.y + previousWeapon.sprite.height + margin;
	} else {
		y = 0;
	}
	this.sprite = game.add.sprite(game.world.width, y, frame);
	this.sprite.anchor.set(1, 0);
	this.sprite.inputEnabled = true;

	this.sprite.events.onInputDown.add(this.clicked, this);
	this.sprite.events.onInputOver.add(this.over, this);
	this.sprite.events.onInputOut.add(this.out, this);

	this.cursorIcon = cursorIcon;

	this.tooltip = game.add.text(game.world.width - 20, y + 20, tooltipText);
	this.tooltip.anchor.set(1, 0);

	//	Center align
	this.tooltip.align = 'center';

	//	Font style
	this.tooltip.fontSize = 14;

	//	Stroke color and thickness
	this.tooltip.stroke = '#3f2f9f';
	this.tooltip.strokeThickness = 2;
	this.tooltip.fill = '#dddddd';
	this.tooltip.visible = false;

	weapons.push(this);
};

Weapon.prototype.over = function() {
	this.tooltip.visible = true;
};

Weapon.prototype.out = function() {
	this.tooltip.visible = false;
};

Weapon.prototype.clicked = function() {
	document.getElementsByTagName("canvas")[0].style.cursor = "url('" + this.cursorIcon + "'), auto";
	if (currentTool) {
		currentTool.sprite.visible = true;
	}

	currentTool = this;
	currentTool.sprite.visible = false;

	for (var i in weapons) {
		if (this !== weapons[i]) {
			weapons[i].tooltip.visible = false;
		}
	}
};

Weapon.prototype.hitForce = function() {
	return 1;
};

function createWeapons() {
	var whipSound = game.add.audio("whipSound");
	var whipBigSound = game.add.audio("whipBigSound");
	var morgenSound = game.add.audio("morgenSound");
	var axeSound = game.add.audio("axeSound");
	var missSound = game.add.audio("missSound");

	var axe = new Weapon("axe", "assets/axecurs1.png", "Slow and certain");
	axe.hitForce = function() {
		axeSound.play();
		return 5;
	};
	var whip = new Weapon("whip", "assets/whipcurs1.png", "Chance of critical hit");
	whip.hitForce = function() {
		if (Math.random() >= 0.9) {
			whipBigSound.play();
			return 32;
		} else {
			whipSound.play();
			return 2;
		}
	};

	var morgen = new Weapon("morgen", "assets/Morgensterncurs1.png", "Brutal but shaky");

	morgen.hitForce = function() {
		if (Math.random() >= 0.7) {
			missSound.play();
			return 0;
		} else {
			morgenSound.play();
			return 7;
		}
	};
	var dynamite = new Weapon("dynamite", "assets/Dynamitecurs.png", "Not sure...");

	dynamite.hitForce = function() {
		blow(function() {game.state.start("Loose");});
		return 0;
	};
}