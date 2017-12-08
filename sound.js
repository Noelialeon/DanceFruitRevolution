function Song(src, game) {
  this.sound = document.getElementById('song');
  this.sound.src = src;
  this.sound.style.display = "none";
  this.game = game;
  this.play();
  this.sound.onended = function(){
    game.stop();
  };
};


Song.prototype.play = function(){
      this.sound.play();
};

Song.prototype.stop = function(){
      this.sound.pause();  
};

Song.prototype.onended = function(){
  this.game.stop()}