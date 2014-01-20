
//-------Globals-------
var lastTime = 0;
var deltaTime = 0;

function draw () 
{
	//deltaTime will be used to adjust animations. 
	var timeNow = new Date().getTime();
	if (lastTime != 0) {
      deltaTime = timeNow - lastTime;
    }
    lastTime = timeNow;

	playerInput();
	movePets();

	renderer.render( scene, camera );
	requestAnimationFrame(draw);
}

var frameCounter = 0;
function movePets () 
{	

	if (frameCounter > 100)
	{
		frameCounter = 0;
	}
	else {
		frameCounter++;
	}

//Smells and listen for objects around it. 
	if (frameCounter == 1 || frameCounter == 50) 
	{
		for (var i = pets.length-1; i >= 0; i--) 
		{
			for (var j = objects.length - 1; j >= 0; j--) {
				pets[i].checkObjects(i, j);
			};
		};
	};

	for (var i = pets.length - 1; i >= 0; i--) 
	{
		pets[i].moving(frameCounter);
	};
}