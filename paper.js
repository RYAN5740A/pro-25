class Paper{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
 }
  display()
  {

    var paperPos=this.body.position;

      push()
      translate(paperPos.x, paperPos.y);
      rectMode(CENTER)
      //strokeWeight(4);
      fill(128,128,128)
      rect(0,0,this.w, this.h);
      ellipse(0,0,this.r,this.r)
      pop()
  } 
}