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

  move(mx, my) {
    let distance = dist(mx, my, this.x, this.y);
    let targetAngle = atan2(my - this.y, mx - this.x);

    // Always check distance to mouse, not mouse movement
    if (distance < distMouse && this.c < 200) {
      this.c += 55;
    }
    if (distance >= distMouse) {
      if (this.c > 210) {
        this.c -= 3;
        this.angle = lerp(this.angle, targetAngle, 0.1);
      } else if (distance === distMouse && this.c > 70) {
        this.c -= 4;
        this.angle = lerp(this.angle, 0, 0.1);
      } else {
        this.c = 70;
        this.angle = 0;
      }
    }
  }
}
