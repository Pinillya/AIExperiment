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

//Basic Pet Mind:
Pet.prototype.actionsSettings = function(eat, sleep, washSelf, fight, runAway, threaten,
										talkTo, washOther, grabb, push, explore, jumpOnToppOff)
{
	// console.log ("****New Mood prio list***")
    petActions.eat            += eat,
    petActions.sleep          += sleep,
    petActions.washSelf       += washSelf,
    petActions.fight          += fight,
    petActions.runAway        += runAway,
    petActions.threaten       += threaten,
    petActions.talkTo         += talkTo,
    petActions.washOther      += washOther,
    petActions.grabb          += grabb,
    petActions.push           += push,
    petActions.explore        += explore,
    petActions.jumpOnToppOff  += jumpOnToppOff

    //Creating an array to help sort the values. 
	var tempActionReuseNumber = [
	    petActions.eat,
	    petActions.sleep,
	    petActions.washSelf,
	    petActions.fight,
	    petActions.runAway,
	    petActions.threaten,
	    petActions.talkTo,
	    petActions.washOther,
	    petActions.grabb,
	    petActions.push,
	    petActions.explore,
	    petActions.jumpOnToppOff
	];
	var tempActionKeepNumber = [];

 //    //Creating an array to help sort the values. 
	// console.log(
	// 	petActions.eat + " petActions.eat \n"+
	//     petActions.sleep +  " petActions.sleep \n"+
	//     petActions.washSelf + " petActions.washSelf \n"+
	//     petActions.fight + " petActions.fight \n"+
	//     petActions.runAway + " petActions.runAway \n"+
	//     petActions.threaten + " petActions.threaten \n"+
	//     petActions.talkTo + " petActions.talkTo \n"+
	//     petActions.washOther + " petActions.washOther \n"+
	//     petActions.grabb + " petActions.grabb \n"+
	//     petActions.push + " petActions.push \n"+
	//     petActions.explore + " petActions.explore \n"+
	//     petActions.jumpOnToppOff + "petActions.jumpOnToppOff \n"
	// );

    pet.petMoodSorter(tempActionReuseNumber, tempActionKeepNumber, tempActionReuseNumber.length); 
};

//Sorting function where the result will be the prio list of the animal.
Pet.prototype.petMoodSorter = function(tempActionReuseNumber, tempActionKeepNumber, originalArrayLength)
{	
	//We pull out the first number in the array.
	tempfirstNumInArrHolder = tempActionReuseNumber.shift();
	for (var i = 0; i <= tempActionReuseNumber.length -1; i++) 
	{
		//We check the pulled out number against all the other numbers in the array.
		if (tempActionReuseNumber[i] < tempfirstNumInArrHolder)
		{
			//If another number is lower, we will swap places between the saved number and the low
			//number. Then continue in the array to check if another number is lower
			var numberHolder = tempActionReuseNumber[i];
			tempActionReuseNumber.splice(i, 1, tempfirstNumInArrHolder);
			tempfirstNumInArrHolder = numberHolder;
		}
	};

	//This part is purly there to make sure the outcome is correct.
	var checking = true;
	for (var i = 0; i <= tempActionReuseNumber.length -1; i++) 
	{ 
		if (tempActionReuseNumber[i] < tempfirstNumInArrHolder)
		{
			checking = false;
		}
	};
	//As the check turns true, we give the value to the final array.
	if (checking)
	{
		tempActionKeepNumber.push(tempfirstNumInArrHolder);
	}
	//Done checking

	//If the array hasent finished sorting yet, we will start the process over again.
	if (tempActionKeepNumber.length < 12)
	{
		pet.petMoodSorter(tempActionReuseNumber, tempActionKeepNumber, originalArrayLength);
	}
	else
	{
		pet.moodsPrioAssigning(tempActionKeepNumber)
	}
}
Pet.prototype.moodsPrioAssigning = function(tempActionKeepNumber)
{
	var moodCompare = [
	    petActions.eat,
	    petActions.sleep,
	    petActions.washSelf,
	    petActions.fight,
	    petActions.runAway,
	    petActions.threaten,
	    petActions.talkTo,
	    petActions.washOther,
	    petActions.grabb,
	    petActions.push,
	    petActions.explore,
	    petActions.jumpOnToppOff
	];

	// console.log("******");
	// for (var i = tempActionKeepNumber.length - 1; i >= 0; i--) {
	// 	console.log(tempActionKeepNumber[i]);
	// };

	for (var i = tempActionKeepNumber.length - 1; i >= 0; i--)
	{
		for (var j = moodCompare.length - 1; j >= 0; j--) 
		{
			if (tempActionKeepNumber[i] == moodCompare[j])
			{
				petActionPrioList[i] = petActionsNames[j];
				moodCompare[j] = -888;
				j = 0;
			}
		};
	};

	console.log("\n**moodCompare**");
	for (var i = 0; i < petActionPrioList.length; i++) 
	{
		console.log(petActionPrioList[i]);
	};
	console.log("****\n");
}

