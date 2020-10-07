const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	

}

function draw() {
  background(230);
  Engine.update(engine);

  rectMode(CENTER);
  

	
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	
  	}
}


