var axes = [];

//Debug flying mode, replaces updatePlayerInput()
function updateDebugInput() {
    delta = clock.getDelta();

    if (userInputManager.forwardPressed) zPosInput = settings.playerMoveSpeed * -10;
    else if (userInputManager.backwardPressed) zPosInput = settings.playerMoveSpeed * 10;
    else zPosInput = 0;

    if (userInputManager.leftPressed) yRotInput = settings.playerRotSpeed * 3;
    else if (userInputManager.rightPressed) yRotInput = settings.playerRotSpeed * -3;
    else yRotInput = 0;

    cam.translateZ(zPosInput * delta);
    cam.rotation.y += yRotInput * delta;
}

//Enables debug mode if not enabled, disables it if enabled
function debugMode() {
    zPosInput = 0;
    yRotInput = 0;
    yPosDelta = 0;

    debugModeEnabled = !debugModeEnabled; //on -> off     off -> on

    if (debugModeEnabled) {
        axes.push(new GameObject("Box", [1, settings.debugAxisLen, 1], vec(0,settings.debugAxisLen/2,0), v0, 0x00ff00));       //Axes
        axes.push(new GameObject("Box", [settings.debugAxisLen, 1, 1], vec(settings.debugAxisLen/2, 0, 0), v0, 0xff0000));
        axes.push(new GameObject("Box", [1,1,settings.debugAxisLen], vec(0, 0, settings.debugAxisLen/2), v0, 0x0000ff));     
    }
    else {
        axes.forEach(axe => {
            axe.destroy();
        });
        axes = [];
    }
}