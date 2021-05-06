class Bird extends BaseClass
{

    //To create the object we use constructor

    constructor(x,y)
    {
        
        super(x,y,50 ,50);
        //overriding 
        this.image = loadImage("sprites/bird.png");

    }

    display()
    {
        //Bird's own functionality.hence overriding 
        //In actual game the bird doesn't follow or move as per the mouse so comment it

      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
        super.display();
    }
}