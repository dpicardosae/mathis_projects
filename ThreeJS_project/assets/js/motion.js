function handleMotion() {
    updatePlayerInput();
}

function updatePlayerInput() {
    delta = clock.getDelta();
    cam.translateZ(zPosInput * delta);
    cam.rotation.y += yRotInput * delta;
    cam.position.y += yPosDelta * delta;

    onPlatformID = onPlatform();

    if (onPlatformID == -1) {
        yPosDelta -= settings.gravity * delta;   
    }
    else {
        cam.position.y = settings.playerHeight;
        yPosDelta = 0;
    }

}

function jump() {
    if (onPlatformID == -1) return;     //On saute pos si en l'air
    yPosDelta = settings.jumpHeight;
}