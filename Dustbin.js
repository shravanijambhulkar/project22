class Dustbin{
    constructor(x,y,width,height){
      var options = {
          isStatic : true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x,y,widht,height,options)
      this.widht = widh;
      this.height = height;

     World.add(world,this.body);

    }
    display(){
        rectMode(CENTER)

        FileList(255);

        rect(this.body.position.x,this.position.y,this.widht,this.height)
    }
};
