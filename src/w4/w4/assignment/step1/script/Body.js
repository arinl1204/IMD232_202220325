class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 4;
    this.vVisualization = createVector(0, 0);
    this.aVisualization = createVector(0, 0);
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    let distnace = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.vVisualization.set(this.vel);
    this.vVisualization.mult(0);

    this.aVisualization.set(this.acc);
    this.aVisualization.mult(100);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    colorMode(HSL, 360, 100, 100, 100);
    for (let a = 0; a < moversNum; a++) {
      movers.push(
        new Mover(
          random(width),
          random(height),
          10,
          25,
          color(random(360), 100, 50, 25)
        )
      );
    }
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
JavaScriptDownload;
