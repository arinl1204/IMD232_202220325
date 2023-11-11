const tileSize = 40;
let columNum;
let rowNum;
let noiseCoordMult = 0.05;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  //floor = 내림해서 정수로 바꿔주는 함수
  columNum = floor(width / tileSize);
  rowNum = floor(height / tileSize);

  background(255);

  noiseSeed(5);
}

function draw() {
  //   randomSeed(100);
  background(255);
  //   noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let colum = 0; colum < columNum; colum++) {
      const idx = colum + row * columNum;
      //   fill(random() * 255);
      //   fill(noise(row * noiseCoordMult, colum * noiseCoordMult) * 255);
      //   rect(colum * tileSize, row * tileSize, tileSize);
      push();
      translate(
        colum * tileSize + tileSize * 0.5,
        row * tileSize + tileSize * 0.5
      );
      rotate(
        radians(noise(row * noiseCoordMult, colum * noiseCoordMult) * 360)
      );
      //   ellipse(0, 0, tileSize);
      line(-tileSize * 0.3, 0, tileSize * 0.5, 0);
      pop();
    }
  }
}
