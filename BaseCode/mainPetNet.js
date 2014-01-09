//--------Global variables-----------
var sceneSize;

function setup () 
{
	createScene();
	draw();
}

function createScene () 
{
	//Basic
	var WIDTH = 640,
	HEIGHT = 360;

	var VIEW_ANGLE = 50,
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,
	  FAR = 10000;

	renderer = new THREE.WebGLRenderer();

	renderer.setSize(WIDTH, HEIGHT);

	var c = document.getElementById("gameCanvas");
	c.appendChild(renderer.domElement);


	//Making the scene
	sceneSize = 100;

	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	scene = new THREE.Scene();
	scene.add(camera);

	camera.position.z = 100;
	camera.position.y = sceneSize + 20;
	camera.rotation.x = -20 * Math.PI / 180;

	makeAMesh();
	makeLight();
}

function makeLight () {
	pointLight = new THREE.SpotLight(0xF8D898);

	pointLight.position.x = -1000;
	pointLight.position.y = 0;
	pointLight.position.z = 1000;
	pointLight.intensity = 2.9;
	pointLight.distance = 10000;

	scene.add(pointLight);
}

pets = [];
function makeAMesh () 
{

	pets[0] = new Pet('Grapic/Pet/player.png', 0, 0);
	pets[1] = new Pet('Grapic/Pet/player.png', 10, 0);

	for (var i = pets.length-1; i >= 0; i--) 
	{
		targetPos[i] = new THREE.Vector3(10,0,0);
	}

}
