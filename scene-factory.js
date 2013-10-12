(function() {
	cog.createSceneFactory = function() {
    cog.engine.createScene(function(scene) {
      var background = new Joy.Sprite({
        position: scene.viewport.position,
        src: "assets/arcadia-factory.jpg"
      }).bind('load', function() {
        // Change pivot to center
        this.pivot.x = (this.width / 2);
        this.pivot.y = (this.height / 2);
        // Add clickable behaviour
      }).behave('Button, Pointer');

      scene.addChild(background);
      scene.addChild(cog.player);

      scene.viewport.setup({
        width: cog.engine.width,
        height: cog.engine.height
      });
    });
	};
})();
