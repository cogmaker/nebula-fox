(function() {
  var numRects = 3;

  Joy.Behaviour.define('LayerTransform', {
    // On click
    CLICK: function(e) {
      this.locked = true;
      var that = this;

      var complete = function () {
        that.locked = false;
      }

      var completions = 0;
      new Joy.Tween(cog.player.position).to({
        x: e.x - cog.player.width/2 - 10,
        y: that.position.y - (that.scaleRatio * cog.config.playerSpriteScale)
          + cog.engine.height/numRects
      }).easing(Joy.TweenManager.Easing.Sinusoidal.InOut)
        .start()

      new Joy.Tween(cog.player.scale).to({
        x: cog.config.playerSpriteScale * that.scaleRatio,
        y: cog.config.playerSpriteScale * that.scaleRatio
      }, 2000).easing( Joy.TweenManager.Easing.Exponential.Out )
        .start()
        .onComplete(complete);

    }
  });

  cog.layer = {};
  cog.layer.init = function(scene) {
    var rects = [];
    for (var i = 0; i < numRects; i++) {
      var rect = new Joy.Rect({
        x: 0,
        y: i * (cog.engine.height / numRects),
        height: cog.engine.height / numRects,
        width: cog.engine.width
      }).behave('Button, LayerTransform')
        .colorize(new Joy.Color(0, 0, 0, 0));

      rect.scaleRatio = Math.pow(2, i);
      rect.clickId = i;

      console.log(rect);

      rects.push(rect);
      scene.addChild(rect);
    }
  };
})();
