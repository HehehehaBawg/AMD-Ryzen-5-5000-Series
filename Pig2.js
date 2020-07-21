class Pig2 extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);

      this.image = loadImage("sprites/Pgi.png");
      this.image2 = loadImage("sprites/pgiout2.png");
      this.visibility = 255;
    }
    display(){

      var PigSpeed = this.body.speed;
      if(PigSpeed<3){
      super.display();
      }else{
        push();
        World.remove(world,this.body);
        this.visibility = this.visibility - 2;
        tint(255,this.visibility);
        image(this.image2,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
    score(){

      if(this.visibility<0 && this.visibility>-1005){

        score = score+1;
      }
    }
  }
  