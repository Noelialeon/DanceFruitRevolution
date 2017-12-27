function Arrow(ctx, direction, y, width, height, detectionBody) {
    this.ctx = ctx;
    this.direction = direction;
    this.width = width;
    this.height = height;
    this.x;
    this.y = y;
    this.detectionBody = detectionBody;
    this.status = undefined;
    switch (this.direction) {
        case 'left':
            this.x = this.detectionBody.x + ((this.detectionBody.width - (this.width*4) - this.width)/4)*0.5;
            this._drawArrowImage('images/arrowLeft.png');
            break;
        case 'up':
            this.x = this.detectionBody.x + this.width + ((this.detectionBody.width - (this.width*4) - this.width)/4)*1.5;
            this._drawArrowImage('images/arrowUp.png');
            break;
        case 'down':
            this.x = this.detectionBody.x  + this.detectionBody.width - this.width*2 - ((this.detectionBody.width - (this.width*4) - this.width)/3)*1.5;
            this._drawArrowImage('images/arrowDown.png');
            break;
        case 'right':
            this.x =  this.detectionBody.x + this.detectionBody.width - this.width - ((this.detectionBody.width - (this.width*4) - this.width)/4)*0.5;
            this._drawArrowImage('images/arrowRight.png');
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