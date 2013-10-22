(function() {
	cog.engine.createScene(function(scene) {
	  Joy.Behaviour.define('BouncyBehaviour', {
	    UPDATE: function () {
	      this.position.x += this.speed * this.hDir * Joy.deltaTime;
	      this.position.y += this.speed * this.vDir * Joy.deltaTime;

	      if ((this.position.x + this.width) > cog.engine.width) {
          this.hDir = -1;
	      } else if (this.position.x < 0) {
          this.hDir = 1;
	      }

	      if ((this.position.y + this.height) > cog.engine.height) {
          this.vDir = -1;
	      } else if (this.position.y < 0) {
          this.vDir = 1;
	      }
	    }
	  });

	  var spriteUrl = "assets/cog-logo.png";
	  var spriteSmall = new Joy.Sprite({
	    x: 10,
	    y: 10,
	    src: spriteUrl
	  }).behave('BouncyBehaviour');
	  spriteSmall.hDir = 1;
	  spriteSmall.vDir = 1;
	  spriteSmall.speed = 2;
	  spriteSmall.scale.set(0.5, 0.5);

	  var spriteNormal = new Joy.Sprite({
	    x: 10,
	    y: 10,
	    src: spriteUrl
	  }).behave('BouncyBehaviour');
	  spriteNormal.hDir = -1;
	  spriteNormal.vDir = 1;
	  spriteNormal.speed = 1;

	  var spriteBig = new Joy.Sprite({
	    x: 10,
	    y: 10,
	    src: spriteUrl
	  }).behave('BouncyBehaviour');
	  spriteBig.hDir = 1;
	  spriteBig.vDir = -1;
	  spriteBig.speed = 0.5;
	  spriteBig.scale.set(2, 2);

	  scene.addChild(spriteBig);
	  scene.addChild(spriteNormal);
	  scene.addChild(spriteSmall);
	});
})();
