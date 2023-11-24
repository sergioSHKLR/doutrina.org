

// DARK MODE -------------------------------------------------------

// DARK MODE COL2 --------------------------------------------------
function darkMode2() {
    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("col2-dm-btn");
    element.classList.add("hide");
    var element = document.getElementById("col2-lm-btn");
    element.classList.remove("hide");
    localStorage.setItem("contrast","dark");
}

// LIGHT MODE COL2--------------------------------------------------
function lightMode2() {
    var element = document.body;
    element.classList.remove("dark-mode");
    var element = document.getElementById("col2-lm-btn");
    element.classList.add("hide");
    var element = document.getElementById("col2-dm-btn");
    element.classList.remove("hide");
    localStorage.setItem("contrast","light");
}

// DARK MODE COL3 --------------------------------------------------
function darkMode3() {
    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("col3-dm-btn");
    element.classList.add("hide");
    var element = document.getElementById("col3-lm-btn");
    element.classList.remove("hide");
    localStorage.setItem("contrast","dark");
}

// LIGHT MODE COL3--------------------------------------------------
function lightMode3() {
    var element = document.body;
    element.classList.remove("dark-mode");
    var element = document.getElementById("col3-lm-btn");
    element.classList.add("hide");
    var element = document.getElementById("col3-dm-btn");
    element.classList.remove("hide");
    localStorage.setItem("contrast","light");
}

// CHECK AND ACTIVATE DARK MODE COL3 -------------------------------
function checkMode() {
    let mode = localStorage.getItem("contrast");
    if (mode == "dark") {
        darkMode2()
    }
}

// CHECK AND ACTIVATE DARK MODE COL3 -------------------------------
function checkMode() {
    let mode = localStorage.getItem("contrast");
    if (mode == "dark") {
        darkMode3()
    }
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


// CHECK AND ACTIVATE DARK MODE COL2 -------------------------------
(function () {
    let mode = localStorage.getItem("mode");
    if (mode === "dark2") {
        activeDark2()
    }
});