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

// toggles ext panel visibility
function openExternal() {
  document.getElementById("ext-wrapper").style.display = "block";
  document.getElementById("open-external").style.display = "none";
}

function closeExternal() {
  document.getElementById("ext-wrapper").style.display = "none";
  document.getElementById("open-external").style.display = "block";
}

// toggles fullscreen
let myDocument = document.documentElement;
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (btn.textContent == "🖥️") {
    if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen();
    }
    btn.textContent = "💻";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    btn.textContent = "🖥️";
  }
});

// toggles anti-distraction curtain
function toggleShades() {
  var element = document.getElementById("ext-panel");
  element.classList.toggle("shades-on");
}

// toggles sidebar visibility
function openSidebar() {
  document.getElementById("side-wrapper").style.display = "block";
  document.getElementById("open-sidebar").style.display = "none";
}

function closeSidebar() {
  document.getElementById("side-wrapper").style.display = "none";
  document.getElementById("open-sidebar").style.display = "block";
}

// toggles ext links visibility
function textEffects() {
  var x = document.getElementById("text-effects");
  if (x.style.display === "inline-flex") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-flex";
  }
}

function increaseFontsize() {
  let mainDiv = document.getElementById("content-panel");
  mainDiv.style.fontSize = 'large'; // change font size to xx-large
}

function decreaseFontsize() {
  let mainDiv = document.getElementById("content-panel");
  mainDiv.style.fontSize = 'small'; // change font size to xx-large
}

const EL_body = document.querySelector("content-panel");
const ELS_fontSize = document.querySelectorAll(".fontSize");
localStorage.fontSize = localStorage.fontSize || 16; // Read or default to 16px
function changeSize() {
  EL_body.style.fontSize = `${localStorage.fontSize}px`;
}
ELS_fontSize.forEach(el => el.addEventListener("click", function () {
  localStorage.fontSize = parseInt(localStorage.fontSize) + parseInt(el.value);
  changeSize();
}));
// Change size on subsequent page load
changeSize();