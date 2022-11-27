function handleMotion() {
    updatePlayerInput();
}

function updatePlayerInput() {
    delta = clock.getDelta();
    cam.translateZ(zPosInput * delta);
    cam.rotation.y += yRotInput * delta;
    cam.position.y += yPosDelta * delta;

    onPlatformID = onPlatform();

    if (onPlatformID == -1) {   //En vol
        yPosDelta -= settings.gravity * delta;   
    }
    else {      //Sur une plateforme
        cam.position.y = settings.playerHeight + plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5);
        yPosDelta = 0;
    }

}

function jump() {
    if (onPlatformID == -1) return;     //On saute pos si en l'air
    yPosDelta = settings.jumpHeight;
}