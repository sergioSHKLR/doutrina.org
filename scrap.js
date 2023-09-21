
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  };
  {
  var x = document.getElementById("btn");
  if (x.innerHTML === "ON") {
    x.innerHTML = "OFF";
  } else {
    x.innerHTML = "ON";
  }
}
}