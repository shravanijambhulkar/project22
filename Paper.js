class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            "restitution":0.3,
            "friction":0.5,
            "density":1.2
        }
        this.body = Bodis.circle(x,y,radius,options)
        this.radius = radius
        AudioWorkletNode.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS);

        fill("yellow")

        circle(this.body.position.x,this.body.position.y,this.radius)
    }
};