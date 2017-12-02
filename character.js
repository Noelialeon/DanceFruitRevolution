//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(){
    this.counter = 0;
    this.createAreaA = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = 'grey';
        ctx.fillRect(50, 10, 10, 200);
    };
};


// Character.prototype.move = function(){
// //detectar que al pulsar teclaUP en el espacio X me muestre ciertos movimientos(cambio de color de momento)
// };

// Character.prototype.generateArrows = function(){
// //función para que genere las flechas aleatoriamente relativas a este personaje.
// };
