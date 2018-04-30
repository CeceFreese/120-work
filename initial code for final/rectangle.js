// constructor functions for the rectangle that is moved with the arow keys and interacts with the ellipses



function Rectangle(){
  this.x = windowWidth/2;
  this.w = 45;
  this.h = 50;


  this.show = function(){
    fill('rgb(153, 0 , 153)');
    rectMode(CENTER);
    rect(this.x, windowHeight-40, this.w, this.h);
  }

// movement
  this.move = function(kp){
    this.x += kp*15;
  }

}
