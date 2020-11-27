const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground2;

function setup() {
    createCanvas(900,330);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,305,260,10);
    ground2 = new Ground(650,255,200,10);
}

function draw() {
    background(56,44,44);  
    Engine.update(engine);

    ground.display();
    ground2.display();
}