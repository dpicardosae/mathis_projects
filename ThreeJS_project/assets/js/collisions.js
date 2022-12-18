function onPlatformXYZ() {     //Returns -1 for NoPlatform, and the platform ID if on platform.    APPEL LOURD, UTILISER LA VARIABLE onPlatformID pour pas appeller
    let platformID = -1;
    $.each(plateformes, function (i, platform) {
        if (cam.position.x > platform.mesh.position.x - (platform.geometry.parameters.width * 0.5) && 
        cam.position.x < platform.mesh.position.x + (platform.geometry.parameters.width * 0.5)) {
            
            if (cam.position.z > platform.mesh.position.z - (platform.geometry.parameters.height * 0.5) &&
            cam.position.z < platform.mesh.position.z + (platform.geometry.parameters.height * 0.5)) {
                if (cam.position.y - settings.playerHeight >= platform.mesh.position.y + (platform.geometry.parameters.depth * 0.5)) {
                    platformID = i;
                    return false;       //Break from the Jquery loop, NOT from the function
                }
            }
        }
    })
    return platformID;
}