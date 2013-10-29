(function() {
  // Create custom mouse behaviour, to be attached on any DisplayObject
  // Button behaviours can handle MOUSE_OVER and MOUSE_OUT events.
  Joy.Behaviour.define('ClickScene', {
    // On click
    CLICK: function(e) {
      var that = this;
      this.locked = true;

      console.log('hey guys i\'m here');

      new Joy.Tween(cog.player.position).to({
        x: e.x - cog.player.width/2 - 10
      })
      .easing(Joy.TweenManager.Easing.Sinusoidal.InOut)
      .start()
      .onComplete(function () { that.locked = false; });
    }
  });

  Joy.Behaviour.define('SkipIntro', {
    // On click
    CLICK: function(e) {
      cog.startSceneFactory();
    }
  });

  var lecarton_utterance = new Joy.Sound({
    urls: ['assets/le-carton.wav']
  });

  var musique = new Joy.Sound({
    urls: ['assets/musique.mp3'],
    loop: true,
    autoplay: true,
    onend: function() { console.log('je mange une fille tre jollie. --The K.'); }
  });

  Joy.Behaviour.define('ClickProp', {
    CLICK: function(e) {
      var that = this;
      this.locked = true;

      new Joy.Tween(cog.player.position).to({
        x: that.position.x - cog.player.width/2
      })
      .easing(Joy.TweenManager.Easing.Sinusoidal.InOut)
      .start()
      .onComplete(function() {
        that.locked = false;
        lecarton_utterance.play();
      });
    }
  });
})();
