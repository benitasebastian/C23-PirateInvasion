const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  
  bgImage = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  canon = new Cannon(180,110,100,50,-PI/4);

}

function draw() {
  background(bgImage);
  Engine.update(engine);

  ground.display();
  
  tower.display();
  canon.display();
 
}
