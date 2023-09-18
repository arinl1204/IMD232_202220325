let cw = width;
let ch = height;

function setup() {
  setCanvasContainer('p5-canvas', width, height, true);
  background('white');
}

function draw() {
  background('#4e5788');

  fill(255);
  rectMode(CORNER);
  stroke(0);
  strokeWeight(1);

  fill('#fff4d4');
  noStroke();
  rect(0, 430, 1000);

  fill('#cf9189');
  stroke(0);
  strokeWeight(2);
  stroke('#56342f');
  ellipse(470, 530, 650, 150);

  stroke('#fff4d4');
  strokeWeight(10);
  ellipse(470, 530, 550, 100);

  fill('#ffe6c6');
  stroke(0);
  strokeWeight(2);
  stroke('#56342f');
  rect(450, 270, 500, 160, 20);

  fill('#e4c8a3');
  noStroke();
  rect(461, 300, 430, 35);

  fill('#feefe6');
  stroke(0);
  strokeWeight(2);
  rect(460, 270, 500, 50, 20);

  fill('#ddb887');
  rect(870, 140, 90, 290, 5, 20, 20, 5);

  fill('#b9976a');
  rect(930, 140, 30, 290, 0, 20, 20, 0);

  stroke('#4e5788');
  strokeWeight(20);
  fill('#fff4d4');
  rect(-10, 0, 180, 200);
  rect(170, 0, 180, 200);
  rect(-10, 200, 180, 200);
  rect(170, 200, 180, 200);

  fill('#ffe6c6');
  stroke(0);
  strokeWeight(2);
  stroke('#56342f');
  rect(520, 90, 120, 60);

  fill('#fff4d4');
  rect(750, 60, 60, 90);

  fill('#cf9189');
  rect(720, 80, 60, 90);

  fill('#fef3e4');
  noStroke();
  rect(530, 100, 100, 40);

  fill('#fecec0');
  rect(730, 90, 40, 70);

  fill('#ffffff');
  stroke(0);
  strokeWeight(2);
  stroke('#56342f');
  rect(575, 80, 10, 20);

  fill('#ffffff');
  rect(790, 50, 10, 20);

  stroke('#5b873d');
  strokeWeight(6);
  line(910, 80, 900, 40);

  stroke('#5b873d');
  line(910, 80, 920, 40);

  fill('#b1dc94');
  noStroke();
  ellipse(910, 114, 50, 50);

  fill('#b1dc94');
  ellipse(910, 84, 30, 30);

  fill('#feed31');
  ellipse(900, 40, 20, 20);
  ellipse(920, 40, 20, 20);

  fill('#ddb887');
  stroke(0);
  strokeWeight(2);
  stroke('#56342f');
  rect(300, 390, 300, 25);

  fill('#b9976a');
  rect(300, 410, 300, 10);

  fill('#ddb887');
  rect(300, 420, 20, 100);
  rect(580, 420, 20, 100);
}
