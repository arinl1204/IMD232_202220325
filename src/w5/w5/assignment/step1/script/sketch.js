const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  angleBeginVel = 0;
  angleStep = (TAU / 360) * 0.01;
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      noFill();
      stroke(random(360), 100, 50, 50);
      push();
      translate();
      rotate(angleBegin);
      pop();
    }
  }

  angleBegin += angleBeginVel;

  for (let a = 0; a < cNum; a++) {
    for (let b = 0; b < rNum; b++) {
      noStroke();
      fill(random(360), 100, 50, 25);
      let x = ((a + 1) * width) / (cNum + 1);
      let y = ((b + 1) * height) / (rNum + 1);
      circle(x, y, 60);
    }
  }
}
