var gardenPhoto,garden;
var cat;
var mouse;
var catimg1,mouseimg1,catimg2,mouseimg2;


function preload() {
    //load the images here
    gardenPhoto = loadImage("garden.png")
    catimg1 = loadAnimation("cat1.png")
    mouseimg1 = loadAnimation("mouse1.png")
    catimg2 = loadAnimation("cat2.png,cat3.png")
    mouseimg2 = loadAnimation("mouse2.png,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,200,20,20)
    cat.addAnimation("catimg2")
    cat.velocityX = 2;
    mouse = createSprite(100,300,20,20)
    mouse.addAnimation("mouseimg2")
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   cat.addAnimation("catRunning", catimg2)
   cat.changeAnimation("catRunning")
   cat.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(KeyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;
}
  if(KeyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 25;
  }

}
