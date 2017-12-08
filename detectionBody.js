function DetectionBody(ctx, width, height, x, y, radius, color){
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
  this.ctx.fillStyle = this.color;
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
  this.ctx.fill();
  this.ctx.closePath();
};