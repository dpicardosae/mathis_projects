var xInput = 0;
var yInput = 0;

$(function () {
    document.addEventListener("keydown", function(event) {
    if (event.key == "z" || event.key == "ArrowUp") {
        xInput = -4;    //cam.position.x -= 1;
    }
    else if (event.key == "q" || event.key == "ArrowLeft") {
        yInput = 0.05;      //cam.rotation.y += 0.05;
    }
    else if (event.key == "d" || event.key == "ArrowRight") {
        yInput = -0.05;     //cam.rotation.y -= 0.05;
    }
    else if (event.key == "s" || event.key == "ArrowDown") {
        xInput = 4;     //cam.position.x += 1;
    }
    });

    document.addEventListener("keyup", function(event){
        if (event.key == "z" || event.key == "s" || event.key == "ArrowUp" || event.key == "ArrowDown") {
            xInput = 0;
        }
        else if (event.key == "q" || event.key == "d" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            yInput = 0;    
        }
    });
});
