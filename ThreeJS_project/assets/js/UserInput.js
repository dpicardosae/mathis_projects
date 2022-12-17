class UserInput {
    constructor() {
        this.forwardPressed = false;     //arrowUp or z
        this.leftPressed = false;        //arrowLeft or q
        this.backwardPressed = false;    //arrowDown or s
        this.rightPressed = false;       //arrowRight or d
        this.jumpPressed = false;        //spacebar
    }
}

var userInputManager = new UserInput();