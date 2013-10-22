(function() {
  var player = new Joy.Sprite({
    x: 10,
    y: 40,
    name: "player",
    src: "assets/cog.png"
  }).bind('load', function() {
    // Change pivot to center
    this.pivot.x = 0,
    this.pivot.y = 0
    // Add clickable behaviour
  });

  player.hDir = 1;
  player.vDir = 1;
  player.speed = 3;
  player.scale.set(0.07, 0.07);

  cog.player = player;
})();
