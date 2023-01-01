//GLOBAL VARIABLES
var renderer;
var scene;
var cam;
var plateformes = [];
var skyBox;
var controls;

var v0 = vec(0, 0, 0);
var settings = new Settings();
var clock = new THREE.Clock(true);

var onPlatformID = -1;
var delta = 1;
var debugModeEnabled = false;

//Main function
$(function () {
	scene = new THREE.Scene();
	cam = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000);
	controls = new FirstPersonControls(cam);

	controls.lookSpeed = 0.5;
	controls.movementSpeed = 1;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	var container = document.getElementById("container");
	container.appendChild( renderer.domElement );   //Ajouter le renderer au Container

	cam.position.y = settings.playerHeight;
	cam.lookAt(0,50,0);

	cam.updateProjectionMatrix();
	scene.add(cam);     //On ajoute la camera à la scene

	function animate() {
		delta = clock.getDelta();
		requestAnimationFrame( animate );
		handleMotion();
		renderer.render( scene, cam );
		controls.update(delta);
	}
	animate();
});