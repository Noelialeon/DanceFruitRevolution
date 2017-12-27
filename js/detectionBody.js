function DetectionBody(ctx, x, y, width, height, radius, color){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.ctx = ctx;
  this.color = color;
  this._roundedRect();
};

DetectionBody.prototype.update = function () {
  this._roundedRect();
};

DetectionBody.prototype._roundedRect = function(){
  this.ctx.lineWidth = 0.5;
  this.ctx.beginPath();
  this.ctx.moveTo(this.x, this.y + this.radius);
  this.ctx.lineTo(this.x, this.y + this.height - this.radius);
  this.ctx.quadraticCurveTo(this.x, this.y + this.height, this.x + this.radius,  this.y + this.height);
  this.ctx.lineTo( this.x + this.width - this.radius,  this.y + this.height);
  this.ctx.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width, this.y + this.height - this.radius);
  this.ctx.lineTo( this.x + this.width, this.y + this.radius);
  this.ctx.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width - this.radius, this.y);
  this.ctx.lineTo( this.x + this.radius, this.y);
  this.ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.radius);
  this.ctx.strokeStyle = this.color;
  this.ctx.stroke();
  this.ctx.closePath();
};

function Neon(ctx, detectionBody, image){
  this.ctx = ctx;
  this.detectionBody = detectionBody;
  this.x = detectionBody.x - 60;
  this.y = detectionBody.y - 25;
  this.curFrame = 0;
  this.spriteWidth = 646; 
  this.spriteHeight = 94; 
  this.rows = 1; 
  this.cols = 2;
  this.width = this.spriteWidth / this.cols;
  this.height = this.spriteHeight;
  this.srcX = 0; 
  this.srcY = 0;
  this.speed = 500;
  this.image = new Image();
  this.image.src = image;
  this.frameCount = 2;
  this.curRow = 0;
}

Neon.prototype.updateNeon = function(){
  ctx.clearRect(this.x, this.y, this.width, this.height);
  this.neonInterval = setInterval(this._updateNeon.bind(this), this.speed);
};

Neon.prototype._updateNeon = function(){
this.curFrame = ++this.curFrame % this.frameCount; 
this.srcX = this.curFrame * this.width;
};

Neon.prototype.drawImage = function(){
  this.ctx.drawImage(this.image,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};

Neon.prototype.stopNeon= function(){
  clearInterval(this.neonInterval);
};
