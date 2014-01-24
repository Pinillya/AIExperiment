
//--------Global variables-----------
function setup () 
{
	createScene();
	draw();
}

//Three.js basic setup
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

	makeAMesh();
	makeLight();
}

//Three.js basic setup
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


pets = []; //pets will be used to create an instance of the Pet class. 
objects = []; //objects will hold all the objects in the scene by 
//using the relevant class witch will inherit from the Object class.  
function makeAMesh () 
{
	var placingObj;

	//Objects work by the following variables. 
	//objects[X] = new Object(
	//position, texture, idNumber, 
	//sizeX, sizeY, smellRadius, soundRadius,
	//isStatic, hasSmell, hasSound, hasAnimation, initialValue);

	var parametersObject =
	{
		"position" : new THREE.Vector3(0,0,-10),
		"texture"  : 'Grapic/Ouside/bg.png',
		"nameId"   : 'bg01',
		"sizeX"    : 200,
		"sizeY"    : 150,
		"smellRad" : 0,
		"soundRad" : 0,
		"isStatic" : true,
		"hasSmell" : false,
		"hasSound" : false,
		"hasAni"   : false,
		"initValue": 0
	};
/*
	var parametersObject =
	{
		//"position" : new THREE.Vector3(0,0,-10);
		//"texture"  : 'Grapic/Ouside/bg.png';
		//"nameId"   : 'bg01';
		2    : 200
	};*/

	//Background
	placingObj = new THREE.Vector3(0,0,-10);
	objects[0] = new Object(parametersObject);

	//Making pets
	pets[0] = new Pet('Grapic/Pet/pet.png', 0, 0, 0);
	pets[1] = new Pet('Grapic/Pet/pet.png', -50, 0, -20);

	var parametersObject =
	{
		"position" : new THREE.Vector3(19,0,10),
		"texture"  : 'Grapic/Inside/food.png',
		"nameId"   : 'food01',
		"sizeX"    : 10,
		"sizeY"    : 10,
		"smellRad" : 20,
		"soundRad" : 0,
		"isStatic" : true,
		"hasSmell" : true,
		"hasSound" : false,
		"hasAni"   : false,
		"initValue": 60
	};

	//Making food object
	//placingObj = new THREE.Vector3(19,0,10);
	objects[1] = new Object(parametersObject);
/*
	var o = new Object( data );

	this.idNumber = data.id;
	this.position = data.position;
*/
/*
	//Background
	placingObj = new THREE.Vector3(0,0,-10);
	objects[0] = new Object(
	placingObj, 'Grapic/Ouside/bg.png', 'bg01', 
	200, 150, 0, 0,
	true, false, false, false, 0);

	//Making pets
	pets[0] = new Pet('Grapic/Pet/pet.png', 0, 0, 0);
	pets[1] = new Pet('Grapic/Pet/pet.png', -50, 0, -20);

	//Making food object
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

	placingObj = new THREE.Vector3(-19,0,-20);
	objects[3] = new Object(
	placingObj, 'Grapic/Inside/food.png', 'food01', 
	10, 10, 10, 0,
	true, true, false, false, 60);
*/
}
