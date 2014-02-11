//***************************************************************************\\
//''''''''''''''''''''''''''''''''Pet Moods''''''''''''''''''''''''''''''''''\\
//***************************************************************************\\


//Basic Pet Mind:
Pet.prototype.moodsAdjusters = function()
{
	if (petNeeds.sleepLevel < 1 && petNeeds.sleepLevel > 0) 
	{
		petsCurrentMood.y -= 1;
		petNeeds.sleepLevel = 0;
		pet.moods();
		console.log (petsCurrentMood.y + " petsCurrentMood.y " );
	} else {
		petNeeds.sleepLevel *= petNeeds.sleepAdjuster;
	};

	//If just woken up -> bad mood
	//Altering moods dependant on the day and
};

Pet.prototype.moodsReading = function()
{
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

	if (petMoodsBool.surprised)
	{
		petsCurrentMood.y += petMoodAdjusters[1];
	}
	if (petMoodsBool.disapointed)
	{
		petsCurrentMood.x += petMoodAdjusters[0];
		petsCurrentMood.y += petMoodAdjusters[1];
	}

	if (petNeeds.sleepLevel < 10)
	{
		//Go sleep! 
		petsCurrentAction = 'sleep';
	}
	else if (petNeeds.hungerLevel < 30)
	{
		//If pet knows of a food place
		//Pettarget location = food location

		//If not:
		petsCurrentAction = 'explore';
	};

	if (petMoodsBool.scared  || petMoodsBool.depressed)
	{
		if (petMoodsBool.scared)
		{
			petActionsBool.threaten      = true;
            petActionsBool.push      	 = true;
            petActionsBool.runAway       = true;
		}
		else if (petMoodsBool.depressed)
		{
		    petActionsBool.sleep         = true;
		    petActionsBool.washSelf      = true;
		    petActionsBool.threaten      = true;
		    petActionsBool.eat           = true;
			//Will have to increase mood in some way.....
		};
	}
	else if (petMoodsBool.sosial || petMoodsBool.relaxed || petMoodsBool.playfull)
	{
		if (petMoodsBool.sosial)
		{
            petActionsBool.talkTo        = true;
            petActionsBool.washOther     = true;
			
			if (petMoodsBool.playfull)
			{
	            petActionsBool.fight         = true;
	            petActionsBool.runAway       = true;
	            petActionsBool.threaten      = true;
	            petActionsBool.grabb         = true;
	            petActionsBool.push          = true;
	            petActionsBool.jumpOnToppOff = true;
			}
		}
		else if (petMoodsBool.relaxed)
		{
            petActionsBool.sleep         = true;
            petActionsBool.washSelf      = true;
            petActionsBool.talkTo        = true;
            petActionsBool.washOther     = true;
		};
	}
	else if (petMoodsBool.agressive || petMoodsBool.uncomfertable)
	{
		if (petMoodsBool.uncomfertable)
		{
			petActionsBool.eat           = true;
            petActionsBool.runAway       = true;
            petActionsBool.threaten      = true;
            petActionsBool.talkTo        = true;
            petActionsBool.exlore        = true;
 
			if (petMoodsBool.agressive)
			{
	            petActionsBool.fight         = true;
	            petActionsBool.threaten      = true;
	            petActionsBool.grabb         = true;
	            petActionsBool.push          = true;
	            petActionsBool.jumpOnToppOff = true;
			}			
		}
	}
	else if (petMoodsBool.curious || petMoodsBool.sad)
	{
		if (petMoodsBool.curious)
		{
			//petActionsBool.eat           = true;
            //petActionsBool.sleep         = true;
            petActionsBool.fight         = true;
            petActionsBool.threaten      = true;
            petActionsBool.talkTo        = true;
            petActionsBool.washOther     = true;
            petActionsBool.grabb         = true;
            petActionsBool.push          = true;
            petActionsBool.jumpOnToppOff = true;
		}
		else if (petMoodsBool.sad)
		{
			petActionsBool.eat           = true;
            petActionsBool.sleep         = true;
            petActionsBool.washSelf      = true;
            petActionsBool.threaten      = true;
            petActionsBool.talkTo        = true;
            petActionsBool.washOther     = true;
		};
	};
};


