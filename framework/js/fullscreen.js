// FULLSCREEN ---------------------------------------------------
var elem = document.documentElement;

// OPEN FULLSCREEN COL2 -----------------------------------------
function openFullscreen2() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    var element = document.getElementById("col2-fs-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col2-ns-btn");
    element.classList.toggle("show");
}

// CLOSE FULLSCREEN COL2 -----------------------------------------
function closeFullscreen2() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    var element = document.getElementById("col2-ns-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col2-fs-btn");
    element.classList.toggle("hide");
}

var elem = document.documentElement;

// OPEN FULLSCREEN COL3 ------------------------------------------
function openFullscreen3() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    var element = document.getElementById("col3-fs-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-ns-btn");
    element.classList.toggle("show");
}

// CLOSE FULLSCREEN COL3 -----------------------------------------
function closeFullscreen3() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    var element = document.getElementById("col3-ns-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col3-fs-btn");
    element.classList.toggle("hide");

}