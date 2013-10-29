(function() {
  canvas = document.getElementById('cog');

  window.cog = {};
	cog.engine = new Joy.Engine({
	  debug: false,
	  canvas: canvas
	});
}());
