var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var bullets = 70;

var gameState = "fight"


function preload(){
  
  heart1Img = loadImage("assets/zombie 1.png")
  heart2Img = loadImage("assets/zombie 2.png")
  heart3Img = loadImage("assets/zombie 3.png")

  

  bgImg = loadImage("assets/bg.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-20,10,10)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite

   //creating sprites to depict lives remaining
   heart1 = createSprite(displayWidth/2-10,190,20,20)
   heart1.visible = true
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth/2-140,240,20,20)
    heart2.visible = true
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    
  
 

        

    //creating groups for zombies and bullets
    bulletGroup = new Group()
    zombieGroup = new Group()



}

function draw() {
  background(0); 



drawSprites();

}






