(function() {
  var numRects = 3;

  Joy.Behaviour.define('LayerTransform', {
    // On click
    CLICK: function(e) {
      this.locked = true;
      var that = this;

      new Joy.Tween(cog.player.position).to({
        x: e.x - cog.player.width/2 - 10,
        y: that.position.y - cog.player.height + cog.engine.height/numRects
      })
      .easing(Joy.TweenManager.Easing.Sinusoidal.InOut)
      .start()
      .onComplete(function () { that.locked = false; });
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
