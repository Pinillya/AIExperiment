function Mood (personality, petCurrentMood) 
{ 
	var moodArray = new Array();
	var needArray = new Array();
	var actionArray = new Array();
	var actionResult = new Array();

	var i, j;
//*****************************Mood into action**********************************
	function resetActions () 
	{
		//Resetting the actions
		var basic = 50;
		for (i = 0; i < actionLength; i++) 
		{
			actionArray[i].boolCheck = false;
			actionArray[i].pValue = basic;
		};

		//actionBool();
		moodToAction();	
	}

	function moodToAction () 
	{
		actionResult = [];
		
		for (i = 0, j = needArray.length; i < j; i++) 
		{
			if(needArray[i].yValue <= 0)
			{
				//Current action HAS to be sleep or eat.
			}
			if(needArray[i].yValue < 5)
			{
				actionResult.push(actionArray[i].named);
			}
		};
		if(actionResult.length <= 0)
		{
			for (i = 0; i < moodLength; i++) 
			{
				if(moodArray[i].boolCheck)
				{
					//Level 1 - Most important
					if (moodArray[i].named == "scared")
					{
						makingMoodList(
							["runAway","threaten","push"],
							["sleep"], moodArray[i].importance);
					}
					if (moodArray[i].named == "depressed")
					{
						makingMoodList(
							[" "],
							["eat" ,"sleep","washSelf","fight","runAway","threaten",
							"talkTo","washOther","grabb","push","explore","jumpOnToppOff" ], moodArray[i].importance);
					}
					//Level2
					if (moodArray[i].named == "sosial")
					{
						makingMoodList(
							["talkTo","washOther"],
							["runAway","threaten"], moodArray[i].importance);
					}
					if (moodArray[i].named == "playfull")
					{
						makingMoodList(
							["fight","runAway","threaten","talkTo","washOther","grabb","push","explore","jumpOnToppOff"],
							["sleep"], moodArray[i].importance);
					}
					if (moodArray[i].named == "relaxed")
					{
						makingMoodList(
							["eat" ,"sleep","washSelf","talkTo","washOther","explore"],
							["fight","runAway","grabb","push","jumpOnToppOff" ], moodArray[i].importance);
					}
					//level3
					if (moodArray[i].named == "uncomfertable")
					{
						makingMoodList(
							["runAway","threaten","push"],
							["fight"], moodArray[i].importance);
					}
					if (moodArray[i].named == "agressive")
					{
						makingMoodList(
							["fight","threaten","grabb","push","jumpOnToppOff" ],
							["eat" ,"sleep","washSelf","runAway"], moodArray[i].importance);
					}
					//Level 4 -lowes Level of importance
					if (moodArray[i].named == "curious")
					{
						makingMoodList(
							["eat","washSelf","fight","runAway","threaten",
							"talkTo","washOther","grabb","push","explore","jumpOnToppOff" ],
							["sleep"], moodArray[i].importance);
					}
					if (moodArray[i].named == "sad")
					{
						makingMoodList(
							["eat" ,"sleep","washSelf"],
							["fight","grabb","push","explore","jumpOnToppOff"], moodArray[i].importance);
					}
				}
			};
		}
	}

	function makingMoodList (plussActions, minusActions, importance) 
	{
		for (i = 0; i < actionLength; i++) 
		{
			for (j = 0; j < plussActions.length; j++) 
			{
				if(actionArray[i].named == plussActions[j])
				{
					actionArray[i].pValue += 5*importance;
				}
			};
		};
	}
//Mood into action ends

//*****************************Making actions**********************************
	actionArray = [
	BaseActions("eat", 			0,  0.5),
	BaseActions("sleep", 		1,  0  ),
	BaseActions("washSelf", 	2,  0.5),
	BaseActions("fight", 		3,  2  ),
	BaseActions("runAway", 		4,  1  ),
	BaseActions("threaten", 	5,  1  ),
	BaseActions("talkTo", 		6,  1  ),
	BaseActions("washOther", 	7,  0.5),
	BaseActions("grabb", 		8,  1  ),
	BaseActions("push", 		9,  1  ),
	BaseActions("explore", 		10, 1  ),
	BaseActions("jumpOnToppOff",11, 1  ),
	BaseActions("sulk",			12, 1  )
	];
	actionLength = actionArray.length;

	function BaseActions (named, indexNum, energyRequirement) 
	{
		var newAction = 
		{
			named 		: named,
			pValue 		: 50, 
			boolCheck 	: false,
			indexNum	: indexNum,
			energyReq	: energyRequirement
		}
		return newAction;	
	}
//MakingActions ends

//*****************************Making mood**********************************
	moodArray = [
		//Bad feelings
		BaseMood("agressive", 		-7,  5, 0, true,  false, 4),
		BaseMood("scared", 			-3,  5, 1, true,  false, 2),
		BaseMood("uncomfertable", 	-3, -2, 2, true,  false, 4),
		BaseMood("sad", 			-2,  0, 4, true,  false, 5),
		BaseMood("depressed", 		-5, -2, 3, false, false, 2),

		//Good feelings
		BaseMood("relaxed", 		-3, -2, 5, false, true, 3),
		BaseMood("curious", 		-3, -2, 6, true,  true, 5),
		BaseMood("sosial", 			-2, -8, 7, true,  true, 3),
		BaseMood("playfull", 		 0,  2, 8, true,  true, 3)
	];
	var moodLength = moodArray.length; //This is a constant we will use a few times.

	function BaseMood (name, x, y, index, goUp, goRight, importance) 
	{
		var newMood = 
		{
			//Basic
			named		: name,
			x			: x,
			y			: y,
			boolCheck	: false,

			//How will we meshure where the mood belongs in the chart.
			goUp		: goUp,
			goRight		: goRight,

			//What array num is it. 
			index		: index,
			importance	: importance,
		}
		return newMood;
	}//Mase mood finished
	
	function actevatingMoods (currentCheck) 
	{
		var yActive = false;
		var xActive = false;

		//Check up
		if (currentCheck.goUp)
		{
			if (petCurrentMood.y > currentCheck.y)
			{
				yActive = true;
			}
		} 
		else
		{
			if (petCurrentMood.y < currentCheck.y)
			{
				yActive = true;
			}
		}
		//check down
		if (currentCheck.goRight)
		{
			if (petCurrentMood.x > currentCheck.x)
			{
				xActive = true;
			}
		} 
		else
		{
			if (petCurrentMood.x < currentCheck.x)
			{
				xActive = true;
			}
		}
		return (xActive && yActive);
	};
//Makingmood ends

//***************************** Needs & moodswings **********************************
	needArray = [
		{named: "hunger", yValue: 50, deathPoint: -9},
		{named: "sleep", yValue: 50, deathPoint: -9},
	];

	var energyHappynes = new THREE.Vector2(100,0);
	var foodInBelly = 40;
	
	moodSwings(personality, petCurrentMood);

	function moodSwings () 
	{
		if(foodInBelly > 0)
		{
			foodInBelly -= personality.digestion;
			needArray[0].yValue += personality.digestion;
		}
		if(actionArray[1].boolCheck)
		{
			needArray[1].yValue += personality.digestion;
		}

		needArray[0].yValue -= personality.useOfEnergy;
		needArray[1].yValue -= personality.useOfEnergy;

		if(energyHappynes.y > -90)
		{
			energyHappynes.y = needArray[0].yValue + needArray[1].yValue;
		}
		if(energyHappynes.x > -90)
		{
			energyHappynes.x -= personality.moodSwings;
		}

		petsCurrentMood.x = (energyHappynes.x/10);
		petsCurrentMood.y = (energyHappynes.y/10);

		document.getElementById('petEnergy').innerHTML = petsCurrentMood.y;
		document.getElementById('petHappyness').innerHTML = petsCurrentMood.x;

		changeMood();
		setTimeout(moodSwings,1000);
	}//moodSwings ends

	function changeMood () 
	{
		var tempMoodHTMLNum = 1;
		for (i=0; i < moodLength; i++) 
		{
			moodArray[i].boolCheck = actevatingMoods(moodArray[i]);
		/*	if (moodArray[i].boolCheck)
			{
				document.getElementById('petMood'+tempMoodHTMLNum).innerHTML = moodArray[i].named;
				tempMoodHTMLNum++;
			}*/
		};
		resetActions();
		tempMoodHTMLNum=1;
		for (i =0, j=actionArray.length; i < j; i++) 
		{
			if(actionArray[i].boolCheck)
			{
				document.getElementById('petAction'+tempMoodHTMLNum).innerHTML = actionArray[i].named;
				tempMoodHTMLNum++;
			}
		};
	}//changeMood ends
//Needs & moodswings ends




}; //Mood Ends