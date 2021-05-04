
var monkey , monkey_running
var banana ,bananaImage, enemy, enemyImage
var FoodGroup, obstacleGroup
var score = 0
var ground
var bg,bgimage


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  enemyImage = loadImage("obstacle.png");
  bgimage  = loadImage("jungle.jpg")
  
  bananagroup = new Group()
  enemygroup = new Group()
 
}



function setup() {
  createCanvas(displayWidth, displayHeight);
  
bg = createSprite(300,300,600,600)
bg.addImage(bgimage)

  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  ground = createSprite(400,500,900,10)
  ground.velocityX = -4
  bg.scale = 1.7
  monkey.scale = 0.1
  ground.visible = false
  bg.velocityX = -2
  if(ground.x<10 ){
   ground.x = ground.width/2
  }
 
  
}


function draw() {
  background("white")
  camera.position.x = monkey.x
  camera.position.y = monkey.y
   if(bg.x<0){
    
  bg.x = bg.width/2
  }
    if(monkey.isTouching(bananagroup)){
    monkey.scale = monkey.scale + 0.1
      bananagroup.destroyEach()
      score = score +1
  }
  else if(monkey.isTouching(enemygroup)){
    monkey.scale = monkey.scale - 0.1
    enemygroup.destroyEach()
    score = score -1
  }
  

    bananafunc();
   enemyfunc();
  monkey.y = monkey.y + 3 
  monkey.collide(ground)
  
 if(keyDown("space")){
   monkey.y = monkey.y - 5
 

 }
  if(ground.x<10 ){
   ground.x = ground.width/2
  }
  drawSprites()  
     stroke("white")
   textSize(20)
   fill("white")
   text("Score: + score,500,50")
   stroke("black")
   textSize(20)
   fill("black")
   survivalTime = score
   text("survival time:"+survivalTime,camera.x+200,camera.y-200)
    
  
}
function bananafunc() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(200, 500, 20, 20)
    banana.scale = 0.07
    banana.y = Math.round(random(camera.position.y));
    banana.velocityX = -4
    banana.setLifetime = 100
    bananagroup.add(banana)
     banana.addImage(bananaImage)
    
  }}
function enemyfunc() {
  if (frameCount % 100 === 0) {
    var enemy = createSprite(600, 500, 10, 40);
    enemy.setLifetime = 100
    enemy.velocityX = -4
    enemygroup.add(enemy)
    enemy.addImage(enemyImage) 
    enemy.scale = 0.1
  }}
    
    
    
    
    