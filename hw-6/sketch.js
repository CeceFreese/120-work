// code draws multiple rectanges one on top of the other from two different starting positions
function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 800);
    frameRate(10);
}

function draw() {

    // lower rectangles
    noFill();
    let LrectWidth = random( 10, width + 10);
    let LrectHeight = random( 10, height + 10);
    rect( windowWidth/2, 400, LrectHeight, LrectWidth);
    // upper rectangles
    let UrectWidth = random( 5, width - 5);
    let UrectHeight = random( 5, height - 5);
    rect(0, 0, UrectHeight, UrectWidth);

}
