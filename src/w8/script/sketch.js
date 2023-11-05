let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 select', dom);
  //   console.log('p5 select', dom.width);
  //p5에 있는 셀렉터

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('querySelector', htmlDom);
  //   console.log('querySelector', htmlDom.clientWidth);
  //그냥 셀렉터
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
  //   dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 select', dom);
  //매번 새로운 걸 불러와야 함..
  //   console.log('querySelector', htmlDom.clientWidth);
  if (htmlDom.clientWidth < canvasW) {
    console.log('리사이즈됩니다.');
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    console.log('리사이즈됩니다.');
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
