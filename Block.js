class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 30;
        this.height = 40;
        World.add(world,this.body);
    }

    display(){
        vb = this.body.position;
        angle = this.body.angle;

        push();
        translate(vb.x,vb.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}