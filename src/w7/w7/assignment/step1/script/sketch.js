//변수 생성
let traffic;
let infiniteOffset = 80;

function setup() {
  //캔버스 생성, 컬러모드 바꿈
  setCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100, 100);
  //배경 흰색
  background('white');
  //Traffic을 가져옴
  traffic = new Traffic();
  //0부터 10이 될때까지 너비높이 랜덤으로 하나씩 생성됨)
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}

function draw() {
  //배경흰색
  background('white');
  //Traffic에서 run부분을 가져옴
  traffic.run();
}

//마우스 드래그
function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
