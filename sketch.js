
var Garden,Cat,Mouse;
var GardenImg,Cat1Img,Cat2Img,Cat3Img;
var Mouse1Img,Mouse2Img,Mouse3Img; 

function preload() {
    //load the images here
GardenImg=loadImage("images/garden.png");

Cat1Img=loadAnimation("images/cat1.png"); //cat baithi hai
Cat2Img=loadAnimation("images/cat2.png", "images/cat3.png"); //cat chlne lgegi
Cat3Img=loadAnimation("images/cat4.png"); //cat mouse k paass aa ke baith jayegi



Mouse1Img=loadAnimation("images/mouse1.png");
Mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png"); //mouse kood rha h
Mouse3Img=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
Cat=createSprite(870, 600);
Cat.addAnimation("CatSleeping",Cat1Img);
Cat.scale=0.20;

Mouse=createSprite(200, 600);
Mouse.addAnimation("MouseStanding",Mouse1Img);
Mouse.scale=0.15;
}


function draw() {

    background(GardenImg);
    //Write condition here to evalute if tom and jerry collide
if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2){
    Cat.velocityX=0;

    Cat.addAnimation("Stop",Cat3Img);
    Cat.changeAnimation("Stop",Cat3Img);

   Mouse.addAnimation("Stop",Mouse3Img);
   Mouse.changeAnimation("Stop",Mouse3Img);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
    Cat.velocityX= -5;
    Cat.addAnimation("Running",Cat2Img);
    Cat.changeAnimation("Running",Cat2Img);

    Mouse.addAnimation("Teasing",Mouse2Img);
    Mouse.changeAnimation("Teasing",Mouse2Img);
}

}

