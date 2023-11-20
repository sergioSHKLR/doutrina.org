

// DARK MODE --------------------------------------------------

function activeDark2() {
    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("col2-dm-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col2-lm-btn");
    element.classList.toggle("show");
}

function inactiveDark2() {
    var element = document.body;
    element.classList.remove("dark-mode");
    var element = document.getElementById("col2-lm-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col2-dm-btn");
    element.classList.toggle("hide");
}

function activeDark3() {
    var element = document.body;
    element.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
    document.getElementById("ext-iframe").classList.add('is-dark')
    var element = document.getElementById("col3-dm-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-lm-btn");
    element.classList.toggle("show");
}

function inactiveDark3() {
    var element = document.body;
    element.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
    document.getElementById("ext-iframe").classList.remove('is-dark')
    var element = document.getElementById("col3-lm-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col3-dm-btn");
    element.classList.toggle("hide");
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
    var element = document.getElementById("col2-fs-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col2-ns-btn");
    element.classList.toggle("show");
}

/* Close fullscreen */
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

/* View in fullscreen */
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

/* Close fullscreen */
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

//--------------------------------------------------------------

// SHADE ------------------------------------------------------

function shadesOn() {
    var element = document.getElementById("ext-iframe");
    element.classList.add("shades-on");
    element.classList.remove("shades-off");
    var element = document.getElementById("col3-sh-on-btn");
    element.classList.toggle("hide");
    var element = document.getElementById("col3-sh-off-btn");
    element.classList.toggle("show");
}

function shadesOff() {
    var element = document.getElementById("ext-iframe");
    element.classList.add("shades-off");
    element.classList.remove("shades-on");
    var element = document.getElementById("col3-sh-off-btn");
    element.classList.toggle("show");
    var element = document.getElementById("col3-sh-on-btn");
    element.classList.toggle("hide");
}

//--------------------------------------------------------------

function menuOn() {
    document.getElementById("col1-body").style.display = 'inline-block';
    document.getElementById("col2-menu-on").style.display = 'none';
    document.getElementById("col2-menu-off").style.display = 'inline-block';
}

function menuOff() {
    document.getElementById("col1-body").style.display = 'none';
    document.getElementById("col2-menu-off").style.display = 'none';
    document.getElementById("col2-menu-on").style.display = 'inline-block';
}

// check and enable if dark mode
(function () {
    let mode = localStorage.getItem("mode");
    if (mode == "dark") {
        activeDark3()
    }
})();

// open col2-body links in ext frame
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

//-----


