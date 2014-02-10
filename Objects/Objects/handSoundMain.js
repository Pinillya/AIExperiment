function Toy (position)
{    
    this.position  = position; //Mouse press position
    this.texture   = null;
    this.nameId    = 'handSound';
    this.sizeX     = 2;
    this.sizeY     = 2;
    this.smellRad  = 30;
    this.soundRad  = 90;
    this.isStatic  = true;
    this.hasAni    = false;
	
    console.log (this.nameId);

	//Call the parent constructor
	BaseObject.call(this);

}

Toy.prototype = new BaseObject();
Toy.prototype.constructor = Toy;

Toy.prototype.working = function()
{
};

Toy.prototype.checking = function()
{
};