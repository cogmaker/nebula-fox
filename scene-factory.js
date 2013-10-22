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
      }).behave('Button, ClickScene');

      var carton = new Joy.Sprite({
        x: 600,
        y: 55,
        name: "le carton",
        src: "assets/carton.png"
      }).bind('load', function() {
        this.pivot.x = (this.width / 2);
        this.pivot.y = (this.width / 2);
      }).behave('Button, ClickProp');

      scene.addChild(background);
      scene.addChild(carton);
      scene.addChild(cog.player);

      scene.viewport.setup({
        width: cog.engine.width,
        height: cog.engine.height
      });
    });
	};
})();
