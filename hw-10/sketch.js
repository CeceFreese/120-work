// goal: create torus' that spin faster with as the mouse moves from left to right

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background('rgb(128, 128, 128)');

// torus
  fill('rgb(204, 255, 153)');

  // spin, center and third ring
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 25);
  torus(200, 25);
  // slow spin, second and forth ring
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  torus(150, 25);
  torus(250, 25);

}
