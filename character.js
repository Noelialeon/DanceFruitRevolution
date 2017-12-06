//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(ctx, x, color){
  this.score = 0;
  this.width = 100;
  this.height = 100;
  this.x = x;
  this.y = 300
  this.ctx = ctx;
  this.color = color;
  this.printScore()
  this.printCharacter();
};

Character.prototype.printScore = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath()
  this.ctx.font = "30px Arial";
  this.ctx.fillText(this.score,60,40);
};

Character.prototype.update = function(){
  this.printScore();
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Character.prototype.printCharacter = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Character.prototype.move = function(direction){
  switch (direction) {
    case 'right':
        this.width = 150;
        this.height = 100;
        break;
    case 'up':
        this.width = 100;
        this.height = 150;
        break;
    case 'down':
        this.width = 100;
        this.height = 50;
        break;
    case 'left':
        this.width = 50;
        this.height = 50;
        break;
  };
};

// // Character.prototype.generateArrows = function(){
// // //función para que genere las flechas aleatoriamente relativas a este personaje.
// // };
