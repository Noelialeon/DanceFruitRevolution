function ScoreBar(ctx, x, y, width, height, character){
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.character = character;
  this.hideBar = new HideBar(this.ctx, this.width, this.height, this.x, this.y, this.character);
  };
  
ScoreBar.prototype.printScoreBar = function(){
  this.ctx.save();
  this.hideBar.printHideBar();
  this.ctx.globalCompositeOperation = 'source-atop';
  this.image = new Image();
  this.image.src = 'images/shake.png';
  this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

ScoreBar.prototype.printGlass = function(){
  this.image = new Image();
  this.image.src = 'images/shake-glass.png';
  this.ctx.drawImage(this.image, this.x, this.y+65, this.width, this.height-8);
}

ScoreBar.prototype.update = function(){
  this.ctx.save();
  this.printScoreBar();
  this.ctx.restore();
  this.printGlass();
};

//Construye la capa que nos mostrára la Score Bar
function HideBar(ctx, width, height, x, y, character){
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y + height;
  this.character = character;
};

HideBar.prototype.printHideBar = function(){
  this.ctx.fillStyle = '#0D0026';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
 };

HideBar.prototype.newWidth = function(){
  this.height =- this.character.score/2;
  if(this.height > 1){
    this.height = 0;
  } else if (this.height <= -300){
    this.height = -300;
  };
};