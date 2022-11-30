function deployS1() {
    spawnPlatforms();
    lava();
    sceneObjects();
}

function sceneObjects() {
    new GameObject("Box", [1, settings.debugAxisLen, 1], vec(0,settings.debugAxisLen/2,0), v0, 0x00ff00);       //Axes
    new GameObject("Box", [settings.debugAxisLen, 1, 1], vec(settings.debugAxisLen/2, 0, 0), v0, 0xff0000);
    new GameObject("Box", [1,1,settings.debugAxisLen], vec(0, 0, settings.debugAxisLen/2), v0, 0x0000ff);
}

function spawnPlatforms() {
    plateformes.push(new GameObject(
        "Box",
        [settings.defPlatformDims.x, settings.defPlatformDims.z, settings.defPlatformDims.y],
        vec(0, (settings.defPlatformDims.y/2) * -1, 0),
        vec(Math.PI / 2., 0, 0) // 90°
    ));

    plateformes.push(new GameObject(
        "Box",
        [settings.defPlatformDims.x, settings.defPlatformDims.z, settings.defPlatformDims.y],
        vec(800 + settings.defPlatformDims.x, (settings.defPlatformDims.y/2) * -1, 0),
        vec(Math.PI / 2., 0, 0) // 90°
    ));
    plateformes.push(new GameObject(
        "Box",
        [settings.defPlatformDims.x, settings.defPlatformDims.z, settings.defPlatformDims.y],
        vec(0, (settings.defPlatformDims.y/2) * -1, 400 + settings.defPlatformDims.z),
        vec(Math.PI / 2., 0, 0) // 90°
    ));
}

function lava() {
    new GameObject("Plane", settings.lavaDims, vec(0, settings.defPlatformDims.y * -1, 0), vec(Math.PI / 2., 0, 0), 0xffa500);
}