class Particle {

  constructor(x,y,r,m) {

      this.location = createVector(x,y);
      this.velocity = createVector(0,0);
      this.acceleration = createVector(0,0);
      this.r = r;
      this.m = m;
  }

  display() {
      ellipse(this.location.x, this.location.y, this.r, this.r);
  }


  update() {
      this.location.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.acceleration.mult(0);
      this.velocity.limit(10);
  }

  edges() {
   if (this.location.x > width) {
     this.location.x = width;
     this.velocity.x *= -1;
   } else if (this.location.x < 0) {
     this.velocity.x *= -1;
     this.location.x = 0;
   }
   if (this.location.y > height) {
     this.location.y = height;
     this.velocity.y *= -1;
   } else if (this.location.y < 0) {
     this.location.y = 0;
     this.velocity.y *= -1;
   }
 }

  applyForce(force) {
      var f = p5.Vector.div(force,this.m);
      this.acceleration.add(f);
  }
}
