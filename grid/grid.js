// this js handles text adjustments such as: font family, font size; line height, and background color. Also, it handles toggles such as: fullscreen, visibility of content tools, ext links, side panel, external panels and anti-distraction curtain.


// toggles sidebar visibility
function openSidebar() {
  document.getElementById("col1").style.display = "block";
  document.getElementById("open-sidebar").style.display = "none";
}

function closeSidebar() {
  document.getElementById("col1").style.display = "none";
  document.getElementById("open-sidebar").style.display = "block";
}


function toggleFullscreen(view = document.body) {
    view.requestFullScreen = view.requestFullScreen || view.webkitRequestFullScreen || view.mozRequestFullScreen || function () { return false };
    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false };
    (document.webkitIsFullScreen || document.mozFullScreen || false) ? document.cancelFullScreen() : view.requestFullScreen();
}

// toggles anti-distraction curtain
function toggleShades() {
  var element = document.getElementById("ext-iframe");
  element.classList.toggle("shades-on");
}