Pet.prototype.moodsReading = function()
{
	//pet.actionsSettings(
	//	eat, sleep, washSelf, fight, 
	//	runAway, threaten, talkTo, 
	//	washOther, grabb, push, 
	//	explore, jumpOnToppOff);
	
	if (petMoodsBool.surprised)
	{
		petsCurrentMood.y += petMoodAdjusters[1];
	}
	if (petMoodsBool.disapointed)
	{
		petsCurrentMood.x += petMoodAdjusters[0];
		petsCurrentMood.y += petMoodAdjusters[1];
	}

	//Level30
	if (petNeeds.sleepLevel < 10)
	{
		//Go sleep! 
		//petsCurrentAction = 'sleep';
	}
	else if (petNeeds.hungerLevel < 30)
	{
		//If pet knows of a food place
		//Pettarget location = food location

		//If not:
		//petsCurrentAction = 'explore';
	};

	//Level25
	if (petMoodsBool.scared)
	{

		pet.actionsSettings(
			-12, -12, -12, +12, 
			+25, +12, -12, 
			-12, +5, +12, 
			-12, 0);
	}
	if (petMoodsBool.depressed)
	{
		pet.actionsSettings(
			+12, +12, 0, -12, 
			-12, +12, -12, 
			-12, -12, -12, 
			-12, -12);
		//Will have to increase mood in some way.....
	};

	//Level20
	if (petMoodsBool.sosial)
	{
		pet.actionsSettings(
			+10, 0, +10, 0, 
			-10, 0, +20, 
			+20, +10, 0, 
			+10, 0);
	}	
	if (petMoodsBool.playfull)
	{

		pet.actionsSettings(
			-10, -10, -10, +10, 
			+10, +10, +10, 
			0, +10, +10, 
			+10, +10);
	}
	
	if (petMoodsBool.relaxed)
	{

		pet.actionsSettings(
			+10, +20, +20, -20, 
			-10, -10, +10, 
			+10, -10, -10, 
			-10, -10);
	};

	//Level15
	if (petMoodsBool.uncomfertable)
	{

		pet.actionsSettings(
			+7, -7, 0, 0, 
			+7, +7, +7, 
			-7, 0, 0, 
			0, 0);
	}
	if (petMoodsBool.agressive)
	{
		pet.actionsSettings(
			-7, -7, -7, +15, 
			-7, +7, -15, 
			-15, +7, +7, 
			-7, +7);
	}			
	
	//level10
	if (petMoodsBool.curious)
	{
		pet.actionsSettings(
			+5, -5, +5, +5, 
			-10, +5, +5, 
			+5, +5, +5, 
			+10, +5);
	}
	if (petMoodsBool.sad)
	{
		pet.actionsSettings(
			+5, +5, +5, -5, 
			-5, +5, +5, 
			+5, -5, -5, 
			-5, -5);
	};
};


//Mood chart. The moods are based on a X and Y system. If the pet iagressive it is also in a bad mood. 
//What the pet wants to is dependant on its mood
Pet.prototype.moods = function()
{
	petActions =
	{
	    "eat"            : 50,
	    "sleep"          : 50,
	    "washSelf"       : 50,
	    "fight"          : 50,
	    "runAway"        : 50,
	    "threaten"       : 50,
	    "talkTo"         : 50,
	    "washOther"      : 50,
	    "grabb"          : 50,
	    "push"           : 50,
	    "explore"        : 50,
	    "jumpOnToppOff"  : 50
	};
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

	pet.moodsReading();
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
var petsCurrentMood = new THREE.Vector2(0,0);
var petActionPrioList = new Array();

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
    "sosial"            : [-2,-8],
    "relaxed"           : [-1,0],
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
//And the % the pet is interested in doing this.
var petActions =
{
    "eat"            : 50,
    "sleep"          : 50,
    "washSelf"       : 50,
    "fight"          : 50,
    "runAway"        : 50,
    "threaten"       : 50,
    "talkTo"         : 50,
    "washOther"      : 50,
    "grabb"          : 50,
    "push"           : 50,
    "explore"        : 50,
    "jumpOnToppOff"  : 50
};


var petActionsNames = [
"eat" ,"sleep","washSelf","fight","runAway",
"threaten","talkTo","washOther","grabb",
"push","explore","jumpOnToppOff" 
];

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
    "jumpOnToppOff"  : false
};