//--------Global variables-----------

function Pet (petTexture, xCoordinates, yCoordinates) 
{
	//var pet;
	var petMaterial;

	///Make the man
	var petHight = 20, petWith = 20, petQuality = 10, petYPos = petHight/2;
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

var hovering = 100;
var hoverUp = true;
Pet.prototype.moving = function(targetPosition, frameTimer) 
{
	var hoverDistance = 1;
	var hoverSpeed = 1.1;

	//HoveringPet
	if (hovering > hoverDistance)
	{
		hoverSpeed = Math.sin(hovering);
		/*if (hoverUp)
		{	

			//console.log(hoverSpeed + " up");
			//hovering = hovering / hoverSpeed;
			this.pet.position.y += hoverSpeed/15;

		}
		else
		{
			console.log(hoverSpeed + " down");
			//hovering = hovering / hoverSpeed;
			this.pet.position.y -= hoverSpeed/15;
		}*/
		this.pet.position.y += hoverSpeed/20;
		hovering -= 0.1;
	}
	else 
	{
	/*	if (hoverUp)
		{
			//console.log(hovering + "false");
			//Denne funker nå
			hoverUp = false;	
		}

		else if (!hoverUp)
		{
			hoverUp = true;
			//console.log(hovering + "true");
			//Denne funker ikke nå
			
		}	*/
		hovering = 100;
	}

	console.log(hovering);

	
/*
	//HoveringPet
	if (frameTimer < 50)
	{
		this.pet.position.y += 0.05;
	}
	else
	{
		this.pet.position.y -= 0.05;
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
	}*/
};

