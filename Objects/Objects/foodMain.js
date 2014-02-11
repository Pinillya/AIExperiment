function Food (position)
{  
    //Tecnical attributes
    this.position  = position;
    this.texture   = 'Grapic/Inside/food.png';
    this.nameId    = 'food';
    this.sizeX     = 100;
    this.sizeY     = 100;
    this.smellRad  = 30;
    this.soundRad  = 50;
    this.isStatic  = true;
    this.hasAni    = false;

    //Sensory attributes
    this.mainColor = 'red';
    this.mainshape = 'oval';
    this.smell     = 'sweet';
    this.taste     = 'good';

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

//inherits Object
Food.prototype = new BaseObject();
//Setts the food constructor as the constructor
Food.prototype.constructor = Food;

Food.prototype.emitValues = function()
{

};

Food.prototype.checking = function()
{
};