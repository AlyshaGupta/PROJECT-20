var movingrect,fixedrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(100, 100, 50, 50);
  fixedrect.shapeColor="pink";
  movingrect.shapeColor="pink";
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
 
  isTouching();

  drawSprites();
}

function isTouching() {
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2) {
 fixedrect.shapeColor="orange";
 movingrect.shapeColor="orange";
 }
 else{
 fixedrect.shapeColor="pink";
 movingrect.shapeColor="pink";
 
 }
}