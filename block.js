class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = 70;
  }

  display() {
    noFill();
    stroke(this.c);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, size - offset, size - offset);
    pop();
  }

  move() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    let targetAngle = atan2(mouseY - this.y, mouseX - this.x);

    if (Math.abs(pmouseX -mouseX) >= 0.05 || Math.abs(pmouseY != mouseY) >= 0.05){
      if (distance < distMouse) {
        this.c = 255;
      }
    }

    if (this.c > 200) {
      this.c -= 3;
      this.angle = lerp(this.angle, targetAngle, 0.1);
    } else if (this.c > 70) {
      this.c -= 4;
      this.angle = lerp(this.angle, 0, 0.1);
    } else {
      this.c = 70;
      this.angle = 0;
    }
  }
}

