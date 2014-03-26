//Illy Binfield, 2014, pet.js
//Pet class. The pet class will be initiated as the pet is created.
//the pet class holds all the functiuons used in conection with the pet.
function Pet()
{
	/*
	//***Pet basic attributes***
	//Setting up the unique pets variables:
	this.position = new THREE.Vector3(0, 0, 0);
	this.texture = 'Grapic/Pet/pet.png';
	this.nameId = 'pet';
	this.sizeX = 100;
	this.sizeY = 100;
	this.smellRad = 90;
	this.soundRad = 0; //Adjustable
	this.hasAni = false; //Will be true

	this.visionFront = 400;

	if (this.texture != null)
	{
		var petMaterial = new THREE.MeshBasicMaterial(
		{
			map: THREE.ImageUtils.loadTexture(this.texture),
			transparent: true
		});

		pet = new THREE.Mesh(
			new THREE.PlaneGeometry(
				20,
				20),
			petMaterial);

		scene.add(pet);
		pet.position = this.position;
	}

	//***Brain***
	//As the pets starts it knows no items: 
	//A list of all the items the pet has encounterd before, and how many times it has encountered it. 
	this.petItemsKnown = new Array();
	this.petEncounterCounter = new Array();
	petItemsKnown[0] = "0";

	//***ShortTerm Memorie:
	//Observe
	this.StmO1 = new Array();
	this.StmO2 = new Array();
	this.StmO3 = new Array();
	//HearingSound
	this.StmHS1 = new Array();
	this.StmHS2 = new Array();
	this.StmHS3 = new Array();
	//Interaction
	this.StmI1 = new Array();
	this.StmI2 = new Array();
	this.StmI3 = new Array();
	//***LoongTerm Memorie:
	//Observe
	this.LtmO1 = new Array();
	this.LtmO2 = new Array();
	this.LtmO3 = new Array();
	//HearingSound
	this.LtmHS1 = new Array();
	this.LtmHS2 = new Array();
	this.LtmHS3 = new Array();
	//Interaction
	this.LtmI1 = new Array();
	this.LtmI2 = new Array();
	this.LtmI3 = new Array();
	//***Sunconshious Memorie:
	//Observe
	this.SubO1 = new Array();
	this.SubO2 = new Array();
	this.StmO3 = new Array();
	//HearingSound
	this.SubHS1 = new Array();
	this.SubHS2 = new Array();
	this.SubHS3 = new Array();
	//Interaction
	this.SubI1 = new Array();
	this.SubI2 = new Array();
	this.SubI3 = new Array();

	//***Making the pet Mood and actionList***
	//The pets mood is a vector2 on a mood scale.
	this.petCurrentMood = new THREE.Vector2(-9, 9);
	this.petMoodPersonality = {
		useOfEnergy: 0.5,
		digestion: 2,
		enegry: 0.9,
		anger: 0.9,
		moodSwings: 1
	};
	this.mood = new Mood(this.petMoodPersonality, this.petCurrentMood);
	this.actionList = new Action(this.mood);

	//***Pet movement***
	//The position the pet is currently walking towards
	this.petTargetPos = new THREE.Vector3(0, 0, 0);
	this.currentPath = [];
	this.movementInfo = 1;
	this.stopMoving = false;
	*/
};

Pet.prototype.activatingPet = function()
{
	/*
	pet.senses();
	setTimeout(pet.activatingPet, 4000);
	*/
}

Pet.prototype.update = function()
{
	/*
	if (!this.stopMoving)
	{
		this.soundRad = 20;
		pet.move();
	}*/
};

Pet.prototype.render = function()
{
	//pet.visual();
};