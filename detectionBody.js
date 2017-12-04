function DetectionBody(width, height, /* color, */ x, y){
    this.counter = 0;  
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx.fillStyle = 'LightBlue';
  ctx.fillRect(this.x, this.y, this.width, this.height);
//   this.update = function () {
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
// };
};

DetectionBody.prototype.update = function () {
    ctx.fillStyle = 'LightBlue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

//Sistema de puntuación y desactivar el arrow una vez se ha sumado puntos.
DetectionBody.prototype.isOnDetectionBody = function (arrow,direction) {
    if (arrow.direction === direction && isActive(arrow)) {
  if ((arrow.y > this.y) && ((arrow.y + arrow.height) < (this.y + this.height)))
  {
      this.counter += 2;
      arrow.status = 'inactive';
      console.log("perfect");
      return true;
  };
  if (isActive(arrow) && (arrow.y > this.y) && ((arrow.y + arrow.height) < (this.y + this.height + 5))) {
      arrow.status = 'inactive';
      this.counter += 1;
      console.log("almost perfect");
      return true;
  };
  console.log("not the right key or miss it");
  };
};