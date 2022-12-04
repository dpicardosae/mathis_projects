function handleMotion() {
    updatePlayerInput();
}

function updatePlayerInput() {
    delta = clock.getDelta();
    onPlatformID = onPlatformXYZ();

    if (onPlatformID == -1) {   //On est en vol hors d'une zone de plateforme (ou en dessous)
        yPosDelta -= settings.gravity * delta;
    }
    else {                      //On est au dessus ou sur une plateforme
        if (cam.position.y - settings.playerHeight + (yPosDelta * delta) <= plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5)
        && yPosDelta < 0) {    //Si prochaine frame passe sous la plateforme et on tombe actuellement
            
            //On arrete la chute et on se pose sur la plateforme
            cam.position.y = settings.playerHeight + plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5);
            yPosDelta = 0;
        }    //La prochaine frame est toujours au dessus d'une plateforme
        else if (cam.position.y - settings.playerHeight + (yPosDelta * delta) > plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5)){ 
            yPosDelta -= settings.gravity * delta;  //If you need to modify then modify other one too
        }

            //Entrées faisables que si on est STRICTEMENT sur une plateforme
        if (cam.position.y - settings.playerHeight + (yPosDelta * delta) == plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5)) {
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