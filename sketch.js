var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score =0
var ground
// var survivalTime = 0
var jungle ,jungleImage;



function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg")

}



function setup() {
  createCanvas(600, 600)
  monkey = createSprite(150, 465, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(300, 500, 600, 10)
  // ground.velocityX = -6
  // ground.x = ground.width / 2;
  console.log(ground.x)
  ground.visible = false;

  obstacleGroup = new Group()
  foodGroup = new Group()
  
  jungle = createSprite(300,300,10,10)
  jungle.addImage("animalHome",jungleImage)
  jungle.velocityX =-2
  jungle.depth = monkey.depth;
  monkey.depth = monkey.depth +1


  
 
}


function draw() {
 
 background(220)
  
  
  
   if (jungle.x < 200) {
    jungle.x = 400
  }
  if (keyDown("space")) {
    monkey.velocityY = -10;

  }
  monkey.velocityY = monkey.velocityY + 0.6
  if(foodGroup.isTouching(monkey)){
    score = score+2
    foodGroup.destroyEach()
     
     }

  monkey.collide(ground)
  spawnObstacles()
  // obstacleGroup.collide(monkey)
  spawnBanana()
  
  switch(score){
    case 10: monkey.scale = 0.2;
      break;
    case 20: monkey.scale = 0.3;
      break;
    case 30: monkey.scale = 0.4;
      break;
    case 40: monkey.scale = 0.5;
      break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1
     
     }



  drawSprites()

  stroke("black")
  textSize(20)
  fill("white")
  // score = Math.ceil(frameCount / frameRate())
  text("score:" + score, 100, 50)
  
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 457, 10, 60)
    obstacle.addImage("rock",obstacleImage)
    obstacle.velocityX = -6
    obstacle.scale = 0.2
    obstacle.lifetime = 250
    

    obstacleGroup.add(obstacle)
  }
}

function spawnBanana() {
  if (frameCount % 160 === 0) {
    var banana = createSprite(620, 300, 10, 10)
    banana.addImage("food", bananaImage)
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1
    banana.scale = 0.1
    banana.velocityX = -6
    banana.lifetime = 100
    foodGroup.add(banana)

  }



}  
