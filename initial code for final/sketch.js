
var rectangle;

var ellipses = [];
var num_of_ellipses = 10;


 function setup(){

   createCanvas( windowWidth, windowHeight);
   rectangle = new Rectangle();
   for (var i = 0; i < num_of_ellipses; i++){
       ellipses[i] = new Ellipse();

   }
 }


// draws rectangle and ellipse
function draw(){
  background('black');
  noStroke();
// ellipse with loop and movement
  for (var i = 0; i < ellipses.length; i++){
      ellipses[i].show();
      ellipses[i].move();

// draws rectangle in front of ellipses
  rectangle.show();

  }

}


// rectangle movement with arrow keys
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    rectangle.move(1);
  } else if (keyCode === LEFT_ARROW){
    rectangle.move(-1);
  }

  ellipses.catch();

}
