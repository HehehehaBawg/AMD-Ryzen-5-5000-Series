const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

var grnd,pf;
var chain;

function preload(){

    grnd = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);

    box1 = new Box(830,320,70,70);
    box2 = new Box(1050,320,70,70);
    pig1 = new Pig(940, 350);
    log1 = new Log(940,260,300, PI/2);

    box3 = new Box(830,240,70,70);
    box4 = new Box(1050,240,70,70);
    pig3 = new Pig(970, 220);

    log2 =  new Log(940,180,300, PI/2);

    box5 = new Box(940,160,70,70);
    log3 = new Log(890,120,150, PI/7);
    log4 = new Log(1010,120,150, -PI/7);

    box6 = new Box(1150,240,70,70);
    log5 = new Log(1150,125,240,PI);

    box7 = new Box(700,240,70,70);
    log6 = new Log(700,125,240,PI);

    bird = new Bird(200,50);

    pf = new Ground(150,305,400,200);
    
   // constraintLog = new Log(230,180,80,PI/2)

   slingshot = new Slingshot(bird.body,{x:200,y:50});

}

function draw(){
    background(grnd);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log2.display();

    box6.display();
    box7.display();
    log5.display();

    log6.display();

    pf.display();

    //constraintLog.display();
    slingshot.display();

    bird.display();
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

    slingshot.fly();
}
function keyPressed(){

    if(keyCode == 32){

        slingshot.attach(bird.body);
    }
}