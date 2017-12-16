//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(ctx, x, y, spriteWidth, spriteHeight, rows, cols, speed){
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
  this.image = new Image();
  this.image.src = 'images/SpriteSheet_Mia.png';
  this.moveRight();
};

Character.prototype.moveRight = function(){
  this.curFrame = this.curFrame;
  this.frameCount = 12;
  this.curRow = 0;
  this.drawImage();
};

Character.prototype.moveLeft = function(){
  this.curFrame = 0;
  this.frameCount = 10;
  this.curRow = 2;
  this.drawImage();
};

Character.prototype.moveUp = function(){
  this.curFrame = 0;
  this.frameCount = 10;
  this.curRow = 1;
  this.drawImage();
};

Character.prototype.moveDown = function(){
  this.curFrame = 0;
  this.frameCount = 10;
  this.curRow = 3;
  this.drawImage();
};


Character.prototype.fail = function(){
  this.curFrame = 0;
  this.frameCount = 9;
  this.curRow = 4;
  this.drawImage();
};

Character.prototype.updateCharacter = function(){
  ctx.clearRect(this.x, this.y, this.width, this.height);
  this.characterInterval = setInterval(this._update.bind(this), this.speed);
};

Character.prototype._update = function(){
  this.curFrame = ++this.curFrame % this.frameCount; 
  this.srcX = this.curFrame * this.width;
  this.srcY = this.height * this.curRow;
};

Character.prototype.drawImage = function(){
  this.ctx.drawImage(this.image,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};


Character.prototype.stopCharacter= function(){
  clearInterval(this.characterInterval);
};

Character.prototype.updateScore = function(){
  this.printScore();
};

Character.prototype.printScore = function() {
  this.ctx.save();
  if(this.score < 0){
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath()
    this.ctx.font = "15px Arial";
    this.ctx.fillText("Danger",80,50);
    this.ctx.restore();
  } else {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.font = "15px Arial";
    this.ctx.fillText(this.score,80,50);
    this.ctx.restore();
  };
};