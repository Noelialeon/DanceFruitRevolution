function Arrow(ctx, direction, x, y, width, height) {
    this.ctx = ctx;
    this.direction = direction;
    this.width = width;
    this.height = height;
    this.x = x
    this.y = y;
    this.status = undefined;
    switch (this.direction) {
        case 'right':
            this.x = x;
            this._drawArrowImage('images/arrowRight.png');
            break;
        case 'up':
            this.x = x + 50;
            this._drawArrowImage('images/arrowUp.png');
            break;
        case 'down':
            this.x = x + 100;
            this._drawArrowImage('images/arrowDown.png');
            break;
        case 'left':
            this.x = x + 150;
            this._drawArrowImage('images/arrowLeft.png');
            break;
    };
};

Arrow.prototype.update = function () {
    if(this.status === false){
        switch (this.direction) {
            case 'right':
                this._drawArrowImage('images/arrowRightOff.png');
                break;
            case 'up':
                this._drawArrowImage('images/arrowUpOff.png');
                break;
            case 'down':
                this._drawArrowImage('images/arrowDownOff.png');
                break;
            case 'left':
                this._drawArrowImage('images/arrowLeftOff.png');
                break;
        };
    };
  this._drawImage();
};

Arrow.prototype._drawArrowImage = function(image){
    this.image = new Image();
    this.image.src = image;
    this._drawImage();
};

Arrow.prototype._drawImage = function(){
    this.ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height
    );
};

Arrow.prototype.newPos = function () {
    this.y -= 3;
};