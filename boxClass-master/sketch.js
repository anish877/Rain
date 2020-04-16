const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var sun;
var drops = [];
var x,y;
var pos;
var b

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

 for(var i=0; i<100; i++){
		drops[i] = new Drop();
  }
    
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    console.log(drops)
    
      for(var i=0; i<drops.length; i++){
		drops[i].display();
      }
}