class rope{

	

	constructor(t,col,sx,sy,ex,ey,st,con)
	{   
		push()
        stroke(col);
		strokeWeight(t);
		 
		
      
	 //create rope constraint here
	   con = Matter.Constraint.create({
       pointA:{sx,sy},
	   bodyB:{ex,ey},
	   length:100,
	   stiffness:st
	  })
	  pop()

    }



    //create display() here 
   show(){
	   push()
	   line(this.x1,this.y1,this.x2,this.y2);
	   pop();
   }
   
    
}
