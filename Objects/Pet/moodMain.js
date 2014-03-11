function Mood (personality, petCurrentMood) 
{ 
	var moodArray = new Array();
	var needArray = new Array();
	var i, j;

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
		/*
		if(actionArray[1].boolCheck)
		{
			needArray[1].yValue += personality.digestion;
		}*/

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
			if (moodArray[i].boolCheck)
			{
				document.getElementById('petMood'+tempMoodHTMLNum).innerHTML = moodArray[i].named;
				tempMoodHTMLNum++;
			}
		};
	}//changeMood ends
//Needs & moodswings ends




}; //Mood Ends