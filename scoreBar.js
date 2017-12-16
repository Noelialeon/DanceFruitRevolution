function ScoreBar(ctx, x, y, width, height, character){
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.character = character;
  this.hideBar = new HideBar(ctx, width, height, x, y, character, this.height);
  this.ctx.save();
  this.printScoreBar();
  this.ctx.restore();
};

ScoreBar.prototype.printScoreBar = function(){
  this.hideBar.printHideBar();
  this.ctx.globalCompositeOperation = 'source-atop';
  this.image = new Image();
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  // this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

ScoreBar.prototype.update = function(){
  this.ctx.save();
  this.printScoreBar();
  this.ctx.restore();
};

//Constructor la capa que nos mostrára la Score Bar
function HideBar(ctx, width, height, x, y, character, scoreBarHeight){
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.character = character;
  this.scoreBarHeight = scoreBarHeight;
  this.printHideBar();
};

HideBar.prototype.printHideBar = function(){
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

HideBar.prototype.newWidth = function(){
  this.height =- this.character.score;
  if(this.height > 1){
    this.height = 0;
    this.scoreBarHeight.height = 0;
  };
};