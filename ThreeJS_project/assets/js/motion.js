function handleMotion() {
    updatePlayerInput();
}

function updatePlayerInput() {
    let delta = clock.getDelta();
    cam.translateZ(zPosInput * delta);
    cam.rotation.y += yRotInput * delta;
    cam.position.y += yPosDelta * delta;

    if (cam.position.y > settings.playerHeight) {
        yPosDelta -= settings.gravity * delta;   
    }
    else {
        cam.position.y = settings.playerHeight;
        yPosDelta = 0;
    }
}

function jump() {
    yPosDelta = settings.jumpHeight;
}