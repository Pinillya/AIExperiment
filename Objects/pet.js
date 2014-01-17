petItemsKnown = [];
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
}

var hovering = 100;
Pet.prototype.moving = function(targetPosition) 
{
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
	if (targetPosition.x > this.pet.position.x)
	{
		this.pet.position.x += 0.1;
	}
	if (targetPosition.x < this.pet.position.x)
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
	if (targetPosition.z > this.pet.position.z)
	{
		this.pet.position.z += 0.1;
	}
	if (targetPosition.z < this.pet.position.z)
	{
		this.pet.position.z -= 0.1;
	}
};

Pet.prototype.checkObjects = function(petNumber, itemNumber) 
{
	//var petObjectInput = [];
	var petObjectInput = objects[itemNumber].encounter(this.pet.position);

	if (petObjectInput[0] == 1)
	{
		console.log (petObjectInput[3] );
	}
};


