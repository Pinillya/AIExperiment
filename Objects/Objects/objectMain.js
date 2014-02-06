
function BaseObject ()
{
    if (this.texture != null)
    {
       //Texture:
        var objMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(this.texture), transparent: true});

        plane = new THREE.Mesh(
            new THREE.PlaneGeometry(
            20,
            20),
            objMaterial);

        scene.add(plane);
        plane.position = this.position;
    } 

    console.log (this.nameId);
}

BaseObject.prototype.emitSoundSmell = function()
{
};

BaseObject.prototype.workingStill = function()
{
};