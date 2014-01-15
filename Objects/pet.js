//--------Global variables-----------

function Pet (petTexture, xCoordinates, yCoordinates) 
{
	//var pet;
	var petMaterial;

	///Make the man
	var petHight = 10, petWith = 10, petQuality = 10, petYPos = petHight/2;
	petMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(petTexture), transparent: true});

	this.pet = new THREE.Mesh(
		new THREE.PlaneGeometry(
		petWith,
		petHight,
		petQuality,
		petQuality),
		petMaterial);

	scene.add(this.pet);
	this.pet.position.y = petYPos + yCoordinates;
	this.pet.position.x = xCoordinates;
}

Pet.prototype.walking = function(targetPosition) 
{
	//Walk X
	if (targetPosition.x > this.pet.position.x)
	{
		this.pet.position.x += 0.1;
	}
	if (targetPosition.x < this.pet.position.x)
	{
		this.pet.position.x -= 0.1;
	}

	//Walk Y
	if (targetPosition.y > this.pet.position.y)
	{
		this.pet.position.y += 0.1;
	}
	if (targetPosition.y < this.pet.position.y)
	{
		this.pet.position.y -= 0.1;
	}

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

