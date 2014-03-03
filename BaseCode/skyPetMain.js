
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

	camera.position.z = 300;
	camera.position.x = 120;
	camera.position.y = 120;
	camera.rotation.x = -45 * (Math.PI/180);  //radians * (180/pi)

	makeAMesh();
	makeLight();
	makeWorldGrid();
	startTime()
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
var ObjPos = [];
var petKnownObjPos = [];
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
    //Pet
	pet = new Pet();

	//Objects
	ObjPos[0] = new THREE.Vector3(30,0,50);
	objects[0] = new Food(ObjPos[0]);
	ObjPos[1] = new THREE.Vector3(70,0,30);
	objects[1] = new Toy(ObjPos[1]);
	ObjPos[2] = new THREE.Vector3(200,0,50);
	objects[2] = new Toy(ObjPos[2]);
}

var worldGrid = [[]];
var worldX;
var worldZ;
var plane = [];
function makeWorldGrid () 
{ 
	//var plane = [];	
	var worldSizeX = 800;
	var worldSizeZ = 800;
	worldX = Math.floor(worldSizeX/50); //800/50 = 16
	worldZ = Math.floor(worldSizeZ/50); //800/50 = 16

	var
	i,
	j;

	var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );

	for (i = 0; i < worldX; i++) 
	{
		worldGrid[i] = [];
		for (j = 0; j < worldZ; j++) 
		{
			worldGrid[i][j] = 0;
			var gridPos = new THREE.Vector3(i*worldX,-5,j*worldZ);

			//Check to see if the item is within range of the nodes in the grid. 
			//We will give the peth a wide walking space.
			for (var k = 0, l = ObjPos.length; k < l; k++) 
			{
				//Is there actually a object there? 
				if ((gridPos.x < ObjPos[k].x +worldX) && (gridPos.x > ObjPos[k].x -worldX))
				{
					if ((gridPos.z < ObjPos[k].z +worldZ) && (gridPos.z > ObjPos[k].z -worldZ))
					{
						var tempPosTester = false;
						//Does the pet know about this object?
						for (var m = 0; m < petKnownObjPos.length; m++) 
						{
							if(ObjPos[k] == petKnownObjPos[m])
							{
								worldGrid[i][j] = 2;
								tempPosTester = true;
							}
							else
							{

							}
						};

						if (!tempPosTester)
						{
							worldGrid[i][j] = 1;
						}
					}
				}
			};

  //Visual Test Grid: Need to turn on material and if you want to test with effect when a path is made,
  //make plane[] global and activate the test loop in "PetMovement"

			if (worldGrid[i][j] == 0)
			{
				plane[j + (i*worldX)] = new THREE.Mesh(
			        new THREE.PlaneGeometry(
			        0.5,
			        0.5),
			        material);
			    scene.add(plane[j + (i*worldX)]);
			    plane[j + (i*worldX)].position = gridPos;
			}

			if (worldGrid[i][j] == 1)
			{
				plane[j + (i*worldX)] = new THREE.Mesh(
			        new THREE.PlaneGeometry(
			        2,
			        2),
			        material);
			    scene.add(plane[j + (i*worldX)]);
			    plane[j + (i*worldX)].position = gridPos;
			}

			if (worldGrid[i][j] == 2)
			{
				plane[j + (i*worldX)] = new THREE.Mesh(
			        new THREE.PlaneGeometry(
			        0,
			        0),
			        material);
			    scene.add(plane[j + (i*worldX)]);
			    plane[j + (i*worldX)].position = gridPos;
			}


		}		
	}
}

seconds = 0;
minutes = 0;
hours = 0;
days = 0;
function startTime () 
{
	document.getElementById('myCounter').innerHTML = days + ":" + hours + ":" +  minutes + ":" + seconds;

	if (seconds >=60)
	{
		seconds = 0;
		minutes++;
	}
	if (minutes >=60)
	{
		minutes = 0;
		hours++;
	}
	if (hours >=24)
	{
		hours = 0;
		days++;
	}

	seconds++;
	setTimeout(startTime,1000);
}
