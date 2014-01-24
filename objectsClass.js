//Illy Binfield, 2014, objectClass.js
//The object class will be used as a baseclass for all the objects on the scene. 
// the objects inherite from this class all the basic attributes like small, sound and so on. 
function Object (parimiters) 
{
	//Different variables all the objects will have
	//We make them local to the spesific item by using THIS.X = X;
	this.idNumber = parimiters.nameId;
	this.position = parimiters.position;
	this.texture = parimiters.texture;

	this.hasSmell = parimiters.hasSmell;
	this.smellRadius = parimiters.smellRad;
	this.hasSound = parimiters.hasSound;
	this.soundRadius = parimiters.soundRad;

	this.isStatic = parimiters.isStatic;
	this.hasAnimation = parimiters.hasAni;
	this.initialValue = parimiters.initValue;

	if (this.hasAnimation)
	{
		//this.meshAnimation();
	}
	if (!this.isStatic)
	{
		//this.physics();
	}

    //Texture:
	var planeMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(this.texture), transparent: true});

	this.plane = new THREE.Mesh(
		new THREE.PlaneGeometry(
		parimiters.sizeX,
		parimiters.sizeY),
		planeMaterial);

	scene.add(this.plane);
	this.plane.position = this.position;
}

//Generates a random point towards the target object
Object.prototype.objectSmell = function(petPos, errorArea) 
{
	var objToPetTargetPos = new THREE.Vector3(0,0,0);

    //Pos X
	if (petPos.x > this.position.x)
	{
		//tempPosXHolder = this.position.x + THREE.Math.random16() * errorArea;
		objToPetTargetPos.x = this.position.x + THREE.Math.random16() * errorArea;
	}
	else if (petPos.x < this.position.x)
	{
		//tempPosXHolder = this.position.x - errorArea + THREE.Math.random16() * errorArea;
		objToPetTargetPos.x = this.position.x - errorArea + THREE.Math.random16() * errorArea;
	};

    //Pos Z
	if (petPos.z > this.position.z)
	{
		//tempPosZHolder = this.position.z + THREE.Math.random16() * errorArea;
		objToPetTargetPos.z = this.position.z + THREE.Math.random16() * errorArea;
	}
	else if (petPos.z < this.position.z)
	{
		//tempPosZHolder = this.position.z - errorArea + THREE.Math.random16() * errorArea;
		objToPetTargetPos.z = this.position.z - errorArea + THREE.Math.random16() * errorArea;
	};

    //Return
	//this.objToPetTargetPos = new THREE.Vector3(tempPosXHolder,tempPosYHolder,tempPosZHolder);
	return objToPetTargetPos;
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
//The different stages of finding an object based on the likelyhood of finding
//the object using that sense. 
//If the pet is touching the object,- dont check for the object anymore.
//If the pet can see the object there is no use for the smell check or the sound check.
//As it is easier to locate the origo of a sound, this will be checked by the pet before smell. 
var touching = false;
Object.prototype.encounter = function(petPos, itemNumber) //name is Encountering instead? 
{
	var distanceToPet = this.plane.position.distanceTo(petPos);
	var soundInRange = 0, smellInRange = 0, seesObject = false;
	
	if (!touching){
		if (distanceToPet < 2)
		{
			smellInRange = 3;
			console.log ('touching');
			//Might have a thing here stopping the pet from being able to walk through the object. 
		}
		else if (seesObject)
		{
			//Will later be used to check if pet seems object. 
		}
		else if (this.hasSound)
		{
			soundInRange = objects[itemNumber].distanceCheck(this.soundRadius, distanceToPet);
		}
		else if (this.hasSmell)
		{
			smellInRange = objects[itemNumber].distanceCheck(this.smellRadius, distanceToPet);
		};
	}

	return [smellInRange, soundInRange, this.idNumber];
};

Object.prototype.distanceCheck = function(radiusCheck, distanceToPet)
{
	//This probably has to be inside of the two above. It should also be a pet.y vs object.y+hight
	if (distanceToPet < radiusCheck*1.2)
	{
		if (distanceToPet < radiusCheck)
		{
			//smellInRange = 1;
			return 1;

			//We check if the pet is really close
			if (distanceToPet < radiusCheck/2)
			{
				//smellInRange = 2;
				return 2;
			}
		}
	};
/*
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
	};*/
}

Object.prototype.interact = function(petPos)
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

