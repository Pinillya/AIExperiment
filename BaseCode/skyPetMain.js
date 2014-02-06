
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

var pet;
var objects = [];
function makeAMesh () 
{
	//Temp Background:
    var bgMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('Grapic/Outside/bg.png'), transparent: true});

    plane = new THREE.Mesh(
        new THREE.PlaneGeometry(
        700,
        400),
        bgMaterial);

    scene.add(plane);
    plane.position = new THREE.Vector3(0,0,-300);

    //Mesh On the scene
	pet = new Pet();
	objects[0] = new Food();
	objects[1] = new Toy();
}
