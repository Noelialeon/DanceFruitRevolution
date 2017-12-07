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

//Sistema de puntuación y desactivar el arrow una vez se ha sumado puntos.
DetectionBody.prototype.isOnDetectionBody = function (character, arrow, direction) {
  if (arrow.direction === direction && arrow.status) {
        console.log("perfect");
        character.score += 2;
        arrow.status = false;
        return true;
    };
   if ((arrow.y > (this.y + this.height)) && ((arrow.y + arrow.height) < (this.y + this.height*2))) {
        console.log("almost perfect");
        character.score += 1; 
        arrow.status = false;
        return true;
    };
    character.score -= 1;
    console.log("Miss it");
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