var bg, bgImg
var bottomGround
var topGround
var witch, witchImg
var  dangerGroup, danger1, danger2, danger3
var backgroundSound
var Play
var gameState=Play
var end

function preload(){
bgImg = loadImage("assets/bg.png")
backgroundSound=loadSound("assets/BackgroundSound.mp3")

witchImg = loadImage("assets/witch.png")

danger1 = loadImage("assets/danger.png");
 danger2 = loadImage("assets/danger2.png");
  danger3 = loadImage("assets/danger3.png");
}



function setup(){
  createCanvas(windowWidth, windowHeight);

//background image
bg = createSprite(200,485,1,1);
bg.addImage(bgImg);
bg.scale =1.3



//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.velocityX=-4
topGround.addImage(bgImg)
topGround.scale=1.5


      
//creating witch    
witch = createSprite(100,200,20,50);
witch.addImage(witchImg);
witch.scale = 0.2;



dangerGroup = new Group();



}
function gameOver(){
  topGround.velocityX=0
  dangerGroup.setVelocityXEach(0)
dangerGroup.destroyEach()
  
}




function draw() {
 console.log(gameState) 
  background(bgImg);

  
if(gameState===Play){

  if (topGround.x<0){
    topGround.x=700

  }
  spawnObstacles()
  if(keyDown(UP_ARROW)){
    witch.y=witch.y-4}

    else if(keyDown(DOWN_ARROW)){
      witch.y=witch.y+4}
      if(witch.isTouching(dangerGroup)){
        gameState=end
        }
}
if(gameState===end){
  gameOver()
}





        
          //making harry jump
          /*if(keyDown("space")) {
            harry.velocityY = -6 ;
            

          }*/
          //moving witch
        

          

             
        drawSprites();

    
        
}
//refer to spawnClouds from trex game
function spawnObstacles(){
  if(frameCount % 60 === 0) {
    var danger  = createSprite(600,height-95,20,30);
    danger.setCollider('circle',0,0,45)
    // danger.debug = true
  
    danger.velocityX = -6;
    danger.y=Math.round(random(height/2-50,height/2+400))
    
    //generate random danger
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: danger.addImage(danger1);
              break;
      case 2: danger.addImage(danger2);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the danger         
    danger.scale = 0.3;
    danger.lifetime = 300;
    danger.depth = witch.depth;
    witch.depth +=1;
    //add each danger to the group
    dangerGroup.add(danger);
  }
}




//create scoaring system

//add sound













