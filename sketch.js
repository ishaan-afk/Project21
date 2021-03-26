var canvas,music;
var Square1,Square2,Square3,Square4,Square5;
var ball,topEdge,music2;
function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
   Square1 = createSprite(111,594,200,30);
   Square1.shapeColor = "white";

   Square2 = createSprite(313,594,200,30);
   Square2.shapeColor = "yellow";

   Square3 = createSprite(515,594,200,30);
   Square3.shapeColor = "blue";

   Square4 = createSprite(717,594,200,30);
   Square4.shapeColor = "red";

   Square5 = createSprite(909,594,180,30);
   Square5.shapeColor = "brown";

    //create box sprite and give velocity
    ball = createSprite(random(20,800),random(100,200),10,10);
    ball.shapeColor = "black";
    ball.velocityX = 7;
    ball.velocityY = 7;
    
    
}

function draw() {
    background ("green");
    if(Square1.isTouching(ball)&& ball.bounceOff(Square1)) {
        ball.shapeColor = "white";
    }
   
    if(Square2.isTouching(ball)&& ball.bounceOff(Square2)) {
        ball.shapeColor = "yellow";
    }

    if(Square3.isTouching(ball)&& ball.bounceOff(Square3)) {
        ball.shapeColor = "blue";
        ball.velocityX=0;
        ball.velocityY = 0;

    }
 
    if(Square4.isTouching(ball)&& ball.bounceOff(Square4)) {
        ball.shapeColor = "red";
    }

    if(Square5.isTouching(ball)&& ball.bounceOff(Square5)) {
        ball.shapeColor = "brown";
    }
 topEdge = createEdgeSprites();
 ball.bounceOff(topEdge);
 
    drawSprites();
    //add condition to check if box touching surface and make it box
}
