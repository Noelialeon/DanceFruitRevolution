function Arrow(direction, width, height, /* color, */ x, y) {
    this.direction = direction;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.status = 'active';
   };

Arrow.prototype.update = function () {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

Arrow.prototype.newPos = function () {
    this.y -= 3;
  };

function isActive(arrow) {
    if (arrow.status === 'active') {
        return true
    };
};