//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(game){
  this.score = 0;
  this.printScore()
};

Character.prototype.printScore = function() {
  ctx.beginPath()
  ctx.font = "30px Arial";
  ctx.fillText(this.score,60,40);
  ctx.closePath();
};

Character.prototype.update = function(){
  ctx.beginPath()
  ctx.font = this.font;
  ctx.fillStyle = this.fillStyle;
  ctx.fillText(this.score,60,40);
  ctx.closePath();
};

// // Character.prototype.move = function(){
// // //detectar que al pulsar teclaUP en el espacio X me muestre ciertos movimientos(cambio de color de momento)
// // };

// // Character.prototype.generateArrows = function(){
// // //función para que genere las flechas aleatoriamente relativas a este personaje.
// // };
