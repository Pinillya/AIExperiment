function Action () 
{
	var actionArray = new Array();
	var i, j;
	
//*****************************Making actions**********************************
	
	var actionResult = new Array();

	
	actionArray = [
	BaseActions("eat", 			0,  +0.5),
	BaseActions("sleep", 		1,  +1.0),
	BaseActions("washSelf", 	2,  +0.5),
	BaseActions("fight", 		3,  -2  ),
	BaseActions("runAway", 		4,  -1  ),
	BaseActions("threaten", 	5,  -1  ),
	BaseActions("talkTo", 		6,   0  ),
	BaseActions("washOther", 	7,   0  ),
	BaseActions("grabb", 		8,  -1  ),
	BaseActions("push", 		9,  -1  ),
	BaseActions("explore", 		10,  0  ),
	BaseActions("jumpOnToppOff",11, -1  ),
	BaseActions("sulk",			12,  0  )
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
	}//BaseActions ends
//MakingActions ends

}//Action ends