function handleMotion() {
    updatePlayerInput();
    updateSkyboxPosition();
}

function updatePlayerInput() {
    delta = clock.getDelta();
    onPlatformID = onPlatformXYZ();

     //On est en vol hors d'une zone de plateforme (ou en dessous)
    if (onPlatformID == -1) yPosDelta -= settings.gravity * delta;
    else {                   //On est au dessus ou sur une plateforme
        let nextFrameY = cam.position.y - settings.playerHeight + (yPosDelta * delta);  //The y position of the camera's "feets" on the NEXT frame for analysis
        //The Y position of the highest pixels on the platform's collider
        let currPlatformTopY = plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5);

        if (nextFrameY <= currPlatformTopY && yPosDelta < 0) {    //Si prochaine frame passe sous la plateforme et on tombe actuellement
            
            //On arrete la chute et on se pose sur la plateforme
            cam.position.y = settings.playerHeight + plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5);
            yPosDelta = 0;
        }    
        else if (nextFrameY > currPlatformTopY){    //Si prochaine frame est toujours au dessus d'une plateforme
            yPosDelta -= settings.gravity * delta;  //If you need to modify then modify other one too
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
    cam.position.y += yPosDelta * delta;    //Dont modify else you have to modify those up there
}

function jump() {
        yPosDelta = settings.jumpHeight;
        yRotInput = 0;
}

function updateSkyboxPosition() {
    if (skyBox == undefined || skyBox.mesh == undefined) return;    //Skybox non existante les premières frames
    skyBox.mesh.position.copy(cam.position);    //La boule de skybox reste toujours autour du joueur
}