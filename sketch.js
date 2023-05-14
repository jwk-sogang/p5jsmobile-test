let img;
let x, y;

function preload() {
  img = loadImage('yourimage.jpeg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  image(img, x, y);
}

function touchStarted() {
  x = mouseX;
  y = mouseY;
}
