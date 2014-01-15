//--------Global variables-----------
function setup () 
{
	createScene();
	draw();
}

function createScene () 
{
	//Basic
	var WIDTH = 800,
	HEIGHT = 450;

	var VIEW_ANGLE = 50,
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,
	  FAR = 10000;

	renderer = new THREE.WebGLRenderer();

	renderer.setSize(WIDTH, HEIGHT);

	var c = document.getElementById("gameCanvas");
	c.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	scene = new THREE.Scene();
	scene.add(camera);

	camera.position.z = 100;
	camera.position.y = 20;
	//camera.rotation.x = -15 * Math.PI / 180;

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
objects = [];
function makeAMesh () 
{

	pets[0] = new Pet('Grapic/Pet/pet.png', 0, 0);

	for (var i = pets.length-1; i >= 0; i--) 
	{
		targetPos[i] = new THREE.Vector3(10,10,0);
	}

	var newPlanePos = new THREE.Vector3(0,0,-10);
	objects[0] = new Object(newPlanePos, 'Grapic/Ouside/bg.png', 1101, 200, 150);

}
