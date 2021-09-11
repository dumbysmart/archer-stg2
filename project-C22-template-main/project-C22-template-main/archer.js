class archerC{
    constructor(x,y,w,h,angle){
        var options = {
            isStatic:true
        }
    this.body= Bodies.rectangle(x,y,w,h,options)
    this.w=w
    this.h=h
    this.x=x
    this.y=y
    this.angle=angle
    this.image=loadImage("assets/playerArcher.png")
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }

show(){
    var pos=this.body.position
    if (keyIsDown(RIGHT_ARROW)&&(this.angle<-80)){
        this.angle+=5
      }
      if (keyIsDown(LEFT_ARROW)&&(this.angle>-100)){
        this.angle-=5
      }
    push()
    translate(pos.x, pos.y);
    rotate(this.angle);
    rectMode(CENTER)
    image(this.image,0,0,this.w,this.h)
    pop()
   

}
}