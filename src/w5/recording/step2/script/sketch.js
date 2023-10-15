let anArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);

  for (let a = 0; a < width; a += 10) {
    line(a + 10, 10, a + 10, height - 10);
  }

  for (let a = 0; a < anArray.length; a++) {
    console.log('anArray[${a}]', anArray[a]);
  }

  fill(0);
  for (let a = 0; a < 10; a++) {
    circle(a * 20, height / 2, 20);
  }
}

function draw() {}
