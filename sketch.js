
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  

  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1; 
  
  
  ground = createSprite(400,350,900,10);
  
  
  
}


function draw() {
background("cyn");
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
 
  stroke("black");
  textSize (20);
  fill("yellow");
  text("survalTime:"+score,150,50);
  score = score + Math.round(getFrameRate()/50);
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if(keyDown("space")&& monkey.y >=250){
    
    monkey.velocityY = -10;
  }
   if (World.frameCount%80 === 0) {
     
  banana = createSprite(400,Math.round(random(240,330)),20,20);
  banana.addImage(bananaImage); 
  banana.scale = 0.1;
  banana.velocityX = -4;
     banana.setLifetime = 100;
   }
  
     if (World.frameCount%300 === 0) {
     
 obstace = createSprite (400,327,20,20);
  obstace.addImage("stone",obstaceImage);
  obstace.scale = 0.1;
  obstace.velocityX = -4;
  obstace.setLifetime = 100;
   }
  
  
  
  
  drawSprites();
}