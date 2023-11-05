class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //위치, 속력, 가속도, 질량, 반지름, 마우스, 주변원반지름, 색 설정
    this.pos = createVector(x, y);
    //속력 랜덤
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.neighborhooodRad = 50;
    this.color = color;
  }

  cohesion(others) {
    //변수 설정
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        //원 위치에서 다른 원 위치 더함
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        //만약 다른 원 반지름이
        if (distSq < this.neighborhooodRad ** 2) {
          //다른 원 위치를 더함
          steer.add(each.pos);
          //cnt 추가
          cnt++;
        }
      }
    });
    //cnt가 0보다 크다면
    if (cnt > 0) {
      //cnt 곱함
      steer.div(cnt);
      //위치를 나눔
      steer.sub(this.pos);
      steer.setMag(this.speedMx);
      //속력을 나눔
      steer.sub(this.vel);
      //forceMx로 제한을 둠
      steer.limit(this.forceMx);
    }
    return steer;
  }

  align(others) {
    //변수 설정
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //다른 원 속력을 더함
          steer.add(each.vel);
          // steer.add(p5.Vector.normalize(each.vel));
          //cnt 추가
          cnt++;
        }
      }
    });
    //만약 cnt이 0보다 크다면
    if (cnt > 0) {
      //cnt 곱함
      steer.div(cnt);
      steer.setMag(this.speedMx);
      //속력으로 나눔
      steer.sub(this.vel);
      //forceMx로 제한을 둠
      steer.limit(this.forceMx);
    }
    return steer;
  }

  separate(others) {
    //변수 설정 = 0
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        //만약 거리가 반지름에 다른 원 반지름 더한 것보다 크다면
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          //위치에서 다른 원 위치를 뺌
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          //추가
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      //cnt를 곱함
      steer.div(cnt);
      steer.setMag(this.speedMx);
      //속력을 나눔
      steer.sub(this.vel);
      //forceMx로 제한을 둠
      steer.limit(this.forceMx);
    }
    //steer 실행
    return steer;
  }

  //외부 힘 받음
  applyForce(force) {
    //힘에 질량을 곱함
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    //가속도에 forceDivedByMass를 더함
    this.acc.add(forceDivedByMass);
  }

  update() {
    //속력에 가속도를 더함
    this.vel.add(this.acc);
    //속력에 제한을 둠
    this.vel.limit(this.speedMx);
    //위치에 속력을 더함
    this.pos.add(this.vel);
    //가속도 초기화
    this.acc.mult(0);
  }

  borderInfinite() {
    //x위치가 바깥보다 적다면 너비에 위치를 더함
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
      //만약 x위치가 너비에서 바깥보다 더 크다면 바깥만큼을 뺌
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    //y위치가 바깥보다 적다면 높이에 위치를 더함
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
      //만약 y위치가 높이에서 바깥보다 더 크다면 바깥만큼을 뺌
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }

  display() {
    //push로 다시 시작
    push();
    //위치를 바꿈
    translate(this.pos.x, this.pos.y);
    //머리쪽을 회전시킴?
    rotate(this.vel.heading());
    //선없음
    noStroke();
    //color에서 가져옴
    fill(this.color);
    //도형 만들기 시작
    beginShape();
    //반지름
    vertex(this.rad, 0);
    //원의 -135도에 점
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    //원의 135도에 점
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //점 찍은 것들을 이용해 도형 만들기 끝 (화살표 모양)
    endShape(CLOSE);
    //pop을 하는 순간 push-pop 안에 있는 것 초기화
    pop();
  }
}