//Mood chart. The moods are based on a X and Y system. If the pet iagressive it is also in a bad mood. 
//What the pet wants to is dependant on its mood
Pet.prototype.moods = function()
{
	//Setting the moods:
	//First Check Bad
	if (petsCurrentMood.x < petMoods.agressive[0])
	{
		if(petsCurrentMood.y > petMoods.agressive[1])
		{
			petMoodsBool.agressive  = true;
			console.log (petMoodsBool.agressive + "petMoodsBool.agressive")
		}
	};
	if (petsCurrentMood.x < petMoods.scared[0])
	{
		if(petsCurrentMood.y > petMoods.scared[1])
		{
			petMoodsBool.scared  = true;
			console.log (petMoodsBool.scared + "petMoodsBool.scared")
		}
	};
	if (petsCurrentMood.x < petMoods.uncomfertable[0])
	{
		if(petsCurrentMood.y > petMoods.uncomfertable[1])
		{
			petMoodsBool.uncomfertable  = true;
			console.log (petMoodsBool.uncomfertable + "petMoodsBool.uncomfertable")
		}
	};
	//SeconCheck Bad
	if (petsCurrentMood.x < petMoods.sad[0])
	{
		if(petsCurrentMood.y < petMoods.sad[1])
		{
			petMoodsBool.sad  = true;
			console.log (petMoodsBool.sad + "petMoodsBool.sad")
		}
	};
	if (petsCurrentMood.x < petMoods.depressed[0])
	{
		if(petsCurrentMood.y < petMoods.depressed[1])
		{
			petMoodsBool.depressed  = true;
			console.log (petMoodsBool.depressed + "petMoodsBool.depressed")
		}
	};
	//Thirs Check Good
	if (petsCurrentMood.x > petMoods.curious[0])
	{
		if(petsCurrentMood.y > petMoods.curious[1])
		{
			petMoodsBool.curious  = true;
			console.log (petMoodsBool.curious + "petMoodsBool.curious")
		}
	};
	if (petsCurrentMood.x > petMoods.playfull[0])
	{
		if(petsCurrentMood.y > petMoods.playfull[1])
		{
			petMoodsBool.playfull  = true;
			console.log (petMoodsBool.playfull + "petMoodsBool.playfull")
		}
	};
	if (petsCurrentMood.x > petMoods.sosial[0])
	{
		if(petsCurrentMood.y > petMoods.sosial[1])
		{
			petMoodsBool.sosial  = true;
			console.log (petMoodsBool.sosial + "petMoodsBool.sosial")
		}
	};
	//Final good check
	if (petsCurrentMood.x > petMoods.relaxed[0])
	{
		if(petsCurrentMood.y < petMoods.relaxed[1])
		{
			petMoodsBool.relaxed  = true;
			console.log (petMoodsBool.relaxed + "petMoodsBool.relaxed")
		}
	};
};

//***************************************************************************\\
//''''''''''''''''''''''''''''''''Pet Globals''''''''''''''''''''''''''''''''\\
//***************************************************************************\\

//The position the pet is currently walking towards
var petTargetPos = new THREE.Vector3(0,0,0);

//A list of all the items the pet has encounterd before, and how many times it has encountered it. 
var petItemsKnown = new Array();
var petEncounterCounter = new Array();

//The pets mood is a vector2 on a mood scale.
var petsCurrentMood = new THREE.Vector2(5,0);
var petsCurrentAction = 'explore';

// If the pet reacts to something unexpected, the pet will addjust its mood
var petMoodAdjusters =
{
    "disapointed"       : [-2,-2],
    "surprised"         : [0,+7]
};

//Pet needs - needs that will decrease as time passes
var petNeeds =
{
    "hungerLevel"      : 100,
    "foodDigesting"    : 0,
    "sleepLevel"       : 100,
    "hungerAdjuster"   : 0.99,
    "sleepAdjuster"    : 0.99
};

//Depending on where the pet is on the XY mood scale, it will be in different moods. 
var petMoods =
{
    "agressive"         : [-7,5],
    "scared"            : [-3,5],
    "uncomfertable"     : [-3,-2],
    "curious"           : [-3,-2],
    "playfull"          : [0,2],
    "sosial"            : [-8,-2],
    "relaxed"           : [0,0],
    "sad"               : [0,0],
    "depressed"         : [-3,-2]
};

var petMoodsBool =
{
    "agressive"         : false,
    "scared"            : false,
    "uncomfertable"     : false,
    "curious"           : false,
    "playfull"          : false,
    "relaxed"           : false,
    "sad"               : false,
    "depressed"         : false,
    "surprised"         : false,
    "disapointed"       : false
};

//Depending on the pets different moods, it will have different actions it wants to do.
var petActions =
{
    "eat"            : 'eat',
    "sleep"          : 'sleep',
    "washSelf"       : 'washSelf',
    "fight"          : 'fight',
    "runAway"        : 'run',
    "threaten"       : 'threaten',
    "talkTo"         : 'talkTo',
    "washOther"      : 'washOther',
    "grabb"          : 'grabb',
    "push"           : 'push',
    "exlore"         : 'exlore',
    "investigating"  : 'investigating',
    "jumpOnToppOff"  : 'jumpOn'
};

var petActionsBool =
{
    "eat"            : false,
    "sleep"          : false,
    "washSelf"       : false,
    "fight"          : false,
    "runAway"        : false,
    "threaten"       : false,
    "talkTo"         : false,
    "washOther"      : false,
    "grabb"          : false,
    "push"           : false,
    "exlore"         : false,
    "investigating"  : false,
    "jumpOnToppOff"  : false
};