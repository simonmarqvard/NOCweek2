var particles = []
var totalparticles = 50;

function setup() {
	createCanvas(800, 400);
	for (var i = 0; i < totalparticles; i++) {
		particles.push(new Particle(random(width/4),random(height/2),15,15,random(0,20)));
	}
}

function draw() {
	background(100,100,200);
	text("Press mouse to accelerate particles", 50,50);

	for (var i = 0; i < totalparticles; i++) {

	var gravity = createVector(0,0.5);
	particles[i].applyForce(gravity);


	var wind = createVector(0.2,0);
	if (mouseIsPressed) {
		particles[i].applyForce(wind);
	}

	var updrift = createVector(0,-3);
		if (particles[i].location.x > width/4) {
			particles[i].applyForce(updrift);
		}

	var sideAttraction = createVector(0.2,10);
	 	if (particles[i].location.x > width/2) {
			particles[i].applyForce(sideAttraction);
		}

	var ladder = createVector(2,-4);
		if (particles[i].location.x > width/4*3 && particles[i].location.y > height/3) {
			particles[i].applyForce(ladder);
	}

	particles[i].update();
	particles[i].edges();
  particles[i].display();
}
}
