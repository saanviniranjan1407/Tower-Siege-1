class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var ban = this.body.position;

        push();
        fill(189,66,66);
        rectMode(CENTER);
        rect(ban.x,ban.y,this.width,this.height);
        pop();
    }
}