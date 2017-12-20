function Song(src) {
  this.sound = document.getElementById('song');
  this.sound.src = src;
  this.sound.style.display = "none";
  this.play();
};

Song.prototype.play = function(){
  this.sound.play();
};

Song.prototype.stop = function(){
  this.sound.pause();  
};