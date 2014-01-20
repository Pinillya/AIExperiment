var petItemsKnown = [];
var petTargetPos = new THREE.Vector3(0,0,0);
function Pet (petTexture, xCoordinates, yCoordinates) 
{
	var petMaterial;

	///Make the pet
	var petHight = 20, petWith = 20, petQuality = 1;
	petMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(petTexture), transparent: true});

	this.pet = new THREE.Mesh(
		new THREE.PlaneGeometry(
		petWith,
		petHight,
		petQuality,
		petQuality),
		petMaterial);

	scene.add(this.pet);
	this.pet.position.y = yCoordinates;
	this.pet.position.x = xCoordinates;

    this.targetPosition = petTargetPos;
    this.exploring = exploring;
}

var hovering = 100;

var exploring = true;
Pet.prototype.moving = function(frameCounter) 
{

//The pet finds random positions to walk to if it wants to explore
	if (frameCounter == 50 && this.exploring) 
	{
		var ranNumX = 100, ranNumZ = 0, ranNumY = 0;
		
		ranNumX = THREE.Math.random16() * 50;
		ranNumY = THREE.Math.random16() * 50;
		ranNumZ = THREE.Math.random16() * 50;

		this.targetPosition = new THREE.Vector3(ranNumX,ranNumY,ranNumZ);
	};	

	var hoverDistance = 1;
	var hoverSpeed = 1.1;

	//HoveringPet
	if (hovering > hoverDistance)
	{
		hoverSpeed = Math.sin(hovering);
		this.pet.position.y += hoverSpeed/20;
		hovering -= 0.1;
	}
	else 
	{
		hovering = 100;
	}

	//Walk X
	if (this.targetPosition.x > this.pet.position.x)
	{
		this.pet.position.x += 0.1;
	}
	if (this.targetPosition.x < this.pet.position.x)
	{
		this.pet.position.x -= 0.1;
	}

/*	Commented this out to look at the wobbely hovering
	//Walk Y
	if (targetPosition.y > this.pet.position.y)
	{
		this.pet.position.y += 0.1;
	}
	if (targetPosition.y < this.pet.position.y)
	{
		this.pet.position.y -= 0.1;
	}
*/

	//Walk Z
	if (this.targetPosition.z > this.pet.position.z)
	{
		this.pet.position.z += 0.1;
	}
	if (this.targetPosition.z < this.pet.position.z)
	{
		this.pet.position.z -= 0.1;
	}
};

Pet.prototype.checkObjects = function(petNumber, itemNumber) 
{
	//var petObjectInput = [];
	//Returns values: smellInRange(0), soundInRange(1), touching(2), this.idNumber(3), position(4)
	var petObjectInput = objects[itemNumber].encounter(this.pet.position, 5);

	if (petObjectInput[0] == 1 || petObjectInput[0] == 2)
	{
		this.exploring = false;
		this.targetPosition = objects[itemNumber].objectSmell(this.pet.position);
		console.log (this.targetPosition.x + ' ' + this.targetPosition.y + ' ' +this.targetPosition.z);
/*
		this.targetPosition = this.pet.position;
		var travleDirectionValue = 2;
		var targetDirX = 0;
		var targetDirZ = 0;
		//X direction
		if (petObjectInput[4].x > this.pet.position.x)
		{
			targetDirX = this.targetPosition.x + travleDirectionValue;
			console.log (petObjectInput[4].x + ' X ' + this.pet.position.x);
		}
		else if (petObjectInput[4].x < this.pet.position.x)
		{
			targetDirX = this.targetPosition.x - travleDirectionValue;
			console.log (petObjectInput[4].x + ' X ' + this.pet.position.x);
		};

		//Z direction
		if (petObjectInput[4].z > this.pet.position.z)
		{
			targetDirZ = this.targetPosition.z + travleDirectionValue;
			console.log (petObjectInput[4].z + ' Z ' + this.pet.position.z);
		}
		else if (petObjectInput[4].z < this.pet.position.z)
		{
			targetDirZ = this.targetPosition.z - travleDirectionValue;
			console.log (petObjectInput[4].z + ' Z ' + this.pet.position.z);
		};

		this.targetPosition = new THREE.Vector3(targetDirX,0,targetDirZ);

		console.log ('checking');
		//Can check if interested. Goes in a direction towards it. 
*/
	}
};


