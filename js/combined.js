// this js handles text adjustments such as: font family, font size; line height, and background color. Also, it handles toggles such as: fullscreen, visibility of content tools, ext links, side panel, external panels and anti-distraction curtain.

// changes bg color to black
function bgBlack() {
  var element = document.getElementById("content-wrapper");
  element.classList.remove("grey", "sepia", "navy", "white");
  element.classList.add("black");
}

// changes bg color to grey
function bgGrey() {
  var element = document.getElementById("content-wrapper");
  element.classList.remove("black", "sepia", "navy", "white");
  element.classList.add("grey");
}

// changes bg color to navy
function bgNavy() {
  var element = document.getElementById("content-wrapper");
  element.classList.remove("grey", "sepia", "black", "white");
  element.classList.add("navy");
}

// changes bg color to sepia
function bgSepia() {
  var element = document.getElementById("content-wrapper");
  element.classList.remove("grey", "black", "navy", "white");
  element.classList.add("sepia");
}

// changes bg color to white (default)
function bgWhite() {
  var element = document.getElementById("content-wrapper");
  element.classList.remove("grey", "sepia", "navy", "black");
  element.classList.add("white");
}

// changes font size to large
function fontLarge() {
  var element = document.getElementById("content-panel");
  element.classList.remove("small", "medium");
  element.classList.add("large");
}

// changes font size to medium (default)
function fontMedium() {
  var element = document.getElementById("content-panel");
  element.classList.remove("small", "large");
  element.classList.add("medium");
}

// changes font family to monospace
function fontMono() {
  var element = document.getElementById("content-panel");
  element.classList.remove("sans", "serif", "slab");
  element.classList.add("mono");
}

// changes font family to sans-serif
function fontSans() {
  var element = document.getElementById("content-panel");
  element.classList.remove("serif", "mono", "slab");
  element.classList.add("sans");
}

// changes font family to serif
function fontSerif() {
  var element = document.getElementById("content-panel");
  element.classList.remove("sans", "mono", "slab");
  element.classList.add("serif");
}

// changes font size to Roboto Slab
function fontSlab() {
  var element = document.getElementById("content-panel");
  element.classList.remove("sans", "serif", "mono");
  element.classList.add("slab");
}

// changes font size to small
function fontSmall() {
  var element = document.getElementById("content-panel");
  element.classList.remove("medium", "large");
  element.classList.add("small");
}

// increases font size
function increaseFontsize() {
  let mainDiv = document.getElementById("content-panel");
  mainDiv.style.fontSize = 'large'; // change font size to xx-large
}

// decreases font size
function decreaseFontsize() {
  let mainDiv = document.getElementById("content-panel");
  mainDiv.style.fontSize = 'small'; // change font size to xx-large
}

// changes line height to 1.1
function lineNarrow() {
  var element = document.getElementById("content-panel");
  element.classList.remove("normal", "wide");
  element.classList.add("narrow");
}

// changes line height to 1.5
function lineNormal() {
  var element = document.getElementById("content-panel");
  element.classList.remove("narrow", "wide");
  element.classList.add("normal");
}

// changes line height to 1.9
function lineWide() {
  var element = document.getElementById("content-panel");
  element.classList.remove("narrow", "normal");
  element.classList.add("wide");
}

// PANELS

// open right panel
function openPanel() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("menu").style.display = "none";
}

// close right panel
function closePanel() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

// open notes panel
function openNotes() {
  document.getElementById("notes").style.display = "block";
}

// close notes panel
function closeNotes() {
  document.getElementById("notes").style.display = "none";
}

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

// toggles anti-distraction curtain
function toggleShades() {
  var element = document.getElementById("ext-iframe");
  element.classList.toggle("shades-on");
}

// SCROLL INDICATOR

// When the user scrolls the page, execute scrollIndicator 
window.onscroll = function () { scrollIndicator() };

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}