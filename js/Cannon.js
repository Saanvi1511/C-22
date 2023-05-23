class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannontop = loadImage("./assets/canon.png");
    this.cannonbase = loadImage("./assets/cannonBase.png");
  }
  
  show()
  {
    push();
   //code to create cannon top
   imageMode(CENTER);
   image(this.cannontop ,this.x , this.y , this.width , this.height);

   pop();
   //code to create cannon BOTTOM
   image(this.cannonbase , 70 , 20 , 200 , 200);
   noFill();
  }
}
