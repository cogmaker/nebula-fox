(function() {
  canvas = document.getElementById('cog');

  window.cog = {};
	cog.engine = new Joy.Engine({
	  debug: true,
	  canvas: canvas
	});
}());
