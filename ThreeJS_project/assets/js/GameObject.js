class GameObject {
    constructor(geometry, args, position = v0, rotation = v0, style = 0x444444, textureRepeat = [1, 1]) { //String, args[], THREE.Vector3, THREE.Vector3, any, []
        let current_gameObject = this;
        
        switch (geometry) {
            case "Box":
                current_gameObject.geometry = new THREE.BoxGeometry(args[0], args[1], args[2]);
                break;
            case "Sphere":
                current_gameObject.geometry = new THREE.SphereGeometry(args[0], args[1], args[2]);      //Rayon, finesse, finesse
                break;
            case "Plane":
                current_gameObject.geometry = new THREE.PlaneGeometry(args[0], args[1]);
                break;
            case "Line":
                let vertices = [];
                vertices.push(args[0]);
                vertices.push(args[1]);
                current_gameObject.geometry = new THREE.BufferGeometry().setFromPoints(vertices);
                this.material = new THREE.LineBasicMaterial( {style: style, linewidth: 5 } );
                this.line = new THREE.Line(current_gameObject.geometry, this.material);
                this.line.type = "line";
                scene.add(this.line);
        }

        if (typeof style == "string") {
            var loader = new THREE.TextureLoader();
            loader.load(
                style,
                function (texture) {
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set( textureRepeat[0], textureRepeat[1] );

                    //Create a 8x8 plane with texture
                    current_gameObject.material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });    //Texture apliquée des deux cotés du plane

                    current_gameObject.applyGeometry(position, rotation);   //On apelle ici pour attendre le chargement de la texture avant de l'appliquer
                }
            );	
        } 
        else {      //for Hex codes
            current_gameObject.material = new THREE.MeshBasicMaterial( {color: style, side: THREE.DoubleSide} );
            if (geometry != 'Line') {
                this.applyGeometry(position, rotation);
            }
        }
    }

    applyGeometry(position, rotation) {
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.rotation.x = rotation.x; // rotation.copy() -> warning ?
        this.mesh.rotation.y = rotation.y;
        this.mesh.rotation.z = rotation.z;
        this.mesh.position.copy(position);
        scene.add(this.mesh);
    }

    //Removes the object from scene and free the geometry and material
    destroy() {
        scene.remove(this.mesh);
        if (this.geometry) this.geometry.dispose();

        if (this.material) {
            if (this.material instanceof Array) {   //if material is an array
                this.material.forEach(material => material.dispose())
            } else {
                this.material.dispose();
            }
        }
    }
}