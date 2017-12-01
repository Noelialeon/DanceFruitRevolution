var counter = 0;

function Arrow(direction, width, height, color, x, y) {
    this.direction = direction;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function () {//función para pintar
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function () {
        this.y -= 3;
    };
};

// Arrow.prototype.hide = function (){
//     this.opacity = 0;
// }

Arrow.prototype.isOnDetectionBody = function (arrow) {
    if ((arrow.y > detectionBody.y) && ((arrow.y + arrow.height) < (detectionBody.y + detectionBody.height))) {
        counter += 2;
        console.log("perfect", counter);
        blockArrow(arrow);
        return true;
    }
    else if ((arrow.y > detectionBody.y) && ((arrow.y + arrow.height) < (detectionBodyDown.y + detectionBodyDown.height))) {
        counter += 1;
        console.log("almost perfect", counter);
        blockArrow(arrow);
        return true;
    } else {
        console.log("not the right key or miss it");
    }
    //else if ((arrow.y > detectionBodyUp.y) && ((arrow.y + arrow.height) < (detectionBodyUp.y + detectionBodyUp.height))) {
    //     counter = +1;
    //     console.log(counter);
    //     return true
};

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38:
            myArrows[0].isOnDetectionBody(myArrows[0]);
            break;
        // case 40:
        //     arrowDown.isOnDetectionBody();
        //     break;
        // case 38:
        //     arrowLeft.isOnDetectionBody();
        //     break;
        // case 39:
        //     arrowRight.isOnDetectionBody(arrowRight);
        //     break;
    };
};


function blockArrow(arrowType){
    if(arrowType.x < 50){
        arroyType.opacity = 0;
    };
};