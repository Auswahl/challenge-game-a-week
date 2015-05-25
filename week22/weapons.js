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
	this.tooltip.stroke = '#000000';
	this.tooltip.strokeThickness = 6;
	this.tooltip.fill = '#43d637';
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
	var axe = new Weapon("axe", "assets/axecurs1.png", "Медленно, но верно");
	axe.hitForce = function() {
		return 5;
	};
	var whip = new Weapon("whip", "assets/whipcurs1.png", "То так, то эдак");
	whip.hitForce = function() {
		return (Math.random() >= 0.9) ? 32 : 2;
	};

	var morgen = new Weapon("morgen", "assets/Morgensterncurs1.png", "Мощно, но мимо");

	morgen.hitForce = function() {
		return (Math.random() >= 0.7) ? 0 : 7;
	};
	var dynamite = new Weapon("dynamite", "assets/Dynamitecurs1.png", "Неизестно");

	dynamite.hitForce = function() {
		blow();
		return 0;
	};
}