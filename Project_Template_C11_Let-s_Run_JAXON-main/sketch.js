var runnerImg, pathImg, path, runner, left_boundary, right_boundary;
function preload(){
 
  runnerImg=loadAnimation("runner-1.png", "runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running", runnerImg);
  runner.scale=0.1

  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;

 }
 runner.collide(left_boundary);
 runner.collide(right_boundary);
 edges=createEdgeSprites();
 runner.collide(edges[3]);
drawSprites();
}



