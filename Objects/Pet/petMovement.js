//***************************************************************************\\
//'''''''''''''''''''''''''''''''Pet Movement''''''''''''''''''''''''''''''''\\
//***************************************************************************\\

//Function to make the pet move with a target pos,
//Finding random target points the pet can walk to if bored
//Generate hovering on the pet if the pet is flying.

Pet.prototype.moving = function(frameCounter)
{
	if (petTargetPos != null){
	    //The pet finds random positions to walk to if it wants to explore
		if (frameCounter == 50 && petsCurrentAction  == 'explore')
		{
			//console.log(this.pet.position.x + " is exploring! " + this.pet.position.z);
			var ranNumX = 100, ranNumZ = 0, ranNumY = 0;

			ranNumX = -50 + THREE.Math.random16() * 100;
			ranNumZ = -50 + THREE.Math.random16() * 100;

			petTargetPos = new THREE.Vector3(ranNumX,ranNumY,ranNumZ);
		};

		//Moving the pet by use of the "is the pet.x lower then pos.x?" system
		//Walk X
		if (petTargetPos.x > pet.position.x)
		{
			pet.position.x += 0.1;
		}
		else if (petTargetPos.x < pet.position.x)
		{
			pet.position.x -= 0.1;
		};

		//Walk Z
		if (petTargetPos.z > pet.position.z)
		{
			pet.position.z += 0.1;
		}
		else if (petTargetPos.z < pet.position.z)
		{
			pet.position.z -= 0.1;
		};
    }
};