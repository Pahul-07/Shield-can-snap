class Box{
    constructor(x,y,w,h){
        var options={
            friction:0,
            restitution:0.5
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("thanos.png");
        this.visibility = 255;
        this.volume = 0.5
        this.visibility=255;
        this.width=w;
        this.height=h;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<6){
        push ();
        translate(0,0);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop(); 
    }
    else{
        World.remove(world, this.body);
        push();
        this.visibility-=15
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop();
    }
    }
}