//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(ctx){
  this.ctx = ctx; 
  this.x = 50;
  this.y = 140;
  this.score = 0;

  this.spriteWidth = 2478; 
  this.spriteHeight = 1053; 
  this.rows = 3; 
  this.cols = 13;
  this.width = this.spriteWidth / this.cols;
  this.height = this.spriteHeight / this.rows;
  this.curFrame = 0;
  this.frameCount = 13;
  this.srcX = 0; 
  this.srcY = 0; 
  this.speed = 100;

  this.image = new Image();
  this.image.src = 'images/MW_spriteSheet-01.png';
  this._updateCharacter();
};

Character.prototype._updateCharacter = function(){
  ctx.clearRect(this.x, this.y, this.width, this.height);
  this.characterInterval = setInterval(this._update.bind(this), this.speed);
};

Character.prototype._update = function(){
  this.curFrame = ++this.curFrame % this.frameCount; 
  this.srcX = this.curFrame * this.width;
};

Character.prototype.drawImage = function(){
  this.ctx.drawImage(this.image,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};

Character.prototype.stopCharacter= function (){
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
    this.ctx.fillText("Danger",10,50);
    this.ctx.restore();
  } else {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.font = "15px Arial";
    this.ctx.fillText(this.score,10,50);
    this.ctx.restore();
  };
};