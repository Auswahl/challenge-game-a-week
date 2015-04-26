var Mover = function(walls) {
	this.construct = walls;
};

Mover.prototype.checkOuterWalls = function(position, velocity) {
	var nextPosition = p5.Vector.add(position, velocity);

	if (
		nextPosition.x <= this.construct.Left ||
		nextPosition.x + this.width >= this.construct.Right) {

		velocity.x = 0;

	}
	if(
		nextPosition.y <= this.construct.Top ||
		nextPosition.y + this.height >= this.construct.Bottom) {

		velocity.y = 0;
	}
};

Mover.prototype.collided = function(position, velocity) {

	this.checkOuterWalls(position, velocity);

	for (var i in this.construct.walls) {
		this.checkInnerWall(position, this.construct.walls[i], velocity);
	}
};

Mover.prototype.checkInnerWall = function(position, mess, velocity) {
	var nextPosition = p5.Vector.add(position, velocity);

	var top = mess.position.y;
	var bottom = mess.position.y + mess.height;
	var left = mess.position.x;
	var right = mess.position.x + mess.width;


	if (nextPosition.x + this.width >= left && nextPosition.x <= right) {
		if (nextPosition.y + this.height >= top  && position.y + this.height <= top)	{
			//hit wall from top
			velocity.y = 0;
		}

		if (nextPosition.y <= bottom  && position.y >= bottom) {
			//hit wall from bottom
			velocity.y = 0;
		}
	}


	if (nextPosition.y + this.height >= top && nextPosition.y <= bottom) {
		if (position.x + this.width <= left && left <= nextPosition.x + this.width )	{
			//hit wall from left
			velocity.x = 0;
		}

		if (nextPosition.x <= right && right <= position.x) {
			//hit wall from right
			velocity.x = 0;
		}
	}

};