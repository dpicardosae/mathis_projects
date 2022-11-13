function deployS1() {
    islandFloor();
    sceneObjects();
}

function sceneObjects() {
    new GameObject("Line", [new THREE.Vector3(0,0,0), new THREE.Vector3(0,100,0)], new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), 0x00ff00);
    new GameObject("Line", [new THREE.Vector3(0,0,0), new THREE.Vector3(100,0,0)], new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), 0xff0000);
    new GameObject("Line", [new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,100)], new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), 0x0000ff);

    new GameObject("Box", [50,50,50],new THREE.Vector3(0, 0, 0), new THREE.Vector3(0,0,0), 0xffa500);
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
                [floorWH,floorWH], new THREE.Vector3(floorWH * j - currSolW, 0, floorWH * i - currSolD),
                new THREE.Vector3(1.5708, 0, 0), //3.1415/2
            ));
        }
    }
}