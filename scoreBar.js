function ScoreBar(ctx, character){
  this.width = 170;
  this.height = 40;
  this.x = 50;
  this.y = 20
  this.ctx = ctx;
  this.character = character;
  this.hideBar = new HideBar(ctx, character);
  this.ctx.save();
  this.printScoreBar();
  this.ctx.restore();
};

ScoreBar.prototype.printScoreBar = function(){
  this.hideBar.printHideBar();
  this.ctx.globalCompositeOperation = 'source-atop';
  this.image = new Image();
  this.image.src = 'images/Progress-bar-points.png';
  this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

ScoreBar.prototype.update = function(){
  this.ctx.save();
  this.printScoreBar();
  this.ctx.restore();
};

//Constructor la capa que nos mostrára la Score Bar
function HideBar(ctx, character){
  this.width = 0;
  this.height = 40;
  this.x = 50;
  this.y = 20
  this.ctx = ctx;
  this.character = character;
  this.printHideBar();
};

HideBar.prototype.printHideBar = function(){
  this.ctx.fillStyle = '#dbfde8';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

HideBar.prototype.newWidth = function(){
  this.width = this.character.score;
  if(this.width >= 170){
    this.width = 170;
  };
};