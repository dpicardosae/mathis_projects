function deployS1() {
    spawnPlatforms();
    sceneObjects();
}

function sceneObjects() {
    skyBox = new GameObject("Sphere", [8000, 5, 5], vec(0, 0, 0), vec(Math.PI / 2., 0, 0), "assets/images/2k_stars_milky_way.png", [3,3]);    //SkyBox
}

function spawnPlatforms() {
    plateformes.push(new GameObject(        //Base platform
        "Box",
        [settings.defPlatformDims.x, settings.defPlatformDims.z, settings.defPlatformDims.y],
        vec(0, (settings.defPlatformDims.y/2) * -1, 0),
        vec(Math.PI / 2., 0, 0) // 90°
    ));
}