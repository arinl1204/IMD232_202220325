class Traffic {
  constructor() {
    this.vehicles = [];
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles);
      //1곱함
      separate.mult(1);
      //separate에서 힘 가져옴
      eachVehicle.applyForce(separate);
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5);
      //align에서 힘 가져옴
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      //0.5 곱함
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      //Vehicle에서 update를 가져옴
      eachVehicle.update();
      //Vehicle에서 botderInfinite를 가져옴
      eachVehicle.borderInfinite();
      //Vehicle에서 display를 가져옴
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    //질량을 1로 설정
    const mass = 1;
    this.vehicles.push(
      //Vehicle에서 생성한 값들 설정함
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
