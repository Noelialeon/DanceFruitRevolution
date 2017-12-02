//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(){
    this.counter = 0;
    this.createAreaA = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = 'grey';
        ctx.fillRect(50, 10, 10, 200);
    };
};


Character.prototype.move = function(){
//detectar que al pulsar teclaUP en el espacio X me muestre ciertos movimientos(cambio de color de momento)
};

Character.prototype.generateArrows = function(){
//función para que genere las flechas aleatoriamente relativas a este personaje.
};

function DetectionBody(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function () {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}

DetectionBody.prototype.isOnDetectionBody = function (arrow) {
    if (isActive(allArrows[0]) && (arrow.y > detectionBody.y) && ((arrow.y + arrow.height) < (detectionBody.y + detectionBody.height))) {
        counter += 2;
        arrow.status = 'inactive';
        console.log("perfect", counter);
        return true;
    };
    if (isActive(allArrows[0]) && (arrow.y > detectionBody.y) && ((arrow.y + arrow.height) < (detectionBodyDown.y + detectionBodyDown.height + 5))) {
        arrow.status = 'inactive';
        counter += 1;
        console.log("almost perfect", counter);
        return true;
    };
    console.log("not the right key or miss it");
    };
    //else if ((arrow.y > detectionBodyUp.y) && ((arrow.y + arrow.height) < (detectionBodyUp.y + detectionBodyUp.height))) {
    //     counter = +1;
    //     console.log(counter);
    //     return true