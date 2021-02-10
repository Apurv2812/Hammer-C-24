
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hammer,stone,rubber;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
	hammer = new Hammer(200,200);
	stone = new Stone(700,300,80,80);
	rubber = new Rubber(800,350,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
	ground.display();
	hammer.display();
	stone.display();
	rubber.display();

  drawSprites();
 
}



