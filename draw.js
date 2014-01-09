
//-------Globals-------
var lastTime = 0;
var deltaTime = 0;
var frameTimer = 0;
var targetPos = [];

function draw () 
{
	//deltaTime will be used to adjust animations. 
	var timeNow = new Date().getTime();
	if (lastTime != 0) {
      deltaTime = timeNow - lastTime;
    }
    lastTime = timeNow;


    var ranNumX = 100, ranNumZ = 0;
   	//Frame counter
	if(frameTimer < 200)
	{
		frameTimer++;
	} else {
		for (var i = pets.length-1; i >= 0; i--) 
		{
			ranNumX = -100 + THREE.Math.random16() * 200;
			ranNumZ = -100 + THREE.Math.random16() * 200;

			targetPos[i] = new THREE.Vector3(ranNumX,0,ranNumZ);
			frameTimer = 0;
		}
	};
	
	keyHandeling();
	movePets();
	renderer.render( scene, camera );
	requestAnimationFrame(draw);
}


function movePets () 
{	
	for (var i = pets.length - 1; i >= 0; i--) 
	{
		pets[i].walking(targetPos[i]);
		//pets[0].walking(targetPos);
	};
}