//Global variables
var zPosInput = 0;
var yRotInput = 0;
var yPosDelta = 0;  //How much pixel shift in one frame on Y axis

$(function () {
    document.addEventListener("keydown", function(event) {

        if (event.key == "z" || event.key == "ArrowUp") userInputManager.forwardPressed = true;
        else if (event.key == "s" || event.key == "ArrowDown") userInputManager.backwardPressed = true;
        if (event.key == " ") userInputManager.jumpPressed = true;    //SpaceBar
        if (event.key == "q" || event.key == "ArrowLeft") userInputManager.leftPressed = true;
        if (event.key == "d" || event.key == "ArrowRight") userInputManager.rightPressed = true;

        if (event.key == "+") debugMode();
    });

    document.addEventListener("keyup", function(event){
     
        if (event.key == "z" || event.key == "s" || event.key == "ArrowUp" || event.key == "ArrowDown") {
            userInputManager.forwardPressed = false;
            userInputManager.backwardPressed = false;
        }
        if (event.key == "q" || event.key == "d" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            userInputManager.leftPressed = false;
            userInputManager.rightPressed = false; 
        }
        if (event.key == " ") userInputManager.jumpPressed = false;
    });
});
