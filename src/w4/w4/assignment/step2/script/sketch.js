let ball;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ball = new Mover(width / 3, 0, 50);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);
  let g = p5.Vector.mult(gravity, ball.mass);
  ball.applyForce(g);
  ball.update();
  ball.edgeBounce();
  fill(0);
  ball.display();

  let gravityA = createVector(gravity.x, gravity.y);
  gravity.mult(ball.mass);
  ball.applyForce(gravityA);
  if (ball.edgeBounce()) {
    let c = 0.01;
    let friction = ball.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    ball.applyForce(friction);
  }
  ball.applyForce(gravity);
  ball.update();
  ball.edgeBounce();
  fill(0);
  ball.display();
}

function mouseMoved() {
  ball.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  ball.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  ball.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  ball.mouseReleased();
}
