class Slingshot{

constructor(bodyA,pointB){

    var options = {

        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.slingshot = Constraint.create(options);
    this.pointB = pointB;
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    World.add(world,this.slingshot);

}
display(){

    
    image(this.sling1,200,20);
    image(this.sling2,170,20);


    if(this.slingshot.bodyA != null){
    var posA = this.slingshot.bodyA.position;
    var posB = this.pointB;

    push();
    stroke(48,22,8);
    if(posA.x<220){
    strokeWeight(7);
    line(posA.x-20,posA.y,posB.x-10,posB.y);
    line(posA.x+20,posA.y,posB.x+30,posB.y-3);
    image(this.sling3,posA.x-30,posA.y-10,15,30)
    }
    else{
        strokeWeight(3);
        line(posA.x+25,posA.y,posB.x-10,posB.y);
        line(posA.x+25,posA.y,posB.x+30,posB.y-3);
        image(this.sling3,posA.x+23,posA.y-10,15,30)

    }
    pop();
}
}
fly(){

    this.slingshot.bodyA = null;
}

attach(bodyA){

this.slingshot.bodyA = bodyA;    
}
}
