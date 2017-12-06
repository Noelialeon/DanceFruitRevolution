function Arrow(direction, y, width, height) {
    this.direction = direction;
    this.width = width;
    this.height = height;
    this.y = y;
    this.status = true;
    switch (this.direction) {
        case 'right':
            this.x = 50;
            this.image = new Image();
            this.image.src = 'images/arrowRight.png';
            this._drawImage();
            break;
        case 'up':
            this.x = 100;
            this.image = new Image();
            this.image.src = 'images/arrowUp.png';
            this._drawImage();
            break;
        case 'down':
            this.x = 150;
            this.image = new Image();
            this.image.src = 'images/arrowDown.png';
            this._drawImage();
            break;
        case 'left':
            this.x = 200;
            this.image = new Image();
            this.image.src = 'images/arrowLeft.png';
            this._drawImage();
            break;
    };
};

Arrow.prototype.update = function () {
    if(this.status === false){
        switch (this.direction) {
            case 'right':
                this.x = 50;
                this.image = new Image();
                this.image.src = 'images/arrowRightOff.png';
                this._drawImage();
                break;
            case 'up':
                this.x = 100;
                this.image = new Image();
                this.image.src = 'images/arrowUpOff.png';
                this._drawImage();
                break;
            case 'down':
                this.x = 150;
                this.image = new Image();
                this.image.src = 'images/arrowDownOff.png';
                this._drawImage();
                break;
            case 'left':
                this.x = 200;
                this.image = new Image();
                this.image.src = 'images/arrowLeftOff.png';
                this._drawImage();
                break;
        };
    };
  this._drawImage();
};

Arrow.prototype._drawImage = function(){
    ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height
    );
};

Arrow.prototype.newPos = function () {
    this.y -= 3;
};