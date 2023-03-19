function readAloud(e, n) {
    var s = "https://assets.readaloudwidget.com/embed/";
    /iPad|iPhone|iPod/.test(navigator.userAgent) && (e.src = s + "sound/silence.mp3", e.play(), "undefined" != typeof speechSynthesis && speechSynthesis.speak(new SpeechSynthesisUtterance(" ")));
    var t = document.createElement("script");
    t.onload = function() {
      readAloudInit(e, n)
    }, t.src = s + "js/readaloud.min.js", document.head.appendChild(t)
  }