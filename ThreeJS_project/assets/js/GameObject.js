class GameObject {
    constructor(geometry, args, position = v0, rotation = v0, color = 0x444444) { //String, args[], THREE.Vector3
        switch (geometry) {
            case "Box":
                this.geometry = new THREE.BoxGeometry(args[0], args[1], args[2]);
                break;
            case "Sphere":
                this.geometry = new THREE.SphereGeometry(args[0]);
                break;
            case "Plane":
                this.geometry = new THREE.PlaneGeometry(args[0], args[1]);
                break;
            case "Line":
                let vertices = [];
                vertices.push(args[0]);
                vertices.push(args[1]);
                this.geometry = new THREE.BufferGeometry().setFromPoints(vertices);
                this.material = new THREE.LineBasicMaterial( {color: color, linewidth: 5 } );
                this.line = new THREE.Line(this.geometry, this.material);
                this.line.type = "line";
                scene.add(this.line);
        }

        /*if (texture_path != '') {
            let textureLoader = new THREE.TextureLoader();
            let texture = textureLoader.load(texture_path);
            this.material = new THREE.MeshStandardMaterial({
                map: texture
            });
        }
        else*/

        this.material = new THREE.MeshBasicMaterial( {color: color, side: THREE.DoubleSide} );

        if (geometry != 'Line') {
            this.mesh = new THREE.Mesh( this.geometry, this.material );
            this.mesh.rotation.x = rotation.x; // rotation.copy() -> warning ?
            this.mesh.rotation.y = rotation.y;
            this.mesh.rotation.z = rotation.z;
            this.mesh.position.copy(position);
            scene.add(this.mesh);
        }
    }
}