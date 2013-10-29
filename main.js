(function() {
  var startedSceneFactory = false;
  cog.startSceneFactory = function() {
    if (startedSceneFactory) return;
    startedSceneFactory = true;
    cog.createSceneFactory();
    cog.engine.gotoNextScene(0, "#000");
  };

  setTimeout(cog.startSceneFactory, 3000);
})();
