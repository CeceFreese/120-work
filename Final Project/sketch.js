
let bimg;

function preload(){
  bimg = loadImage('./images/BGbackground.jpg');
}

function setup(){
  createCanvas( windowWidth, windowHeight);
}

function draw(){
  background(bimg);
}
