function handleMotion() {
    updatePlayerInput();
}

function updatePlayerInput() {
    delta = clock.getDelta();

    onPlatformID = onPlatformXYZ();

    if (onPlatformID == -1) {   //En vol hors d'une zone de plateforme (ou en dessous)
        yPosDelta -= settings.gravity * delta;
    }
    else {      //Au dessus d'une plateforme
        if (cam.position.y - settings.playerHeight + (yPosDelta * delta) <= plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5)
        && yPosDelta < 0) {    //Si prochaine frame passe sous la plateforme et on tombe actuellement
            
            //On arrete la chute et on se pose sur la plateforme
            cam.position.y = settings.playerHeight + plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5);
            yPosDelta = 0;
        }
        else if (cam.position.y - settings.playerHeight + (yPosDelta * delta) > plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5)){  //La prochaine frame est toujours au dessus d'une plateforme
            yPosDelta -= settings.gravity * delta;  //If you need to modify then modify other one too
        }
    }

    cam.translateZ(zPosInput * delta);
    cam.rotation.y += yRotInput * delta;
    cam.position.y += yPosDelta * delta;    //Dont modify else you have to modify those up there
}

function jump() {
         //On saute pos si en l'air 
    if (onPlatformID != -1 && cam.position.y - settings.playerHeight == plateformes[onPlatformID].mesh.position.y + (plateformes[onPlatformID].geometry.parameters.depth * 0.5)) { 
        yPosDelta = settings.jumpHeight;
    }
}