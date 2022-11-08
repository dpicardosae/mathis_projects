function deployS1() {
    islandFloor();
    sceneObjects();
}

function sceneObjects() {
    new GameObject("Line");
    //new GameObject("Cube", [1,1,1] ,new THREE.Vector3(50, 50, 50));
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
                "assets/images/grass.jpg"
            ));
        }
    }
}