

// DARK MODE --------------------------------------------------

function activeDark2() {
    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("col2-dark-mode");
    element.classList.toggle("hide");
    var element = document.getElementById("col2-light-mode");
    element.classList.toggle("show");
}

function inactiveDark2() {
    var element = document.body;
    element.classList.remove("dark-mode");
    var element = document.getElementById("col2-dark-mode");
    element.classList.toggle("hide");
    var element = document.getElementById("col2-light-mode");
    element.classList.toggle("show");
}

function activeDark3() {
    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("col3-dark-mode");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-light-mode");
    element.classList.toggle("show");
    var element = document.getElementById("ext-iframe");
    element.classList.remove("shades-on");
    element.classList.add("darken");
}

function inactiveDark3() {
    var element = document.body;
    element.classList.remove("dark-mode");
    var element = document.getElementById("col3-dark-mode");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-light-mode");
    element.classList.toggle("show");
}

//---------------------------------------------------------------

// FULLSCREEN ---------------------------------------------------

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen2() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    var element = document.getElementById("col2-full-screen");
    element.classList.add("hide");
    element.classList.remove("show");
    var element = document.getElementById("col2-normal-screen");
    element.classList.add("show");
    element.classList.remove("hide");}

/* Close fullscreen */
function closeFullscreen2() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    var element = document.getElementById("col2-normal-screen");
    element.classList.add("hide");
    element.classList.remove("show");
    var element = document.getElementById("col2-full-screen");
    element.classList.add("show");
    element.classList.remove("hide");}

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen3() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    var element = document.getElementById("col3-full-screen");
    element.classList.add("hide");
    element.classList.remove("show");
    var element = document.getElementById("col3-normal-screen");
    element.classList.add("show");
    element.classList.remove("hide");
}

/* Close fullscreen */
function closeFullscreen3() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    var element = document.getElementById("col3-normal-screen");
    element.classList.add("hide");
    element.classList.remove("show");
    var element = document.getElementById("col3-full-screen");
    element.classList.add("show");
    element.classList.remove("hide");

} 

//--------------------------------------------------------------

// SHADE ------------------------------------------------------

function shadesOn() {
    var element = document.getElementById("ext-iframe");
    element.classList.add("shades-on");
    element.classList.remove("shades-off");
    var element = document.getElementById("col3-shades-on");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-shades-off");
    element.classList.toggle("show");
}

function shadesOff() {
    var element = document.getElementById("ext-iframe");
    element.classList.add("shades-off");
    element.classList.remove("shades-on");
    var element = document.getElementById("col3-shades-on");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-shades-off");
    element.classList.toggle("show");
}

//--------------------------------------------------------------


function toggleMenu() {
    var x = document.getElementById("col1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }