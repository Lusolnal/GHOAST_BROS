
var ground, background
var ghoastbuster_n, ghoastbuster_s, bullet
var ghoast_n, ghoast_j, ghoast_go
var spike_m, robot_m, robot_s
var princessghoast



function preload(){  
 // shooterImg = loadImage("assets/shooter_2.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  //bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
createCanvas(windowWidth,windowHeight);

  //adding the background image
backgrund = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
backgrund.addImage(bgImg)
backgrund.scale = 1.1
  

//creating the player sprite
ground = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
ground.addImage(shooterImg)
ground.scale = 0.3
ground.debug = true
ground.setCollider("rectangle",0,0,300,300)

ghoastbuster_n = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
ghoastbuster_n.addImage(shooterImg)
ghoastbuster_n.scale = 0.3
ghoastbuster_n.debug = true
ghoastbuster_n.setCollider("rectangle",0,0,300,300)

ghoast_n = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
ghoast_n.addImage(shooterImg)
ghoast_n.scale = 0.3
ghoast_n.debug = true
ghoast_n.setCollider("rectangle",0,0,300,300)

spike_m = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
spike_m.addImage(shooterImg)
spike_m.scale = 0.3
spike_m.debug = true
spike_m.setCollider("rectangle",0,0,300,300)

robot_m = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
robot_m.addImage(shooterImg)
robot_m.scale = 0.3
robot_m.debug = true
robot_m.setCollider("rectangle",0,0,300,300)

princessghoast = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
princessghoast.addImage(shooterImg)
princessghoast.scale = 0.3
princessghoast.debug = true
princessghoast.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
