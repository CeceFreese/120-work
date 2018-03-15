//Cecelia Freese

//NOTE! I wish I could claim that I, genious that I am,
//programmed this into the code on purpose... but try changing the
//size of the window with the mouse (click and drag the screen around from
//one side)


function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(0.9);

}
//falling ellipse variables, taken and modified from example
let posX = 0;
let posY = 0;
let d = 30;
let r = d / 15;


function draw() {
//Important Message
let Itext = "Try to move the screen around... click and hold the edge of the window";
textSize( 34 );
text(Itext, 10, windowHeight/3);
//rays
	for (let i = 1; i < windowHeight; i += 10)
  line(60000/i, windowHeight, 1.2*i, 0);
//falling ellipses
	for (let i = 0; i < 10; i++) {
        // find starting x position
        posX = windowWidth * i / 9 + r;
        // draw an ellipse
        ellipse(posX, posY, d);
    }
//falling ellipse movement
		posY++;
	 if (posY > windowHeight) {
			 posY = 0;
	 }

}
