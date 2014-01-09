var rotateX = 0;
var rotateZ = 0;
function keyHandeling () 
{
	
	var rotationSpeed = 1;

	if (Key.isDown(Key.A))
	{
		//player.playerMaterial = new THREE.MeshBasicMaterial
		//({ map: THREE.ImageUtils.loadTexture('Grapic/Pet/player.png'), transparent: true});
	}
	else if (Key.isDown(Key.D))
	{
		//player.playerMaterial = new THREE.MeshBasicMaterial
		//({ map: THREE.ImageUtils.loadTexture('Grapic/Pet/earth.png'), transparent: true});
	}


	if (Key.isDown(Key.W))
	{
		rotateX += rotationSpeed;
	}
	else if (Key.isDown(Key.S))
	{
		rotateX -= rotationSpeed;
	}
}
