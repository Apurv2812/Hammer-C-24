class Rubber{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(this.x, this.y,this.r, options);
        this.x =x;
        this.y=y;
        this.r=r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(6);
        stroke("orange")
        fill("brown")
        ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r);
        pop();
      }
}