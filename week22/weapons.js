var weapons = [];
var margin = 20;
var Weapon = function(frame, cursorIcon) {
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
	this.cursorIcon = cursorIcon;
	weapons.push(this);
};

Weapon.prototype.clicked = function() {
	document.getElementsByTagName("canvas")[0].style.cursor = "url('" + this.cursorIcon + "'), auto";
	if (currentTool) {
		currentTool.sprite.visible = true;
	}

	currentTool = this;
	currentTool.sprite.visible = false;
};

Weapon.prototype.hitForce = function() {
	return 1;
};

function createWeapons() {
	var axe = new Weapon("axe", "assets/axecurs.png");
	axe.hitForce = function() {
		return 5;
	};
	var whip = new Weapon("whip", "assets/whipcurs.png");
	whip.hitForce = function() {
		return (Math.random() >= 0.9) ? 32 : 2;
	};

	var morgen = new Weapon("morgen", "assets/Morgensterncurs.png");

	morgen.hitForce = function() {
		return (Math.random() >= 0.7) ? 0 : 7;
	};
	var dynamite = new Weapon("dynamite", "assets/Dynamitecurs.png");

	dynamite.hitForce = function() {
		// blow();
		return 1000;
	};
}