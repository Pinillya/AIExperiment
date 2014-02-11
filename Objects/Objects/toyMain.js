function Toy (position)
{    
    this.position  = position;
    this.texture   = 'Grapic/Inside/mouse.png';
    this.nameId    = 'toy';
    this.sizeX     = 100;
    this.sizeY     = 100;
    this.smellRad  = 30;
    this.soundRad  = 50;
    this.isStatic  = true;
    this.hasAni    = false;

    //Sensory attributes
    this.mainColor = 'green';
    this.mainshape = 'oval';
    this.smell     = 'dry';
    this.taste     = 'plastic';

    // % value asosiated with actions the pet can take
    this.eat            = 100;
    this.sleep          = 0;
    this.washSelf       = 0;
    this.fight          = 0;
    this.runAway        = 0;
    this.threaten       = 0;
    this.talkTo         = 0;
    this.washOther      = 0;
    this.grabb          = 50;
    this.push           = 50;
    this.exlore         = 50;
    this.jumpOnToppOff  = 60; //This should be able to change as if they jump on it they wont get to eat it
    
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