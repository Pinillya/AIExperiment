function Food (position)
{  
    //Tecnical attributes
    this.position  = position;
    this.texture   = 'Grapic/Inside/food.png';
    this.nameId    = 'food';
    this.sizeX     = 100;
    this.sizeY     = 100;
    this.smellRad  = 300;
    this.soundRad  = 0;
    this.isStatic  = true;
    this.hasAni    = false;

    //Sensory attributes
    this.mainColor = 'red';
    this.mainshape = 'oval';
    this.smell     = 'sweet';
    this.taste     = 'good';

    this.edible    = true;

    // % value
    this.fun       = 60;
    this.soundRad  = 0;
    this.isStatic  = true;
    this.hasAni    = false;


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