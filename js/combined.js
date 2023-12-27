// VERSION 23.12.24

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

//-----------------------------------------------------------------------------

// CHECK ALIGN START

const EL_body2 = document.querySelector("#col2-body");
const ELS_textAlign = document.querySelectorAll(".textAlign");
localStorage.textAlign = localStorage.textAlign || "left"; // Read or default to left
function changeAlign() {
    EL_body2.style.textAlign = `${localStorage.textAlign}`;
}

// Change size on subsequent page load
changeAlign();

// CHECK ALIGN END

//-----------------------------------------------------------------------------

// CHECK BGROUND START

const EL_body4 = document.querySelector("#col2-body");
const ELS_bground = document.querySelectorAll(".bground");
localStorage.backgroundColor = localStorage.backgroundColor || "transparent"; // Read or default to transparent
function changeBground() {
    EL_body4.style.backgroundColor = localStorage.backgroundColor
};


// Change size on subsequent page load
changeBground();

// CHECK BGROUND END

//-----------------------------------------------------------------------------

// CHECK CONTRAST START

let contrastMode = localStorage.getItem("contrast");

if (contrastMode === "dark") {
    darkMode(); // set state of darkMode on page load
}

// CHECK CONTRAST END

//-----------------------------------------------------------------------------

// CHECK FAMILY START

const EL_body3 = document.querySelector("#col2-body");
const ELS_fontFamily = document.querySelectorAll(".fontFamily");
localStorage.fontFamily = localStorage.fontFamily || "Roboto Slab"; // Read or default to slab
function changeFamily() {
    EL_body3.style.fontFamily = `${localStorage.fontFamily}`;
}

// Change size on subsequent page load
changeFamily();

// CHECK FAMILY END

//-----------------------------------------------------------------------------

// CHECK LINE START

const EL_body1 = document.querySelector("#col2-body");
const ELS_lineHeight = document.querySelectorAll(".lineHeight");
localStorage.lineHeight = localStorage.lineHeight || 24; // Read or default to 16px
function changeHeight() {
    EL_body1.style.lineHeight = `${localStorage.lineHeight}px`;
}
ELS_lineHeight.forEach(el => el.addEventListener("click", function () {
    localStorage.lineHeight = parseInt(localStorage.lineHeight) + parseInt(el.value);
    changeHeight();
}));
// Change height on subsequent page load
changeHeight();

// CHECK LINE END

//-----------------------------------------------------------------------------

// CHECK SIZE START

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

// CHECK SIZE END

//-----------------------------------------------------------------------------

// DARK MODE START

function darkMode() {
    var element00 = document.body;
    element00.classList.add("dark-mode");
    var element01 = document.getElementById("col2-dm-btn");
    element01.classList.add("hide");
    var element02 = document.getElementById("col2-lm-btn");
    element02.classList.remove("hide");
    localStorage.setItem("contrast", "dark");
}

function lightMode() {
    var element03 = document.body;
    element03.classList.remove("dark-mode");
    var element04 = document.getElementById("col2-lm-btn");
    element04.classList.add("hide");
    var element05 = document.getElementById("col2-dm-btn");
    element05.classList.remove("hide");
    localStorage.setItem("contrast", "light");
}

// DARK MODE END

//-----------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------

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
    var element15 = document.getElementById("col2-fs-btn");
    element15.classList.toggle("hide");
    var element16 = document.getElementById("col2-ns-btn");
    element16.classList.toggle("show");
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
    var element18 = document.getElementById("col2-ns-btn");
    element18.classList.toggle("show");
    var element19 = document.getElementById("col2-fs-btn");
    element19.classList.toggle("hide");
}

var elem = document.documentElement;

// FULLSCREEN END

//-----------------------------------------------------------------------------

// HYPO ALERT START

function hypoAlert() {
    alert("Caso a aba de anotações não esteja abrindo, clique e arraste o botão do topo.");
}

// HYPO ALERT END

//-----------------------------------------------------------------------------

// STRING REPLACE 1 START

var links, x, le;
links = document.getElementsByClassName('w');
for (x = 0, le = links.length; x < le; x++) {
    links[x].href = "https://pt.m.wikipedia.org/wiki" + (links[x].pathname);
}

// STRING REPLACE 1 END

//-----------------------------------------------------------------------------

// STRING REPLACE 2 START

var links, y, le;
links = document.getElementsByClassName('d');
for (y = 0, le = links.length; y < le; y++) {
    links[y].href = "https://pt.m.wiktionary.org/wiki" + (links[y].pathname);
}

// STRING REPLACE 2 END

//-----------------------------------------------------------------------------

// STRING REPLACE 3 START

var links, z, le;
links = document.getElementsByClassName('l');
for (z = 0, le = links.length; z < le; z++) {
    links[z].href = "https://www.luzespirita.org.br/index.php?lisPage=enciclopedia&item=" + (links[z].pathname.slice(1));
}

// STRING REPLACE 3 END

//-----------------------------------------------------------------------------

