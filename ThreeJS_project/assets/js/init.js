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
});