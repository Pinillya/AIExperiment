function Object (position, texture, idNumber, sizeX, sizeY) 
{
	var isStatic = true;
	var hasSmell = false;
	var hasSound = false;
	var hasAnimation = false;
	var expectations = 0;

	this.idNumber = idNumber
	this.position = position;
	this.texture = texture;

	if (hasSound)
	{
		//this.objectSound();
	}
	if (hasSmell)
	{
		//this.objectSmell();
	}
	if (hasAnimation)
	{
		//this.meshAnimation();
	}
	if (!isStatic)
	{
		//this.physics();
	}

//Texture:
	var planeQuality = 10;
	var planeMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: true});

	this.plane = new THREE.Mesh(
		new THREE.PlaneGeometry(
		sizeX,
		sizeY,
		planeQuality,
		planeQuality),
		planeMaterial);

	scene.add(this.plane);
	this.plane.position = position;
}

Object.prototype.objectSmell = function(petPos) 
{
	//Returns direction, asosiations, 
	//Merge Smell and Sound?  - nah might have different things. Might merge a bit of them. Run direction through a fun
	//Esentially checking 
	//Sound, Smell, contact. -> should pet now get function? 
};

Object.prototype.objectSound = function(petPos) 
{
};

Object.prototype.meshAnimation = function() 
{
};

Object.prototype.expectation = function() //name is Encountering instead? 
{
	//if (pet officially encounters the object)
	//Check the encounter list of the pet up agains the objects personal number
	// if the pet has not saved the personal number in the "known" array:
		// Sends function to petFunctionArray if a function should be sent(if it is int he propper range and all);
		// Saves a position in the pets expectations/asosiations array.
		// run the function sent. 
		// 
		//All this has to be done in a return array so that the pet that encounters the object
		//can collect the data on its own. 
};

Object.prototype.functionSender = function() 
{
};

Object.prototype.physics = function() 
{

};

