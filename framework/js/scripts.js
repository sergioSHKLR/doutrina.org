// this js handles fullscreen, side panel, notes panels and anti-distraction curtain.

// FULLSCREEN

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

// CURTAIN
function toggleShades() {
  var element = document.getElementById("ext-iframe");
  element.classList.toggle("shades-on");
}

// MENU BUTTON
function buttonOne() {



  // show-hide column 1
  var z = document.getElementById("col1");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}


