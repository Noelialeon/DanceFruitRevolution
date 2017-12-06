function DetectionBody(ctx, width, height, x, y, radius, color){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.radius = radius;
  ctx.fillStyle = color;
  this._roundedRect(ctx, this.x, this.y, this.width, this.height, this.radius);
};

DetectionBody.prototype.update = function () {
  ctx.fillStyle = this.fillStyle;
  this._roundedRect(ctx, this.x, this.y, this.width, this.height, this.radius);
};

//Sistema de puntuación y desactivar el arrow una vez se ha sumado puntos.
DetectionBody.prototype.isOnDetectionBody = function (character, arrow, direction) {
  if (arrow.direction === direction && arrow.status) {
    if (arrow.y >= (this.y - 5) && ((arrow.y + arrow.height) < (this.y + this.height + 5))){ 
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
    console.log("Miss it");
  };
};

DetectionBody.prototype._roundedRect = function(ctx,x,y,width,height,radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.fill();
    ctx.closePath();
};