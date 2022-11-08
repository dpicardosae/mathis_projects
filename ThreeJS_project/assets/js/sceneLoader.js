$(function () {
    $("#loading").hide();
    loadScene("Scene1");
});

var loadingSprite;

function loadingScreenOpen() {
    $("#loading").fadeIn(500);
}

function loadingScreenClose() {
    $("#loading").fadeOut(500);
}

function loadScene(sceneName) {
    loadingScreenOpen();
    if (sceneName === "Scene1") {
        deployS1();
    }       //Continue here for other scenes
    loadingScreenClose();
}