
function setup(){
  // canvas for portrait
  createCanvas( 600, 600 );

}
// spining flower variable
let angle = 0;



function draw(){
  // background color
  background( 'rgb( 81, 81, 81)');

  // triangle medium green
  fill( 'rgba( 90, 141, 14, 0.5)');
  triangle( 0, 0, 199, 95, 0, 176);
  triangle( 199, 95, 0, 600, 600, 600);
  triangle( 199, 95, 600, 0, 600, 330);
  triangle( 199, 95, 169, 0, 295, 0);
  // triangle lime
  fill( 'rgba( 141, 239, 43, 0.5)');
  triangle( 199, 95, 600, 330, 600, 600);
  triangle( 199, 95, 0, 0, 169, 0);
  triangle( 199, 95, 295, 0, 600, 0);
  triangle( 199, 95, 0, 176, 0, 600);

// spinning flower
  // trippy flower, orange
  let targetFr = mouseX * 0.3 + 0.25;

  frameRate( targetFr );
  push();
  translate( width*0.5, height*0.5 );
  rotate( radians(angle) );
  fill( 'rgb( 249, 127, 24)');
  ellipse( 100, 100, 100, 100 );
  pop();

  // trippy flower pink
  frameRate( targetFr );
  push();
  translate( width*0.5, height*0.5 );
  rotate( radians(angle) );
  fill( 'rgb( 239, 120, 198)');
  ellipse( 0, 0, 300, 50 );
  pop();

  // trippy flower, yellow
  frameRate( targetFr );
  push();
  translate( width*0.5, height*0.5 );
  rotate( radians(angle) );
  fill( 'rgb( 249, 247, 24)');
  ellipse( 50, 50, 50, 50 );
  pop();

  // change angle position
  angle = angle + 45;

  




}
