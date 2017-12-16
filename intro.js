// $('.start').click(function(){
//   $(canvas).toggleClass('active');
// };



// function Intro(ctx){
//   this.x = 50;
//   this.y = 50;
//   this.width = 150;
//   this.height = 150;
//   this.ctx = ctx;
//   this.radius = 20;
//   this.frameNo = 0;
//   this.update();
//   this.clickLoad();
// };
    
// Intro.prototype.start = function(){
//   this.gameInterval = setInterval(this._updateIntroArea.bind(this), 20);
// };

// Intro.prototype._clear = function (){
//   this.ctx.clearRect(0, 0, canvas.width, canvas.height);
// };
// Intro.prototype._updateIntroArea = function() {
//   this._clear();
//   this.frameNo += 1;
//   //pinta
//   this.update();
// };

// Intro.prototype.update = function () {
//   this._roundedRect();
// };

// ///resolver esto
// Intro.prototype.clickLoad = function(){
//   document.getElementById('canvas').addEventListener('click',function(){
//     clearInterval(this.gameInterval);
//     startGame();
//   }.bind(this));
// };


// Intro.prototype._roundedRect = function(){
//   this.ctx.fillStyle = this.color;
//   this.ctx.beginPath();
//   this.ctx.moveTo(this.x, this.y + this.radius);
//   this.ctx.lineTo(this.x, this.y + this.height - this.radius);
//   this.ctx.quadraticCurveTo(this.x, this.y + this.height, this.x + this.radius,  this.y + this.height);
//   this.ctx.lineTo( this.x + this.width - this.radius,  this.y + this.height);
//   this.ctx.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width, this.y + this.height - this.radius);
//   this.ctx.lineTo( this.x + this.width, this.y + this.radius);
//   this.ctx.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width - this.radius, this.y);
//   this.ctx.lineTo( this.x + this.radius, this.y);
//   this.ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.radius);
//   this.ctx.fill();
//   this.ctx.closePath();
// };