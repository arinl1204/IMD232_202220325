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
      stroke(radom(360), 100, 50, 50);
      push();
      translate();
      rotate(angle);
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
