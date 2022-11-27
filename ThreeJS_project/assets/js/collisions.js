function onPlatform() {     //Returns -1 for NoPlatform, and the platform ID if on platform.    APPEL LOURD, UTILISER LA VARIABLE onPlatformID pour pas appeller
    let platformID = -1;
    $.each(plateformes, function (i, platform) {
        if (cam.position.x > platform.mesh.position.x - (platform.geometry.parameters.width * 0.5) && 
        cam.position.x < platform.mesh.position.x + (platform.geometry.parameters.width * 0.5)) {
            
            if (cam.position.z > platform.mesh.position.z - (platform.geometry.parameters.height * 0.5) &&
            cam.position.z < platform.mesh.position.z + (platform.geometry.parameters.height * 0.5)) {
                
                    //On doit mettre une marge d'erreur correspondant a la quantité de descente du joueur tombant en 1 frame
                if (cam.position.y - settings.playerHeight == platform.mesh.position.y + (platform.geometry.parameters.depth * 0.5) /*- (settings.maxFallDelta * delta)*/ &&
                cam.position.y - settings.playerHeight == platform.mesh.position.y + (platform.geometry.parameters.depth * 0.5) /*+ (settings.maxFallDelta * delta)*/) {
                    platformID = i;
                    //On break tot pour ne pas checker toutes les plateformes si on en a trouvé une
                    return false;
                }
            }
        }
    })
    return platformID;
}