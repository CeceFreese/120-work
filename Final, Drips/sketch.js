
let circle = [];
num_of_circles = 10;





 function setup(){
    createCanvas(windowWidth, windowHeight);
    background('black');

    for (let i = 0; i < num_of_circles; i++){
      circle.push(new Circle());
    }
 }

 function draw(){

noStroke();

for(var i = 0; i < circle.length; i++){
  circle[i].show();
  circle[i].fall();
  circle[i].start_again();


}

 }


 class Circle{
   constructor(x, y, size, color){
     this.x = random(0, windowWidth);
     this.y = 0;
     this.rad = 10;
     this.deltaY = random(0.5, 3);
     this.color = ('white');

   }

   show(){
     push();
     fill(this.color);
     translate(this.y);
     ellipse(this.x, this.y, this.rad);
     pop();
   }

   fall(){
     this.y+= this.deltaY;
   }

   start_again(){
     if( this.y > windowHeight+10){
       this.x = random(0, windowWidth);
       this.y = 0;
       this.deltaY = random(0.5, 3);
        if( this.color == ('white')){
          this.color = ('pink');
        } else {
          this.color = ('white');
        }
     }
   }
}
