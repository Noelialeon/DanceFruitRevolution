//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(ctx, x, y, spriteWidth, spriteHeight, rows, cols, speed, image){
  this.ctx = ctx; 
  this.x = x;
  this.y = y;
  this.score = 0;
  this.curFrame = 0;
  this.spriteWidth = spriteWidth; 
  this.spriteHeight = spriteHeight; 
  this.rows = rows; 
  this.cols = cols;
  this.width = this.spriteWidth / this.cols;
  this.height = this.spriteHeight / this.rows;
  this.srcX = 0; 
  this.srcY = 0;
  this.speed = speed;
  this.dead = false;
  this.image = new Image();
  this.image.src = image;
  this.moveRight();
};

Character.prototype.moveRight = function(){
  this.curFrame = this.curFrame;
  this.frameCount = 12;
  this.curRow = 0;
};

Character.prototype.moveLeft = function(){
  this.curFrame = 0;
  this.frameCount = 10;
  this.curRow = 2;
};

Character.prototype.moveUp = function(){
  this.curFrame = 0;
  this.frameCount = 10;
  this.curRow = 1;
};

Character.prototype.moveDown = function(){
  this.curFrame = 0;
  this.frameCount = 10;
  this.curRow = 3;
};

Character.prototype.fail = function(){
  this.curFrame = 0;
  this.frameCount = 9;
  this.curRow = 4;
};

Character.prototype.die = function(){
  clearInterval(this.characterInterval);
  this.curFrame = 0;
  this.frameCount = 12;
  this.curRow = 5;
  this.characterLastInterval = setInterval(this._update.bind(this), 120);
};

Character.prototype.updateCharacter = function(){
  ctx.clearRect(this.x, this.y, this.width, this.height);
  this.characterInterval = setInterval(this._update.bind(this), this.speed);
};

Character.prototype._update = function(){
  if (this.curFrame === 11 && this.curRow === 5){
    this.dead = true;
    this.stopCharacter();
    clearInterval(this.characterLastInterval);
  } else {
    this.curFrame = ++this.curFrame % this.frameCount; 
    this.srcX = this.curFrame * this.width;
    this.srcY = this.height * this.curRow;
  };
};

Character.prototype.drawImage = function(){
  this.ctx.drawImage(this.image,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};

Character.prototype.stopCharacter= function(){
  clearInterval(this.characterInterval);
  clearInterval(this.characterLastInterval);
};
