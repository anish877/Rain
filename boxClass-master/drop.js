class Drop{

constructor(){

this.body = Bodies.rectangle(random(0,400),random(0,-400),5,20);
this.width = width;
this.height = height;
Body.setVelocity(this.body,{x:0,y:10});
World.add(world,this.body);

}
display(){
   
 pos = this.body.position;
fill("green");
 if(this.body.position.y>400)
     {
    this.body.position.y = random(0,-400);
      }
rectMode(CENTER);
rect(pos.x,pos.y,5,30);

}

}