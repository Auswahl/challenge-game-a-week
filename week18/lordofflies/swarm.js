Swarmlette = function(target, swarm) {
	this.target = target;
	this.swarm = swarm;

	this.wobbler = setupWobble();
	this.acceleration = createVector(0, 0);
	this.velocity = createVector(random(-1, 1), random(-1, 1));
	this.position = createVector(width/2, height/2);

	this.r = 2.0;
	this.height = this.r;
	this.width = this.r;

	this.MAX_SPEED = 6.5; // Maximum speed
	this.MAX_FORCE = 0.3;
	Mover.call(this, walls);
};

Swarmlette.prototype = Object.create(Mover.prototype);


function setupWobble() {
	WOBBLE_LIMIT = 2;
	WOBBLE_SPEED = 1;
	return {
		value: random(WOBBLE_LIMIT),
		min: -WOBBLE_LIMIT,
		max: WOBBLE_LIMIT,
		inc: WOBBLE_SPEED,
		update: function() {
			this.value += random(0, this.inc);
			if (this.value >= this.max || this.value <= this.min) {
				this.inc = -this.inc;
			}
		}
	};
}
Swarmlette.prototype.start = function() {
	this.acceleration = createVector(0, 0);
	this.velocity = createVector(random(-1, 1), random(-1, 1));
	this.position = createVector(width/2, height/2);
};

Swarmlette.prototype.update = function() {

	this.flock(this.swarm);

	this.move();

	this.checkGaol(this.target);
};
Swarmlette.prototype.checkGaol = function(target) {
	if (
		this.position.x <= target.position.x + target.width &&
		this.position.x + this.width >= target.position.x &&
		this.position.y <= target.position.y + target.height &&
		this.position.y + this.height >= target.position.y
		) {
		this.target.bite();
	}
};

Swarmlette.prototype.aim = function(target) {
	return this.seek(target.position);
};

Swarmlette.prototype.move = function() {
	this.velocity.add(this.acceleration);
	// Limit speed
	this.velocity.limit(this.MAX_SPEED);

	this.collided(this.position, this.velocity);
	this.position.add(this.velocity);

	// Reset acceleretion to 0 each cycle
	this.acceleration.mult(0);
};


Swarmlette.prototype.applyForce = function(force) {
	// We could add mass here if we want A = F / M
	this.acceleration.add(force);
};

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Swarmlette.prototype.seek = function(target) {
	var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
	// Normalize desired and scale to maximum speed
	desired.normalize();
	desired.mult(this.MAX_SPEED);
	// Steering = Desired minus Velocity
	var steer = p5.Vector.sub(desired, this.velocity);
	steer.limit(this.MAX_FORCE); // Limit to maximum steering force
	return steer;
};

// Separation
// Method checks for nearby swarm and steers away
Swarmlette.prototype.separate = function(swarm) {
	var desiredseparation = 25.0;
	var steer = createVector(0, 0);
	var count = 0;
	// For every boid in the system, check if it's too close
	for (var i = 0; i < swarm.length; i++) {
		var d = p5.Vector.dist(this.position, swarm[i].position);
		// If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
		if ((d > 0) && (d < desiredseparation)) {
			// Calculate vector pointing away from neighbor
			var diff = p5.Vector.sub(this.position, swarm[i].position);
			diff.normalize();
			diff.div(d); // Weight by distance
			steer.add(diff);
			count++; // Keep track of how many
		}
	}
	// Average -- divide by how many
	if (count > 0) {
		steer.div(count);
	}

	// As long as the vector is greater than 0
	if (steer.mag() > 0) {
		// Implement Reynolds: Steering = Desired - Velocity
		steer.normalize();
		steer.mult(this.MAX_SPEED);
		steer.sub(this.velocity);
		steer.limit(this.MAX_FORCE);
	}
	return steer;
};

// Alignment
// For every nearby boid in the system, calculate the average velocity
Swarmlette.prototype.align = function(swarm) {
	var neighbordist = 50;
	var sum = createVector(0, 0);
	var count = 0;
	for (var i = 0; i < swarm.length; i++) {
		var d = p5.Vector.dist(this.position, swarm[i].position);
		if ((d > 0) && (d < neighbordist)) {
			sum.add(swarm[i].velocity);
			count++;
		}
	}
	if (count > 0) {
		sum.div(count);
		sum.normalize();
		sum.mult(this.MAX_SPEED);
		var steer = p5.Vector.sub(sum, this.velocity);
		steer.limit(this.MAX_FORCE);
		return steer;
	} else {
		return createVector(0, 0);
	}
};

// Cohesion
// For the average location (i.e. center) of all nearby swarm, calculate steering vector towards that location
Swarmlette.prototype.cohesion = function(swarm) {
	var neighbordist = 50;
	var sum = createVector(0, 0); // Start with empty vector to accumulate all locations
	var count = 0;
	for (var i = 0; i < swarm.length; i++) {
		var d = p5.Vector.dist(this.position, swarm[i].position);
		if ((d > 0) && (d < neighbordist)) {
			sum.add(swarm[i].position); // Add location
			count++;
		}
	}
	if (count > 0) {
		sum.div(count);
		return this.seek(sum); // Steer towards the location
	} else {
		return createVector(0, 0);
	}
};

// We accumulate a new acceleration each time based on three rules
Swarmlette.prototype.flock = function(swarm) {
	var aiming = this.aim(this.target);
	var separation = this.separate(swarm);
	var alignment = this.align(swarm);
	var cohesion = this.cohesion(swarm);
	// Arbitrarily weight these forces
	separation.mult(1.5);
	alignment.mult(1.0);
	cohesion.mult(1.0);
	aiming.mult(1.2);

	// Add the force vectors to acceleration
	this.applyForce(separation);
	this.applyForce(alignment);
	this.applyForce(cohesion);
	this.applyForce(aiming);

};


Swarmlette.prototype.draw = function() {
	var theta = this.velocity.heading() + PI/2;

	this.wobbler.update();
	var wobbling = createVector(this.wobbler.value, this.wobbler.value);

	push();
	translate(this.position.x, this.position.y);
	fill(127);
	stroke(200);

	rotate(theta);
	translate(this.wobbler.value, 0);
	ellipse(0, 0, this.height, this.width);

	pop();
};


// Wraparound
Swarm = function(target, walls) {
	this.swarm = [];
	for (var i = 0; i < 15; i++) {
		this.swarm.push(new Swarmlette(target, this.swarm, walls));
	}
};

Swarm.prototype.draw = function() {
	for (var i in this.swarm) {
		this.swarm[i].draw();
	}
};


Swarm.prototype.update = function() {
	for (var i in this.swarm) {
		this.swarm[i].update();
	}
};


Swarm.prototype.start = function() {
	for (var i in this.swarm) {
		this.swarm[i].start();
	}
};
