function ScoreBar(ctx, character){
  this.width = 170;
  this.height = 40;
  this.x = 50;
  this.y = 20
  this.ctx = ctx;
  this.character = character;
  this.hideBar = new HideBar(ctx, character);
  this.printScoreBar();
};

ScoreBar.prototype.printScoreBar = function(){
  this.ctx.save();
  this.hideBar.printHideBar();
  this.ctx.globalCompositeOperation = 'source-atop';
  this.image = new Image();
  this.image.src = 'images/Progress-bar-points.png';
  this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  this.ctx.restore();
};

ScoreBar.prototype.update = function(){
this.printScoreBar();
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
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(this.x, this.y, this.width/4, this.height);
};

HideBar.prototype.newWidth = function(){
  this.width = this.character.score *10;
};