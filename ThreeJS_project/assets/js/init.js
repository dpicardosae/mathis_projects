var scene;
var cam;
var v0 = vec(0, 0, 0);
var plateformes = [];
var settings = new Settings();
var clock = new THREE.Clock();
var onPlatformID = -1;
var delta = 1;

$(function () {
	scene = new THREE.Scene();
	cam = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 3000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	var container = document.getElementById("container");
	container.appendChild( renderer.domElement );   //Ajouter le renderer au Container

	cam.position.y = settings.playerHeight;
	cam.lookAt(0,50,0);

	cam.updateProjectionMatrix();
	scene.add(cam);     //On ajoute la camera à la scene

	function animate() {
		requestAnimationFrame( animate );
		handleMotion();
		renderer.render( scene, cam );
	}
	animate();

	var loader = new THREE.TextureLoader();
	loader.load(
		"https://cdn.glitch.com/62a3a7d1-3c19-4fb7-b1ef-a1c65ba38596%2Fboard.svg?v=1577426114562",
		function (texture) {
			var material = new THREE.MeshBasicMaterial({ map: texture });
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 104, 104 );

			//Create a 8x8 plane with texture
			var geometry = new THREE.PlaneGeometry(108, 108);
			//var material = new THREE.MeshBasicMaterial({ map: texture });
			var plane = new THREE.Mesh(geometry, material);
			scene.add(plane);
		}
	);	

});