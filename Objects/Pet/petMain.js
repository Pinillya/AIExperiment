//Illy Binfield, 2014, pet.js
//Pet class. The pet class will be initiated as the pet is created.
//the pet class holds all the functiuons used in conection with the pet.
//var newPetMood;
function Pet ()
{
    this.position  = new THREE.Vector3(0,0,0);
    this.texture   = 'Grapic/Pet/pet.png';
    this.nameId    = 'pet';
    this.sizeX     = 100;
    this.sizeY     = 100;
    this.smellRad  = 90;
    this.soundRad  = 0; //Adjustable
    this.isStatic  = true;  //Will be false
    this.hasAni    = false; //Will be true

    petItemsKnown[0] = "0";
	
    if (this.texture != null)
    {
       //Texture:
        var petMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(this.texture), transparent: true});

        pet = new THREE.Mesh(
            new THREE.PlaneGeometry(
            20,
            20),
            petMaterial);

        scene.add(pet);
        pet.position = this.position;
    }

    this.petMoodPersonality = 
    {
    	useOfEnergy		: 0.5,
    	digestion		: 2,
    	enegry			: 0.9,
    	anger			: 0.9,
    	moodSwings		: 1
    };

    var newPetMoods = new Moody(this.petMoodPersonality);
    var newPetMood = new Mood(this.petMoodPersonality, petsCurrentMood);
}

//***************************************************************************\\
//'''''''''''''''''''''''''''''''Pet Encounter'''''''''''''''''''''''''''''''\\
//***************************************************************************\\

Pet.prototype.smellHearObject = function(itemNumber)
{
	
	if(itemNumber === undefined)
	{
		return;
	}

	//petObjectInput =  smellInRange(0), soundInRange(1), touching(2), nameID(3)
	var petObjectInput = objects[itemNumber].encounter(pet.position, itemNumber);

	//Touching
	if (petObjectInput[2])
	{
		//console.log (petObjectInput[0]);
		//console.log (petObjectInput[3] + " 2");
	}
	//Smells
	else if (petObjectInput[0] == 2 || petObjectInput[0] == 1)
	{
		pet.checkInterest(itemNumber, petObjectInput[3], petObjectInput[0]+1);
	}
	//Hears
	else if (petObjectInput[1] == 2 || petObjectInput[1] == 1)
	{
		pet.checkInterest(itemNumber, petObjectInput[3], petObjectInput[1]+1);
	};
};

Pet.prototype.checkInterest = function(itemNumber, itemName, itemDistance)
{  

	var knowsItem = false;
	//If the item is named "0" it means that the pet only hears the item.
	if (itemName == "0")
	{
		return;
		//Explore the obbject
		//temp:
		//petItemsKnown.push(itemName);
	}
	else
	{
		for (var i = petItemsKnown.length - 1; i >= 0; i--) 
		{
			if (petItemsKnown[i] == itemName)
			{
				knowsItem = true;
				//console.log ("knows item " + itemName)
				return;
			} 
		};
		if (!knowsItem)
		{/*
			if (petMoodsBool.curious)
			{
				//console.log ("doesnt know item - is curius " + itemName)
				petItemsKnown.push(itemName);
				//Astablish a profile for the item
				return;
			}
			else //if (search for items it might want to deal with)
			{
				//console.log ("doesnt know item - is not curius")
				return;
				//Look for items in items known. if the pets wants to do a spesific thing.
			}*/
		}
		else
		{
			//If the items is known
			//Check if this is the item the pet is currently interested in
		}
	}
};

Pet.prototype.alteringFavoredActivity = function(itemNumber, itemName, itemDistance)
{  
	if (petNeeds.hungerLevel > petNeeds.sleepLevel)
	{
		//if item is a eat item, use it, if not, go look for something else
	}
	else 
	{
		//if item is a sleep item, use it, if not, go look for something else
	}
};


/*
    petActionsBool.eat           = false;
    petActionsBool.sleep         = false;
    petActionsBool.washSelf      = false;
    petActionsBool.fight         = false;
    petActionsBool.runAway       = false;
    petActionsBool.threaten      = false;
    petActionsBool.talkTo        = false;
    petActionsBool.washOther     = false;
    petActionsBool.grabb         = false;
    petActionsBool.push          = false;
    petActionsBool.exlore        = false;
    petActionsBool.investigating = false;
    petActionsBool.jumpOnToppOff = false;
*/





