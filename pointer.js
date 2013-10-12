(function() {
  // Create custom mouse behaviour, to be attached on any DisplayObject
  // Button behaviours can handle MOUSE_OVER and MOUSE_OUT events.
  Joy.Behaviour.define('Pointer', {
    // On click
    CLICK: function(e) {
      var that = this;
      this.locked = true;
      
      new Joy.Tween(cog.player.position).to({
        x: e.x - cog.player.width/2 - 10
      })
      .easing(Joy.TweenManager.Easing.Sinusoidal.InOut)
      .start()
      .onComplete(function () {
        that.locked = false;
      });
    }
  });
}());
