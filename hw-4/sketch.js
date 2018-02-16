
function setup(){
  // canvas for portrait
  createCanvas( 600, 900 );
}
function draw(){
  // background color
  background( 'rgb( 212, 152, 61)');
  // neck
  triangle( 300, 450, 300, 550, 250, 550);
  fill( 0, 0, 0,);
  triangle( 300, 450, 300, 550, 350, 550);
  // face left side
  fill( 'rgb( 255, 229, 204)');
  stroke( 'rgb( 255, 229, 204)');
  triangle( 300, 450, 300, 500, 225, 450);
  rect( 225, 350, 75, 100);
  // shadow side o face (right side)
  fill( 'rgb( 232, 211, 179)');
  stroke( 'rgb( 232, 211, 179)');
  triangle( 300, 450, 300, 500, 375, 450);
  rect( 300, 350, 75, 100);
  // smirk left side
  fill( 'rgb( 161, 12, 57)');
  stroke( 'rgb( 161, 12, 57)');
  triangle( 300, 460, 275, 460, 300, 475);
  // smirk right side
  fill( 'rgb( 137, 13, 50)');
  stroke( 'rgb( 137, 13, 50)');
  triangle( 300, 460, 325, 453, 300, 475);
  // hat
  fill( 32, 32, 32);
  stroke( 32, 32, 32);
  triangle( 50, 350, 300, 350, 300, 400);
  fill( 0, 0, 0);
  stroke( 0, 0, 0,);
  triangle( 550, 350, 300, 350, 300, 400);
  fill( 'rgb( 32, 32, 32)');
  stroke( 'rgb( 32, 32, 32)');
  triangle( 225, 350, 225, 320, 300, 320);
  fill( 'rgb( 0, 0, 0)');
  stroke( 'rgb( 0, 0, 0)');
  triangle( 225, 350, 300, 320, 375, 350);
  triangle( 300, 320, 375, 320, 375, 350);
  // body left side
  triangle( 300, 525, 300, 800, 400, 525);
  triangle( 300, 600, 300, 800, 400, 800);
  // body right side
  fill( 'rgb( 32, 32, 32)');
  stroke( 'rgb( 32, 32, 32)');
  triangle( 300, 600, 300, 800, 200, 800);
  triangle( 300, 525, 300, 800, 200, 525);




}
