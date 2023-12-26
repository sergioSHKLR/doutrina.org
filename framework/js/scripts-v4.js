// VERSION 23.12.22a

// MENU START

// MENU ON 
function menuOn() {
    document.getElementById("col1-body").style.display = 'inline-block';
    document.getElementById("col2-menu-on").style.display = 'none';
    document.getElementById("col2-menu-off").style.display = 'inline-block';
}

// MENU OFF 
function menuOff() {
    document.getElementById("col1-body").style.display = 'none';
    document.getElementById("col2-menu-off").style.display = 'none';
    document.getElementById("col2-menu-on").style.display = 'inline-block';
}

// MENU END

// FULLSCREEN START
var elem = document.documentElement;

// OPEN FULLSCREEN  
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    var element7 = document.getElementById("col2-fs-btn");
    element7.classList.add("hide");
    var element8 = document.getElementById("col2-ns-btn");
    element8.classList.add("show");
}

// CLOSE FULLSCREEN  
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    var element9 = document.getElementById("col2-ns-btn");
    element9.classList.add("show");
    var element10 = document.getElementById("col2-fs-btn");
    element10.classList.add("hide");
}

var elem = document.documentElement;

// FULLSCREEN END

// DARK MODE START

function darkMode() {
    var element1 = document.body;
    element1.classList.add("dark-mode");
    var element2 = document.getElementById("col2-dm-btn");
    element2.classList.add("hide");
    var element3 = document.getElementById("col2-lm-btn");
    element3.classList.remove("hide");
    localStorage.setItem("contrast", "dark");
}

function lightMode() {
    var element4 = document.body;
    element4.classList.remove("dark-mode");
    var element5 = document.getElementById("col2-lm-btn");
    element5.classList.add("hide");
    var element6 = document.getElementById("col2-dm-btn");
    element6.classList.remove("hide");
    localStorage.setItem("contrast", "light");
}

// DARK MODE END

// TOOLS START

  const EL_body = document.querySelector("#col2-body");
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


//---------------------------------------------------
function toolsFSSM() {
    localStorage.setItem("font-size", "small");
    var element = document.getElementById("col2-body");
    element.classList.remove("fslg");
    element.classList.add("fssm");
}
//---------------------------------------------------
function toolsFSLG() {
    localStorage.setItem("font-size", "large");
    var element = document.getElementById("col2-body");
    element.classList.remove("fssm");
    element.classList.add("fslg");
}

//---------------------------------------------------
function toolsTAJU() {
    localStorage.setItem("text-align", "justified");
    var element = document.getElementById("col2-body");
    element.classList.add("taju");
}
//---------------------------------------------------
function toolsFFSE() {
    localStorage.setItem("font-family", "serif");
    var element = document.getElementById("col2-body");
    element.classList.remove("ffsa");
    element.classList.remove("ffmo");
    element.classList.add("ffse");
}
//---------------------------------------------------
function toolsFFSA() {
    localStorage.setItem("font-family", "sans");
    var element = document.getElementById("col2-body");
    element.classList.remove("ffse");
    element.classList.remove("ffmo");
    element.classList.add("ffsa");
}
//---------------------------------------------------
function toolsFFMO() {
    localStorage.setItem("font-family", "mono");
    var element = document.getElementById("col2-body");
    element.classList.remove("ffse");
    element.classList.remove("ffsa");
    element.classList.add("ffmo");
}
//---------------------------------------------------
function toolsLHNA() {
    localStorage.setItem("line-height", "narrow");
    var element = document.getElementById("col2-body");
    element.classList.remove("lhwd");
    element.classList.add("lhna");
}
//---------------------------------------------------
function toolsLHWD() {
    localStorage.setItem("line-height", "wide");
    var element = document.getElementById("col2-body");
    element.classList.remove("lhna");
    element.classList.add("lhwd");
}
//---------------------------------------------------
function toolsBCYE() {
    localStorage.setItem("bground", "yellow");
    var element = document.getElementById("col2-body");
    element.classList.remove("bcgr");
    element.classList.remove("bcpi");
    element.classList.add("bcye");
}
//---------------------------------------------------
function toolsBCGR() {
    localStorage.setItem("bground", "green");
    var element = document.getElementById("col2-body");
    element.classList.remove("bcgr");
    element.classList.remove("bcpi");
    element.classList.add("bcgr");
}
//---------------------------------------------------
function toolsBCPI() {
    localStorage.setItem("bground", "pink");
    var element = document.getElementById("col2-body");
    element.classList.remove("bcye");
    element.classList.remove("bcgr");
    element.classList.add("bcpi");
}
//---------------------------------------------------
function toolsALOFF() {
    localStorage.setItem("any-link", "hidden");
    var element = document.getElementById("col2-body");
    element.classList.add("aloff");
}
//---------------------------------------------------
function toolsRESET() {
    localStorage.removeItem("font-size");
    localStorage.removeItem("fontSize");
    localStorage.removeItem("text-align");
    localStorage.removeItem("font-family");
    localStorage.removeItem("line-height");
    localStorage.removeItem("bground");
    localStorage.removeItem("any-link");
    var element = document.getElementById("col2-body");
    element.classList.remove("fsdn");
    element.classList.remove("fsup");
    element.classList.remove("taju");
    element.classList.remove("ffse");
    element.classList.remove("ffsa");
    element.classList.remove("ffmo");
    element.classList.remove("lhdn");
    element.classList.remove("lhup");
    element.classList.remove("bcye");
    element.classList.remove("bcgr");
    element.classList.remove("bcpi");
    element.classList.remove("aloff");
}
//---------------------------------------------------
function toolsFFSM() {
    var fontSize = localStorage.getItem("font-size");
    if (fontSize == "small") { 
        toolsFSSM();
    }
    if (fontSize == "large") {
        toolsFSLG();
    }
    var textAlign = localStorage.getItem("text-align");
    if (textAlign == "justified") {
        toolsTAJU();
    }
    var font = localStorage.getItem("font-family");
    if (font == "sans") {
        toolsFFSA();
    }
    if (font == "serif") {
        toolsFFSE();
    }
    if (font == "mono") {
        toolsFFMO();
    }
    var density = localStorage.getItem("line-height");
    if (density == "narrow") {
        toolsLHNA();
    }
    if (density == "wide") {
        toolsLHWD();
    }
    var bground = localStorage.getItem("bground");
    if (bground == "yellow") {
        toolsBCYE();
    }
    if (bground == "green") {
        toolsBCGR();
    }
    if (bground == "pink") {
        toolsBCPI();
    }
    var links = localStorage.getItem("any-link");
    if (links == "hidden") {
        toolsALOFF();
    }
    var contrast = localStorage.getItem("contrast");
    if (contrast == "dark") {
        darkMode();
        }}
