
//-------Globals-------
var lastTime = 0;
var deltaTime = 0;
function draw () 
{
	//deltaTime will be used to adjust updates
	var timeNow = new Date().getTime();
	if (lastTime != 0) {
      deltaTime = timeNow - lastTime;
    }
    lastTime = timeNow;
	
	movePet();
	petMoodControl();

	renderer.render( scene, camera );
	requestAnimationFrame(draw);
}

var frameCounter = 0;
function movePet () 
{	
	//framecounter is used to regulate how often the pet checks for objects
	//So it wont do it too often.
	if (frameCounter > 100)
	{
		frameCounter = 0;
	}
	else 
	{
		frameCounter++;
	}

	//Smells and listen for objects around it - see description in the Pet class under "checkObjects"
	if (frameCounter == 1 || frameCounter == 50) 
	{
		for (var i = objects.length - 1; i >= 0; i--) 
		{
			//console.log(i);
			pet.smellHearObject(i);
		};
	};

	pet.moving();
}

function petMoodControl () 
{
	//moodsReading();
}