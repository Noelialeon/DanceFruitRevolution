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

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38:
        for (var i = 0; i < arrowUp.length; i += 1) {
			detectionBody.isOnDetectionBody(arrowUp[i]);
        };
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