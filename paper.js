class Paper{
	constructor(x,y,r){
		
		var options = {
            isStatic: false,
            restitution: 0.3,
			friction: 0,
			density: 1.2
		}

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	
	display(){

		var rubberpos=this.body.position;		
		push()
		translate(rubberpos.x, rubberpos.y);
		image(this.image,0,0,60,60);
		pop()
		
	}

}