// STRING REPLACE 4 START

var links, k, le;
links = document.getElementsByClassName('m');
for (k = 0, le = links.length; k < le; k++) {
    links[k].href = "https://maps.google.com/maps?hl=en&t=k&z=12&ie=UTF8&iwloc=B&output=embed&q=" + (links[k].pathname.slice(1));
}

// STRING REPLACE 4 END

//-----------------------------------------------------------------------------

// STRING REPLACE 5 START

var links, u, le;
links = document.getElementsByClassName('v');
for (u = 0, le = links.length; u < le; u++) {
    links[u].href = "https://www.youtube.com/embed/" + (links[u].pathname.slice(1)) + (links[u].search);
}

// STRING REPLACE 5 END

//-----------------------------------------------------------------------------

// STRING REPLACE 6 START

var links, b, le;
links = document.getElementsByClassName('b');
for (b = 0, le = links.length; b < le; b++) {
    links[b].href = "https://www.bible.com/pt/bible/212/" + (links[b].pathname);
}

// STRING REPLACE 6 END

//-----------------------------------------------------------------------------

// VERSION 23.12.24

// TOOLS START

// SHOW MENU

function function04() {
    var element04 = document.getElementById("vert-tools-buttons");
    element04.classList.toggle("hide");
  }

//---------------------------------------------------

function function05() {
    localStorage.setItem("textAlign", "justify");
    var element05 = document.getElementById("col2-body");
    element05.classList.add("ta-justify");
}

//---------------------------------------------------

function function06() {
    localStorage.setItem("fontFamily", "serif");
    var element06 = document.getElementById("col2-body");
    element06.classList.remove("ff-sans");
    element06.classList.remove("ff-mono");
    element06.classList.add("ff-serif");
}

//---------------------------------------------------

function function07() {
    localStorage.setItem("fontFamily", "sans");
    var element07 = document.getElementById("col2-body");
    element07.classList.remove("ff-serif");
    element07.classList.remove("ff-mono");
    element07.classList.add("ff-sans");
}

//---------------------------------------------------

function function08() {
    localStorage.setItem("fontFamily", "mono");
    var element08 = document.getElementById("col2-body");
    element08.classList.remove("ff-serif");
    element08.classList.remove("ff-sans");
    element08.classList.add("ff-mono");
}

//---------------------------------------------------

function function09() {
    localStorage.setItem("lineHeight", "narrow");
    var element09 = document.getElementById("col2-body");
    element09.classList.remove("lh-wide");
    element09.classList.add("lh-narrow");
}

//---------------------------------------------------

function function10() {
    localStorage.setItem("lineHeight", "wide");
    var element10 = document.getElementById("col2-body");
    element10.classList.remove("lh-narrow");
    element10.classList.add("lh-wide");
}

//---------------------------------------------------

function function11() {
    localStorage.setItem("backgroundColor", "#ffff001a");
    var element11 = document.getElementById("col2-body");
    element11.classList.remove("bg-green");
    element11.classList.remove("bg-pink");
    element11.classList.add("bg-yellow");
}

//---------------------------------------------------

function function12() {
    localStorage.setItem("backgroundColor", "#00ff001a");
    var element12 = document.getElementById("col2-body");
    element12.classList.remove("bg-yellow");
    element12.classList.remove("bg-pink");
    element12.classList.add("bg-green");
}

//---------------------------------------------------

function function13() {
    localStorage.setItem("backgroundColor", "#fff0f51a");
    var element13 = document.getElementById("col2-body");
    element13.classList.remove("bg-yellow");
    element13.classList.remove("bg-green");
    element13.classList.add("bg-pink");
}

//---------------------------------------------------

function function14() {
    localStorage.setItem("textDecoration", "none");
    var element14 = document.querySelectorAll("#col2-body a:link");
    element14.classList.add("links-off");
}

//---------------------------------------------------

function functionReset() {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("textAlign");
    localStorage.removeItem("fontFamily");
    localStorage.removeItem("lineHeight");
    localStorage.removeItem("backgroundColor");
    localStorage.removeItem("textDecoration");
    var element = document.getElementById("col2-body");
    element.classList.remove("justify");
    element.classList.remove("ff-se");
    element.classList.remove("ff-sa");
    element.classList.remove("ff-mo");
    element.classList.remove("lh-narrow");
    element.classList.remove("lh-wide");
    element.classList.remove("bg-yellow");
    element.classList.remove("bg-green");
    element.classList.remove("bg-pink");
    element.classList.remove("none");
}

// TOOLS END

//---------------------------------------------------

// WEBSHARE START

const shareData = {
    title: "💧 doutrina.org",
    text: "❤️ Amai-vos e 🎓 instruí-vos!",
    url: "https://doutrina.org",
};

const btn = document.querySelector("#webshare");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);
        resultPara.textContent = "Compartilhado com sucesso!";
    } catch (err) {
        resultPara.textContent = "Erro ao compartilhar";
    }
});

// WEBSHARE END

//---------------------------------------------------
