function handleMotion() {
    if (!debugModeEnabled) updatePlayerInput();
    else updateDebugInput();
    updateSkyboxPosition();
}

//Uses key input values and gravity data to move the camera's position how we need it to. 
function updatePlayerInput() {
    delta = clock.getDelta();
    onPlatformID = onPlatformXYZ();

    let nextFrameY = cam.position.y - settings.playerHeight + (yPosDelta * delta);  //The y position of the camera's "feets" on the NEXT frame for analysis
    let syncedGravity = settings.gravity * delta;   //gravity but regulated across computer clock speeds

     //On est en vol hors d'une zone de plateforme (ou en dessous)
    if (onPlatformID == -1) yPosDelta -= syncedGravity;
    else {                   //On est au dessus ou sur une plateforme
        //The Y position of the highest pixels on the platform's collider, only calculated if we are over a platform
        let currPlatformTopY = plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5);

        if (nextFrameY <= currPlatformTopY && yPosDelta < 0) {    //Si prochaine frame passe sous la plateforme et on tombe actuellement
            
            //On arrete la chute et on se pose sur la plateforme
            nextFrameY = currPlatformTopY;  //Si on changeait directement la position de la cam, la position de la prochaine frame déja décidée annulerait
            yPosDelta = 0;
        }    
        else if (nextFrameY > currPlatformTopY){    //Si prochaine frame est toujours au dessus d'une plateforme
            yPosDelta -= syncedGravity;  //If you need to modify then modify other one too
        }

            //Entrées faisables que si on est STRICTEMENT sur une plateforme
        if (nextFrameY == currPlatformTopY) {
            if (userInputManager.forwardPressed) zPosInput = settings.playerMoveSpeed * -1;
            else if (userInputManager.backwardPressed) zPosInput = settings.playerMoveSpeed;
            else zPosInput = 0;

            if (userInputManager.leftPressed) yRotInput = settings.playerRotSpeed;
            else if (userInputManager.rightPressed) yRotInput = settings.playerRotSpeed * -1;
            else yRotInput = 0;
            
            if (userInputManager.jumpPressed) jump();
        }
    }

    cam.translateZ(zPosInput * delta);
    cam.rotation.y += yRotInput * delta;
    cam.position.y = nextFrameY + settings.playerHeight;
}

function jump() {
        yPosDelta = settings.jumpHeight;
        yRotInput = 0;
}

function updateSkyboxPosition() {
    if (skyBox == undefined || skyBox.mesh == undefined) return;    //Skybox non existante les premières frames
    skyBox.mesh.position.copy(cam.position);    //La boule de skybox reste toujours autour du joueur
}