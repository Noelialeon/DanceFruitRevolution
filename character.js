//creación de personaje con posición, contador, área que recibira los inputs, generación aleatoria de sus flechas.
function Character(x, y, ctx, spriteWidth, spriteHeight, rows, cols, frameCount, speed, image){
  this.x = x;
  this.y = y;
  this.score = 0;
  this.ctx = ctx; 
  this.spriteWidth = spriteWidth; 
  this.spriteHeight = spriteHeight; 
  this.rows = rows; 
  this.cols = cols;
  this.trackStandart = 0;
  this.width = this.spriteWidth / this.cols;
  this.height = this.spriteHeight / this.rows;
  this.curFrame = 0;
  this.frameCount = frameCount;
  this.srcX = 0; 
  this.srcY = 0; 
  this.speed = speed;
  this.image = new Image();
  this.image.src = image;
  this.updateCharacter();
};

Character.prototype.updateScore = function(){
  this.printScore();
};

Character.prototype.updateCharacter = function(){
  ctx.clearRect(this.x, this.y, this.width, this.height);
  this.characterInterval = setInterval(this.update.bind(this), this.speed);
};

Character.prototype.stopCharacter= function (){
  clearInterval(this.characterInterval);
};

Character.prototype.printScore = function() {
  this.ctx.save();
  if(this.score < 0){
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath()
    this.ctx.font = "15px Arial";
    this.ctx.fillText("losing",10,50);
    this.ctx.restore();
  } else {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.font = "15px Arial";
    this.ctx.fillText(this.score,10,50);
    this.ctx.restore();
  };
};

Character.prototype.update = function(){
  this.curFrame = ++this.curFrame % this.frameCount; 
  this.srcX = this.curFrame * this.width; 
};

Character.prototype.drawImage = function(){
  this.ctx.drawImage(this.image,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};




Character.prototype.move = function(direction){
//   switch (direction) {
//     case 'right':
//         this.width = 150;
//         this.height = 100;
//         break;
//     case 'up':
//         this.width = 100;
//         this.height = 150;
//         break;
//     case 'down':
//         this.width = 100;
//         this.height = 50;
//         break;
//     case 'left':
//         this.width = 50;
//         this.height = 50;
//         break;
//   };
};
