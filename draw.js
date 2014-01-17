
//-------Globals-------
var lastTime = 0;
var deltaTime = 0;
var frameTimer = 0;
var targetPos = [];
var exploring = true;

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

function movePets () 
{	
//Frame counter makes sure the Pet does not check everything constantly.
    var ranNumX = 100, ranNumZ = 0, ranNumY = 0;
	if(frameTimer < 100)
	{
		frameTimer++;
	} else {
		if (exploring)
		{
			for (var i = pets.length-1; i >= 0; i--) 
			{
				ranNumX = THREE.Math.random16() * 50;
				ranNumY = THREE.Math.random16() * 50;
				ranNumZ = THREE.Math.random16() * 50;

				targetPos[i] = new THREE.Vector3(ranNumX,ranNumY,ranNumZ);
				frameTimer = 0;
			};
		};
	};

	if (frameTimer == 50 || frameTimer == 0) 
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
		pets[i].moving(targetPos[i]);
	};
}