const bodies = [];
const bodyNum = 30;
const G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(255);
}

function draw() {
  background(255);

  for (let a = 0; a < bodies.length; a++) {
    for (let b = 0 + 1; b < bodies.length; b++) {
      if (a !== b) {
        let forceForB = bodies[a].attract(bodies[b]);
        bodies[b].apllyForce(forceForB);
      }
    }
    bodies[a].update();
    bodies[a].display();
    if (showVector) {
      bodies[a].displayVectors();
    }
  }
  bodies.forEach((each) => {});
  bodies.forEach((each) => {});
}

function mousePressed() {
  if (isHover) {
    reset();
  }
}

function reset() {
  for (let a = 0; a < 20; a++) {
    bodies[a] = new Body(random(width), random(height), random(0.1, 2));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
