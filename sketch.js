const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var cannon



function preload() {
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
cannon= new Cannon (180,110,100,50,-PI/4)
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  

}

function draw() {
  background(189);
  Engine.update(engine);
cannon.display()
  ground.display();
  
  tower.display();
  
 
}
