function draw () 
{	
	pet.update();
	renderer.render( scene, camera );
	requestAnimationFrame(draw);
}