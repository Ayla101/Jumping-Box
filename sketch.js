var canvas;
var music;
var b1,b2,b3,b4,ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    b1=createSprite(0,580,360,20);
    b1.shapeColor="red"
    
    b2=createSprite(300,580,200,20);
    b2.shapeColor="green"

    b3=createSprite(510,580,200,20);
    b3.shapeColor="blue"

    b4=createSprite(720,580,250,20);
    b4.shapeColor="orange"

    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=9
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()
    ball.bounceOff(edges);
    if (b1.isTouching(ball)&&ball.bounceOff(b1)){
        ball.shapeColor="red"
        music.play()

    }
    if (b2.isTouching(ball)&&ball.bounceOff(b2)){
        ball.shapeColor="green"
    }

    if (b3.isTouching(ball)&&ball.bounceOff(b3)){
        ball.shapeColor="blue"
    }
    if (b4.isTouching(ball)){
        ball.shapeColor="orange"
        music.stop()

        ball.velocityX=0
        ball.velocityY=0
    }
    //create edgeSprite
    drawSprites();


    //add condition to check if box touching surface and make it box
}
