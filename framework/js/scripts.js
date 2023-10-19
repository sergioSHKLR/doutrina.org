// this js handles fullscreen, side panel, notes panels and anti-distraction curtain.

/* #region FULLSCREEN */

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
  var z = document.getElementById("open-fullscreen");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  var z = document.getElementById("close-fullscreen");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
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
  var z = document.getElementById("open-fullscreen");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  var z = document.getElementById("close-fullscreen");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
/* #endregion */

/* #region CURTAIN */
function toggleShades() {
  var element = document.getElementById("ext-iframe");
  element.classList.toggle("shades-on");

  var c = document.getElementById("shades-off");
  if (c.style.display === "none") {
    c.style.display = "inline-block";
  } else {
    c.style.display = "none";
  }

  var c = document.getElementById("shades-on");
  if (c.style.display === "inline-block") {
    c.style.display = "none";
  } else {
    c.style.display = "inline-block";
  }
}
/* #endregion */

/* #region  MENU */
function buttonOne() {
  // show-hide column 1
  var z = document.getElementById("col1");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
/* #endregion */

// changes bg color to black
function bgBlack() {
  var element = document.getElementById("content");
  element.classList.remove("grey", "sepia", "navy", "white");
  element.classList.add("black");
  var element = document.getElementById("col2-body");
  element.classList.remove("grey", "sepia", "navy", "white");
  element.classList.add("black");
}

// changes bg color to grey
function bgGrey() {
  var element = document.getElementById("content");
  element.classList.remove("black", "sepia", "navy", "white");
  element.classList.add("grey");
}

// changes bg color to navy
function bgNavy() {
  var element = document.getElementById("content");
  element.classList.remove("grey", "sepia", "black", "white");
  element.classList.add("navy");
}

// changes bg color to sepia
function bgSepia() {
  var element = document.getElementById("content");
  element.classList.remove("grey", "black", "navy", "white");
  element.classList.add("sepia");
}

// changes bg color to white (default)
function bgWhite() {
  var element = document.getElementById("content");
  element.classList.remove("grey", "sepia", "navy", "black");
  element.classList.add("white");
}

// changes font size to large
function fontLarge() {
  var element = document.getElementById("content");
  element.classList.remove("small", "medium");
  element.classList.add("large");
}

// changes font size to medium (default)
function fontMedium() {
  var element = document.getElementById("content");
  element.classList.remove("small", "large");
  element.classList.add("medium");
}

// changes font family to monospace
function fontMono() {
  var element = document.getElementById("content");
  element.classList.remove("sans", "serif", "slab");
  element.classList.add("mono");
}

// changes font family to sans-serif
function fontSans() {
  var element = document.getElementById("content");
  element.classList.remove("serif", "mono", "slab");
  element.classList.add("sans");
}

// changes font family to serif
function fontSerif() {
  var element = document.getElementById("content");
  element.classList.remove("sans", "mono", "slab");
  element.classList.add("serif");
}

// changes font size to Roboto Slab
function fontSlab() {
  var element = document.getElementById("content");
  element.classList.remove("sans", "serif", "mono");
  element.classList.add("slab");
}

// changes font size to small
function fontSmall() {
  var element = document.getElementById("content");
  element.classList.remove("medium", "large");
  element.classList.add("small");
}

// changes line height to 1.1
function lineNarrow() {
  var element = document.getElementById("content");
  element.classList.remove("normal", "wide");
  element.classList.add("narrow");
}

// changes line height to 1.5
function lineNormal() {
  var element = document.getElementById("content");
  element.classList.remove("narrow", "wide");
  element.classList.add("normal");
}

// changes line height to 1.9
function lineWide() {
  var element = document.getElementById("content");
  element.classList.remove("narrow", "normal");
  element.classList.add("wide");
}


// toggles content tools visibility and hides ext panel toggle
function toggleAdjusts() {
  var a = document.getElementById("content-adjusts");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}