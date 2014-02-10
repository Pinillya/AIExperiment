function Toy (position)
{    
    this.position  = position;
    this.texture   = 'Grapic/Inside/mouse.png';
    this.nameId    = 'toy';
    this.sizeX     = 100;
    this.sizeY     = 100;
    this.smellRad  = 30;
    this.soundRad  = 90;
    this.isStatic  = true;
    this.hasAni    = false;
	
	//Call the parent constructor
	BaseObject.call(this);

}

Toy.prototype = new BaseObject();
Toy.prototype.constructor = Toy;

Toy.prototype.emitValues = function()
{
};

Toy.prototype.checking = function()
{
};