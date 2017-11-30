var counter = 0;
function Arrow(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function () {//función para pintar
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};

Arrow.prototype.newPos = function () {
    this.y -= 3;
};

Arrow.prototype.detectInput = function(){
    if((arrow.y > detectionBody.y) && ((arrow.y + arrow.height) < (detectionBody.y + detectionBody.height)))
    {
   console.log("perfect");
   counter =+1;
   console.log(counter);
    return true
}
};

document.onkeydown = function(){
    if(arrow.detectInput() === true){
        
    } else {
     
        console.log('too early!');
    };
};