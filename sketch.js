
function preload() {
    //load the images here
     image.loadImage(cat1.png);
     image.loadImage(garden.png);
     image.loadImage(mouse1.png);
}
 
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    createSprite.cat1(30,50,22,75);
    createSprite.mouse1(20,35,25,50);
}

function draw() {
  cat(isCollided("mouse"));
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(upArrowIsPressed(cat.move));

  //For moving and changing animation write code here


}
