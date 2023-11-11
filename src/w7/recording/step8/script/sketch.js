const tileSize = 40;
let columNum;
let rowNum;
let noiseCoordMult = 0.1;

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
  noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let colum = 0; colum < columNum; colum++) {
      const idx = colum + row * columNum;
      //   fill(random() * 255);
      fill(noise(row * noiseCoordMult, colum * noiseCoordMult) * 255);
      rect(colum * tileSize, row * tileSize, tileSize);
    }
  }
}
