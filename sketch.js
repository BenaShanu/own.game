var mainPlane1,mainPlane2;
var planeImg;
var bullet,bullImg;
var bulletImg;

var enemy, enemy1;
var enemyImg;
var bullet1,bulletImg;
var bigGroup,smallGroup;

var bg;

var ref1, ref2;


var scoreboard;
var score=0; 

function preload(){

  bg=loadImage("sky.png");

planeImg= loadImage("plane.png");
bulletImg= loadImage("bullet.png");

enemyImg= loadImage("Opponent.png");
//bulImg= loadImage("bul.png");


}

function setup() {

  createCanvas(1200,600);


 mainPlane1=createSprite(970, 150, 50, 50);
 mainPlane1.addImage(planeImg);
 mainPlane1.scale= 0.25;

 mainPlane2=createSprite(970, 360, 50, 50);
 mainPlane2.addImage(planeImg);
 mainPlane2.scale= 0.25;

 enemy=createSprite(230, 220, 50, 50);
 enemy.velocityY= 10;
 enemy.addImage(enemyImg);
 enemy.scale= 0.25;

 enemy1=createSprite(230, 520, 50, 50);
 enemy1.velocityY= -10;
 enemy1.addImage(enemyImg);
 enemy1.scale= 0.25;

 ref1= createSprite(230, 40, 30, 3);
 ref1.visible= false;
 ref2= createSprite(230, 560, 30, 3);
 ref2.visible= false;

 bigGroup= createGroup();
smallGroup =createGroup();
}

function draw() {

  background(bg);
  smallGroup.add(enemy);

  if (bullet.isTouching(ref2)){
    var r1=createSprite(100,100,20,20);
  }
  if (enemy.isTouching(ref1)){
    enemy.velocityY= 10;
  }
  if (enemy1.isTouching(ref2)){
    enemy1.velocityY= -15;
  }
 if(enemy1.isTouching(ref1)){
   enemy1.velocityY= 10;
 }
   
 
  if (keyDown("LEFT_ARROW")){
    bullet = createSprite(970, 220, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale= 0.03;

    bullet.velocityX= -40;
  }

  

  
  if (keyDown("A")){
    bullet = createSprite(970, 430, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale= 0.03;
    bullet.velocityX= -40;

     

  }

 
  
   
 

  drawSprites();
} 
// Ask how to spawn airplanes.
 // Ask how to shoot bullets with space inbetween them.
// Add if bullet touches airplane.
// Add scorecard.
// Increase the number of Enemy planes. 
