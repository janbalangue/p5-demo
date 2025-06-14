let distMouse = 50;
let cols, rows;
let size = 10;
let offset = 4;
let blocks = [];
let canvas, canvasBounds;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = windowWidth / size;
  rows = windowHeight / size;
  canvasBounds = canvas.elt.getBoundingClientRect();

  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
    }
  }
}

function draw() {
  background(0);

  // Adjust mouse coordinates relative to canvas
  let mx = mouseX, my = mouseY;
  if (canvasBounds) {
    mx = mouseX - canvasBounds.left;
    my = mouseY - canvasBounds.top;
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move(mx, my);
      blocks[i][j].display();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasBounds = canvas.elt.getBoundingClientRect();
}