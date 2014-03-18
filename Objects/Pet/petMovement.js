//'''''''''''''''''''''''''''''''Pet Movement''''''''''''''''''''''''''''''''\\
//Function to make the pet move with a target pos,
//Finding random target points the pet can walk to if bored
//Generate hovering on the pet if the pet is flying.
var currentPath = [];
Pet.prototype.moving = function()
{
	//Do we need a new path? 
	var newPath = false;
	// The pets grid position:
	var petGridPos = new THREE.Vector3(Math.floor(pet.position.x / worldX),0, Math.floor(pet.position.z / worldZ));

	if (petTargetPos != null)
	{
	    //The pet finds random positions to walk to if it wants to explore, it will automatickly get a 
	    //new position, if it has gone to the last postion in the path.
	    if (this.actionList[10] != undefined)
	    {
			if (this.actionList[10].prio <= 3 && !newPath && currentPath.length == 0)
			{
	/*
				var ranNumX = 100, ranNumZ = 0, ranNumY = 0;
				ranNumX = Math.floor(THREE.Math.random16() * worldX);
				ranNumZ = Math.floor(THREE.Math.random16() * worldZ);
	*/
				petTargetPos = new THREE.Vector3(3,0,5);
				newPath = true;
			}
		}



		//If a new path is needed, we scrub the last one and make a new one
		//We take out the first part of the path. (The position the pet is already standing on.)
		if(newPath)
		{
			currentPath = [];
			currentPath = FindPath(worldGrid, petGridPos, petTargetPos);
/*
			for (var i = 1; i < currentPath.length; i++) 
			{
				if (currentPath[i][0] != null)
				{
					var gridPos = new THREE.Vector3(currentPath[i][0]*worldX,-5,currentPath[i][1]*worldZ);
					plane[currentPath[i][1] + (currentPath[i][0]*worldX)].position.y = +50;
				}
			}
*/
			newPath = false;
			currentPath.splice(0, 1)[0];
		}

		//If the path is actually there, and we are working with a defined value;
		//First we check to see if the pet is standing on the path node, if so we need to take it out
		//as the pet then has reached its goal. Then we send the pet to the next goal. 
		//If there is any undefined or null value in the path, we will scrubb it and start again. 
		if (currentPath.length != 0)
		{	
			if (currentPath[0].x != undefined && currentPath[0].z != undefined)
			{
				if (petGridPos.x == currentPath[0].x && petGridPos.z == currentPath[0].z)
				{
					if (worldGrid[currentPath[0].x][currentPath[0].z] == 1)
					{
						console.log("Hitting object");
						//Here we have a new object to investigate! 
						currentPath = [];
						petActions.explore = 30;
					}
					else
					{
						currentPath.splice(0, 1)[0];
					}
				}
				else
				{
					pet.walkPet(petGridPos, currentPath[0].x, currentPath[0].z);
				}
			}
			else
			{
				currentPath = [];	
			}
		}
	};
};

Pet.prototype.walkPet = function(petPos, targetPosX, targetPosZ)
{
	movementSpeed = 0.3;
	//Moving the pet by use of the "is the pet.x lower then pos.x?" system
	//Walk X
	if (targetPosX > petPos.x)
	{
		pet.position.x += movementSpeed;
	}
	else if (targetPosX < petPos.x)
	{
		pet.position.x -= movementSpeed;
	};

	//Walk Z
	if (targetPosZ > petPos.z)
	{
		pet.position.z += movementSpeed;
	}
	else if (targetPosZ < petPos.z)
	{
		pet.position.z -= movementSpeed;
	};
};
//Problem: The pet still walks the sortest path to the next node. Might end up coliding with one of the
// objects, but as shortcuts beween objects is not posible, this is less ligkley.