function deployS1() {
    islandFloor();
    sceneObjects();
}

function sceneObjects() {
    axisLen = 200;
    new GameObject("Box", [1, axisLen, 1], vec(0,axisLen/2,0), v0, 0x00ff00);
    new GameObject("Box", [axisLen, 1, 1], vec(axisLen/2, 0, 0), v0, 0xff0000);
    new GameObject("Box", [1,1,axisLen], vec(0, 0, axisLen/2), v0, 0x0000ff);

    new GameObject("Box", [50,50,50], v0, v0, 0xffa500);
}

function islandFloor() {
    var sols = [];

    let islandWidth = 10;
    let islandDepth = 10;

    let floorWH = 100;

    let currSolW = (islandWidth/2)*floorWH;
    let currSolD = (islandDepth/2)*floorWH;

    for (let i = 0; i < islandDepth; i++) {
        for (let j = 0; j < islandWidth; j++) {
            sols.push(new GameObject(
                "Plane",
                [floorWH,floorWH],
                vec(floorWH * j - currSolW, 0, floorWH * i - currSolD),
                vec(Math.PI / 2., 0, 0) // 90°
            ));
        }
    }
}