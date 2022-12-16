class GameObject {
    constructor(geometry, args, position = v0, rotation = v0, style = 0x444444) { //String, args[], THREE.Vector3
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
                this.material = new THREE.LineBasicMaterial( {style: style, linewidth: 5 } );
                this.line = new THREE.Line(this.geometry, this.material);
                this.line.type = "line";
                scene.add(this.line);
        }

        if (typeof style == "string") {     //"this" is not reachable inside function ??,
            var loader = new THREE.TextureLoader(); //Works only for planes btw
            loader.load(
                style,
                function (texture) {
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set( 2, 2 );
        
                    //Create a 8x8 plane with texture
                    var geometry = new THREE.PlaneGeometry(args[0], args[1]);
                    var material = new THREE.MeshBasicMaterial({ map: texture });
                    var plane = new THREE.Mesh(geometry, material);
                    scene.add(plane);
                }
            );	
        } 
        else if (typeof style == "number") {      //Hex codes
            this.material = new THREE.MeshBasicMaterial( {color: style, side: THREE.DoubleSide} );
        }


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