// constructor functions for the rectangle that is moved with the arow keys and interacts with the ellipses

function Ellipse() {
  this.x = random(10, windowWidth-10);
  this.y = 20;
  this.rad = 20;
  this.change= random(0.05, 2);
  this.color = ('white');


  this.show = function(){
    fill(this.color);
    ellipse(this.x, this.y, this.rad);
  }
  this.move = function(){
    this.y = this.change + this.y;

    }

  this.catch = function(){
    if( this.x > rectangle.w && this.x < rectangle.h){
      this.color = ('black');
    } else {
      this.color = ('white');
      }
    }

}
