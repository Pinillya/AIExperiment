function Object (position, texture, idNumber, sizeX, sizeY, smellRadius, soundRadius, isStatic, hasSmell, hasSound, hasAnimation, initialValue) 
{
	this.idNumber = idNumber;
	this.position = position;
	this.texture = texture;

	this.hasSmell = hasSmell;
	this.smellRadius = smellRadius;
	this.hasSound = hasSound;
	this.soundRadius = soundRadius;

	this.isStatic = isStatic;
	this.hasAnimation = hasAnimation;
	this.initialValue = initialValue;

	if (hasAnimation)
	{
		//this.meshAnimation();
	}
	if (!isStatic)
	{
		//this.physics();
	}

//Texture:
	var planeQuality = 20;
	var planeMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(this.texture), transparent: true});

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

//Generates a random point towards the target object
Object.prototype.objectSmell = function(petPos, errorArea) 
{
	var tempPosXHolder = 9.0;
	var tempPosYHolder = 0.0;
	var tempPosZHolder = 9.0;
	var objToPetTargetPos= new THREE.Vector3(0,0,0);

//Pos X
	if (petPos.x > this.position.x)
	{
		tempPosXHolder = this.position.x + THREE.Math.random16() * errorArea;
	}
	else if (petPos.x < this.position.x)
	{
		tempPosXHolder = this.position.x - errorArea + THREE.Math.random16() * errorArea;
	};
/*
//Pos Y we wont have flying as a part of the pet. This will have to be a guide to where the pet should jump to if anything
	if (petPos.y > this.position.y)
	{
		tempPosZHolder = this.position.y + THREE.Math.random16() * errorArea;
	}
	else if (petPos.y < this.position.y)
	{
		tempPosZHolder = this.position.y - errorArea - THREE.Math.random16() * errorArea;
	};*/

//Pos Z
	if (petPos.z > this.position.z)
	{
		tempPosZHolder = this.position.z + THREE.Math.random16() * errorArea;
	}
	else if (petPos.z < this.position.z)
	{
		tempPosZHolder = this.position.z - errorArea + THREE.Math.random16() * errorArea;
	};

//Return
	console.log (tempPosXHolder + ' objToPetTargetPos.x');
	this.objToPetTargetPos = new THREE.Vector3(tempPosXHolder,tempPosYHolder,tempPosZHolder);
	return this.objToPetTargetPos;
};

Object.prototype.objectSound = function(petPos) 
{
};

Object.prototype.meshAnimation = function() 
{
	console.log ("animation");
};

//encounters the object, returns frue/false if item is in smelling or sound range
//returns the item "number"
Object.prototype.encounter = function(petPos) //name is Encountering instead? 
{
	var distanceToPet = this.plane.position.distanceTo(petPos);
	var soundInRange = 0, smellInRange = 0, touching = 0;

	//This probably has to be inside of the two above. It should also be a pet.y vs object.y+hight
	if (distanceToPet < 2)
	{
		smellInRange = 3;
		console.log ('touching');

		//Might have a thing here stopping the pet from being able to walk through the object. 
	}

	else if (distanceToPet < this.smellRadius*1.2)
	{
		if (distanceToPet < this.smellRadius)
		{
			smellInRange = 1;

			//We check if the pet is really close
			if (distanceToPet < this.smellRadius/2)
			{
				smellInRange = 2;
			}
		}
	}

	else if (distanceToPet < this.soundRadius*1.2)
	{
		if (distanceToPet < this.soundRadius)
		{
			smellInRange = 1;

			//We check if the pet is really close
			if (distanceToPet < this.soundRadius/2)
			{
				smellInRange = 2;
			}
		}
	};



	return [smellInRange, soundInRange, this.idNumber, this.position];
	//return this.objectSmell(petPos), this.objectSound(petPos), this.idNumber;
};

Object.prototype.interact = function(petPos) //name is Encountering instead? 
{

	if (this.hasSound)
	{
		this.objectSound(petPos);
	}
	if (this.hasSmell)
	{
		this.objectSmell(petPos);
	}
	//console.log (petPos);

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

Object.prototype.sendNewPetTarget = function() 
{
	console.log ("sendNewPetTarget");
};

Object.prototype.functionSender = function() 
{
	console.log ("functionSender");
};

Object.prototype.physics = function() 
{
	console.log ("physics");
};

