(function() {
  canvas = document.getElementById('cog');

  window.cog = {};

  cog.config = {
    playerSpriteScale: 0.07
  }

	cog.engine = new Joy.Engine({
	  debug: false,
	  canvas: canvas
	});
}());
