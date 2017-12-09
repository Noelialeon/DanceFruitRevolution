function ScoreBar(ctx, x, y, width, height, character){
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.character = character;
  this.hideBar = new HideBar(ctx, 0, height, x, y, character);
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
function HideBar(ctx, width, height, x, y, character, scoreBarWidth){
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.character = character;
  this.scoreBarWidth = scoreBarWidth;
  this.printHideBar();
};

HideBar.prototype.printHideBar = function(){
  this.ctx.fillStyle = '#dbfde8';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

HideBar.prototype.newWidth = function(){
  this.width = this.character.score;
  if(this.width >= this.scoreBarwidth){
    this.width = this.scoreBarwidth;
  };
};