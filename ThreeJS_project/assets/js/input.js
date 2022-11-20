var zPosInput = 0;
var yRotInput = 0;
var yPosDelta = 0;  //How much pixel shift in one frame on Y axis

$(function () {
    document.addEventListener("keydown", function(event) {
    if (event.key == "z" || event.key == "ArrowUp") {
        zPosInput = settings.playerMoveSpeed * -1;    //cam.position.x -= 1;
    }
    else if (event.key == "q" || event.key == "ArrowLeft") {
        yRotInput = settings.playerRotSpeed;      //cam.rotation.y += 0.05;
    }
    else if (event.key == "d" || event.key == "ArrowRight") {
        yRotInput = settings.playerRotSpeed * -1;     //cam.rotation.y -= 0.05;
    }
    else if (event.key == "s" || event.key == "ArrowDown") {
        zPosInput = settings.playerMoveSpeed;     //cam.position.x += 1;
    }
    else if (event.key == " ")  {//SpaceBar
        jump();
    }
    });

    document.addEventListener("keyup", function(event){
        if (event.key == "z" || event.key == "s" || event.key == "ArrowUp" || event.key == "ArrowDown") {
            zPosInput = 0;
        }
        else if (event.key == "q" || event.key == "d" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            yRotInput = 0;    
        }
    });
});