// TOOLS END

// STRING REPLACE 1 START

var links, x, le;
links = document.getElementsByClassName('w');
for (x = 0, le = links.length; x < le; x++) {
    links[x].href = "https://pt.m.wikipedia.org/wiki" + (links[x].pathname);
}

// STRING REPLACE 1 END

// STRING REPLACE 2 START

var links, y, le;
links = document.getElementsByClassName('d');
for (y = 0, le = links.length; y < le; y++) {
    links[y].href = "https://pt.m.wiktionary.org/wiki" + (links[y].pathname);
}

// STRING REPLACE 2 END

// STRING REPLACE 3 START

var links, z, le;
links = document.getElementsByClassName('l');
for (z = 0, le = links.length; z < le; z++) {
    links[z].href = "https://www.luzespirita.org.br/index.php?lisPage=enciclopedia&item=" + (links[z].pathname.slice(1));
}

// STRING REPLACE 3 END

// STRING REPLACE 4 START

var links, k, le;
links = document.getElementsByClassName('m');
for (k = 0, le = links.length; k < le; k++) {
    links[k].href = "https://maps.google.com/maps?hl=en&t=k&z=12&ie=UTF8&iwloc=B&output=embed&q=" + (links[k].pathname.slice(1));
}

// STRING REPLACE 4 END

// STRING REPLACE 5 START

var links, u, le;
links = document.getElementsByClassName('v');
for (u = 0, le = links.length; u < le; u++) {
    links[u].href = "https://www.youtube.com/embed/" + (links[u].pathname.slice(1)) + (links[u].search);
}

// STRING REPLACE 5 END

// STRING REPLACE 6 START

var links, b, le;
links = document.getElementsByClassName('b');
for (b = 0, le = links.length; b < le; b++) {
    links[b].href = "https://www.bible.com/pt/bible/212/" + (links[b].pathname);
}

// STRING REPLACE 6 END

// EXT LINKS START

window.onload = function () {
    /* onload code */

    var extLinks = document.querySelectorAll(
        "a[href^='https://pt'], a[href^='https://maps'], a[href^='https://www']");
    var host = window.location.hostname;

    var isInternalLink = link => new URL(link).hostname === host;

    extLinks.forEach(link => {
        if (isInternalLink(link)) return;

        link.setAttribute("target", "ext");
        link.setAttribute("rel", "noopener");
    });
};

// EXT LINKS END

// HYPO ALERT START

function hypoAlert() {
    alert("In case the annotations tab is not opening with a click, use a click and drag motion instead (on the topmost button).");
}

// HYPO ALERT END