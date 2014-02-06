function Food ()
{   
    this.position  = new THREE.Vector3(30,0,0);
    this.texture   = 'Grapic/Inside/food.png';
    this.nameId    = 'food';
    this.sizeX     = 100;
    this.sizeY     = 100;
    this.smellRad  = 50;
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