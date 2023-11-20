

// DARK MODE --------------------------------------------------

// CHECK AND ACTIVATE DARK MODE COL2 -------------------------------
(function () {
    let mode = localStorage.getItem("mode");
    if (mode == "dark2") {
        activeDark2()
    }
})();

// DARK MODE COL2 --------------------------------------------------
function activeDark2() {
    // selects body and adds dark mode class
    var element = document.body;
    element.classList.add("dark-mode");
    // set localstorage var mode to dark2
    localStorage.setItem("mode", "dark2");
    // selects iframe and adds dark mode class
    document.getElementById("ext-iframe").classList.add('is-dark')
    // select dark  mode button col2 and hides it
    var element = document.getElementById("col2-dm-btn");
    element.classList.toggle("hide");
    // selects light mode button and shows it
    var element = document.getElementById("col2-lm-btn");
    element.classList.toggle("show");
}

// LIGHT MODE COL2--------------------------------------------------
function inactiveDark2() {
    var element = document.body;
    element.classList.remove("dark-mode");
    localStorage.setItem("mode", "light2");
    var element = document.getElementById("col2-lm-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col2-dm-btn");
    element.classList.toggle("hide");
}

// CHECK AND ACTIVATE DARK MODE COL3 -------------------------------
(function () {
    let mode = localStorage.getItem("mode");
    if (mode == "dark3") {
        activeDark3()
    }
})();

// DARK MODE COL3 --------------------------------------------------
function activeDark3() {
    var element = document.body;
    element.classList.add("dark-mode");
    localStorage.setItem("mode", "dark3");
    document.getElementById("ext-iframe").classList.add('is-dark')
    var element = document.getElementById("col3-dm-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-lm-btn");
    element.classList.toggle("show");
}

// DARK MODE COL3 --------------------------------------------------
function inactiveDark3() {
    var element = document.body;
    element.classList.remove("dark-mode");
    localStorage.setItem("mode", "light3");
    document.getElementById("ext-iframe").classList.remove('is-dark')
    var element = document.getElementById("col3-lm-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col3-dm-btn");
    element.classList.toggle("hide");
}


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

// MENU ----------------------------------------------------------

// MENU ON -------------------------------------------------------
function menuOn() {
    document.getElementById("col1-body").style.display = 'inline-block';
    document.getElementById("col2-menu-on").style.display = 'none';
    document.getElementById("col2-menu-off").style.display = 'inline-block';
}

// MENU OFF -------------------------------------------------------
function menuOff() {
    document.getElementById("col1-body").style.display = 'none';
    document.getElementById("col2-menu-off").style.display = 'none';
    document.getElementById("col2-menu-on").style.display = 'inline-block';
}


// SETS COL2 LINKS TO TARGET EXT --------------------------------
(function () {
    const links = document.querySelectorAll("a[href^='https://pt.m'], a[href^='http://pt.m'], a[href^='https://www.bible'], a[href^='https://www.bible']")
    const host = window.location.hostname

    const isInternalLink = link => new URL(link).hostname === host

    links.forEach(link => {
        if (isInternalLink(link)) return

        link.setAttribute("target", "ext")
        link.setAttribute("rel", "noopener")
    })
})()

// SHADE ------------------------------------------------------

function shadesOn() {
    localStorage.setItem("shades", "shadesOn");
    var element = document.getElementById("ext-iframe");
    element.classList.add("shades-on");
    element.classList.remove("shades-off");
    var element = document.getElementById("col3-sh-on-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-sh-off-btn");
    element.classList.toggle("show");
}

function shadesOff() {
    localStorage.setItem("shades", "shadesOff");
    var element = document.getElementById("ext-iframe");
    element.classList.add("shades-off");
    element.classList.remove("shades-on");
    var element = document.getElementById("col3-sh-off-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col3-sh-on-btn");
    element.classList.toggle("hide");
}

(function () {
    let shades = localStorage.getItem("shades");
    if (shades == "shadesOn") {
        shadesOn()
    }
})();


