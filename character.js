//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(ctx, width, height, x, y, radius, color){
  this.score = 0;
  this.printScore()
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.radius = radius;
  ctx.fillStyle = color;
  this._roundedRect(ctx, this.x, this.y, this.width, this.height, this.radius);

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

Character.prototype._roundedRect = function(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.fill();
  ctx.closePath();
};