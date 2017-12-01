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