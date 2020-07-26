//Creating Constant Bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Creating Variables
var engine, world;
var box1, pig1;

var grnd,pf;
var chain,bg = "sprites/bg.png";

var gameState = "ready"
var GameState = "start"

var score = 0;

var backgroundImage;

function preload(){

//Displaying background
    getBackgroundImage();
}

function setup(){

//Creating Canvas
    var canvas = createCanvas(1200,400);

//Creating Engine and World
    engine = Engine.create();
    world = engine.world;

//Creating Ground
    ground = new Ground(600,height,1200,20);

//Creating Boxes
    box1 = new Box(830,320,70,70);
    box2 = new Box(1050,320,70,70);
    box3 = new Box(830,240,70,70);
    box4 = new Box(1050,240,70,70);
    box5 = new Box(940,160,70,70);

//Creating Logs
    log1 = new Log(940,260,300, PI/2);
    log2 =  new Log(940,180,300, PI/2);
    log3 = new Log(890,120,150, PI/7);
    log4 = new Log(1010,120,150, -PI/7);

//Creating Pigs
    pig1 = new Pig2(940, 350);
    pig3 = new Pig(970, 220);

//Creating Bird
    bird = new Bird(200,50);

//Creating Platform
    pf = new Ground(150,305,400,200);
    
//Creating Slingshot
    slingshot = new Slingshot(bird.body,{x:200,y:50});
   
    }


function draw(){

//Creating automatic Background Image
    if(backgroundImage!= null){

        background(backgroundImage);
    }
 
//Updating Engine    
    Engine.update(engine);

//Printing Score    
    noStroke();
    textSize(35);
    fill("white");
    text("Score"+score,width-300,50);

//Display
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log2.display();

    pf.display();

    slingshot.display();

    bird.display();

   
}

//Mouse Drag Function
function mouseDragged(){

   if(gameState == "ready"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
   }
}

//Mouse Released Function
function mouseReleased(){

    slingshot.fly();
    gameState = "launch";
    GameState = "play";

}

//Attaching Bird to Slingshot when SPACE is pressed
function keyPressed(){

    if(keyCode == 32 && (bird.body.speed<1||bird.body.speed>=26)){

        bird.trajectory = [];
        slingshot.attach(bird.body);
        gameState = "ready";
        Matter.Body.setPosition(bird.body,{x:200,y:50});
        
        
    }
}

//Background changing / Time Zone 
async function getBackgroundImage(){

   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") ;
   var responseJSON = await response.json();
   var dateTime = responseJSON.datetime;
   var hour = dateTime.slice(11,13);

   if(hour>=06 && hour<=18){

    bg = "sprites/bg.png"
   }else{

    bg  = "sprites/bg2.jpg";
   }

   backgroundImage = loadImage(bg)
}
