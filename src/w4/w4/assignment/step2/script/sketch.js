let moverA;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 50);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  // if (moverA.contactEdge()) {
  //   const c = 0.01;
  //   const friction = moverA.vel.copy();
  //   friction.mult(-1);
  //   friction.mult(c);
  //   const gravityAsForce = p5.Vector.mult(gravity, moverA.mass);
  //   moverA.applyForce(gravityAsForce);
  // }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.contactEdge();
}

function mouseMoved() {
  moverA.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  moverA.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  moverA.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  moverA.mouseReleased();
}
