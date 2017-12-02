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
    this.status = 'active';
};

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            if (allArrows[0].direction === "up") {
                detectionBody.isOnDetectionBody(allArrows[0]);
            };
            break;
        // case 40:
        //     arrowDown.isOnDetectionBody();
        //     break;
        // case 38:
        //     arrowLeft.isOnDetectionBody();
        //     break;
        case 39:
            if (allArrows[0].direction === "right") {
                detectionBody.isOnDetectionBody(allArrows[0]);
            };
            break;
    };
};

function isActive(arrow) {
    if (arrow.status === 'active') {
        return true
    };
};