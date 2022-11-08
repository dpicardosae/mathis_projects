function handleMotion() {
    updatePlayerInput();
}

function updatePlayerInput() {
    cam.translateZ(xInput)
    cam.rotation.y += yInput;
}