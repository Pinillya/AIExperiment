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

function makeLight () 
{
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
var placingObj;
var pet1;
function makeAMesh () 
{

	pets[0] = new Pet('Grapic/Pet/pet.png', 0, 0);

/*
	for (var i = pets.length-1; i >= 0; i--) 
	{
		targetPos[i] = new THREE.Vector3(10,10,0);
	}*/

	placingObj = new THREE.Vector3(0,0,-10);
	objects[0] = new Object(
	placingObj, 'Grapic/Ouside/bg.png', 'bg01', 
	200, 150, 0, 0,
	true, false, false, false, 0);

	placingObj = new THREE.Vector3(19,0,10);
	objects[1] = new Object(
	placingObj, 'Grapic/Inside/food.png', 'food01', 
	10, 10, 10, 0,
	true, true, false, false, 60);

	placingObj = new THREE.Vector3(-19,0,20);
	objects[2] = new Object(
	placingObj, 'Grapic/Inside/food.png', 'food01', 
	10, 10, 10, 0,
	true, true, false, false, 60);

/*
	objects[X] = new Object(
	position, texture, idNumber, 
	sizeX, sizeY, smellRadius, soundRadius,
	isStatic, hasSmell, hasSoud, hasAnimation,initialValue
	);
*/

}
