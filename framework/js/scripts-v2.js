// VERSION 23.12.17

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

// LIGHT MODE 
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

// TOOLS START

//---------------------------------------------------
function function1() {
    localStorage.setItem("text", "increased");
    var element = document.getElementById("col2-body");
    element.classList.remove("td");
    element.classList.remove("tn");
    element.classList.add("ti");
}

function checkMode1() {
    var text = localStorage.getItem("text");
    if (text == "increased") {
        function1();
    }
}

//---------------------------------------------------
function function0() {
    localStorage.setItem("text", "normal");
    var element = document.getElementById("col2-body");
    element.classList.remove("ti");
    element.classList.remove("td");
    element.classList.add("tn");
}

function checkMode0() {
    var text = localStorage.getItem("text");
    if (text == "normal") {
        function0();
    }
}
//---------------------------------------------------

function function2() {
    localStorage.setItem("text", "decreased");
    var element = document.getElementById("col2-body");
    element.classList.remove("ti");
    element.classList.remove("tn");
    element.classList.add("td");
}

function checkMode2() {
    var text = localStorage.getItem("text");
    if (text == "decreased") {
        function2();
    }
}

//---------------------------------------------------

function function3() {
    localStorage.setItem("align", "left");
    var element = document.getElementById("col2-body");
    element.classList.remove("aj");
    element.classList.add("al");
}

function checkMode3() {
    var align = localStorage.getItem("align");
    if (align == "left") {
        function3();
    }
}

//---------------------------------------------------

function function4() {
    localStorage.setItem("align", "justified");
    var element = document.getElementById("col2-body");
    element.classList.remove("al");
    element.classList.add("aj");
}

function checkMode4() {
    var align = localStorage.getItem("align");
    if (align == "justified") {
        function4();
    }
}

//---------------------------------------------------

function function5() {
    localStorage.setItem("font", "sans");
    var element = document.getElementById("col2-body");
    element.classList.remove("f2");
    element.classList.remove("f3");
    element.classList.remove("f4");
    element.classList.add("f1");
}

function checkMode5() {
    var font = localStorage.getItem("font");
    if (font == "sans") {
        function5();
    }
}

//---------------------------------------------------

function function6() {
    localStorage.setItem("font", "serif");
    var element = document.getElementById("col2-body");
    element.classList.remove("f1");
    element.classList.remove("f3");
    element.classList.remove("f4");
    element.classList.add("f2");
}

function checkMode6() {
    var font = localStorage.getItem("font");
    if (font == "serif") {
        function6();
    }
}

//---------------------------------------------------

function function7() {
    localStorage.setItem("font", "mono");
    var element = document.getElementById("col2-body");
    element.classList.remove("f1");
    element.classList.remove("f2");
    element.classList.remove("f4");
    element.classList.add("f3");
}

function checkMode7() {
    var font = localStorage.getItem("font");
    if (font == "mono") {
        function7();
    }
}

//---------------------------------------------------

function function8() {
    localStorage.setItem("font", "slab");
    var element = document.getElementById("col2-body");
    element.classList.remove("f1");
    element.classList.remove("f2");
    element.classList.remove("f3");
    element.classList.add("f4");
}

function checkMode8() {
    var font = localStorage.getItem("font");
    if (font == "slab") {
        function8();
    }
}

//---------------------------------------------------

function function9() {
    localStorage.setItem("density", "small");
    var element = document.getElementById("col2-body");
    element.classList.remove("dm");
    element.classList.remove("dn");
    element.classList.add("ds");
}

function checkMode9() {
    var density = localStorage.getItem("density");
    if (density == "small") {
        function9();
    }
}

//---------------------------------------------------
function function9a() {
    localStorage.setItem("density", "normal");
    var element = document.getElementById("col2-body");
    element.classList.remove("dm");
    element.classList.remove("dn");
    element.classList.add("dn");
}

function checkMode9a() {
    var density = localStorage.getItem("density");
    if (density == "normal") {
        function9a();
    }
}

//---------------------------------------------------

function function10() {
    localStorage.setItem("density", "medium");
    var element = document.getElementById("col2-body");
    element.classList.remove("ds");
    element.classList.remove("dn");
    element.classList.add("dm");
}

function checkMode10() {
    var density = localStorage.getItem("density");
    if (density == "medium") {
        function10();
    }
}

//---------------------------------------------------

function function11() {
    localStorage.setItem("bground", "yellow");
    var element = document.getElementById("col2-body");
    element.classList.remove("b2");
    element.classList.remove("b3");
    element.classList.add("b1");
}

function checkMode11() {
    var bground = localStorage.getItem("bground");
    if (bground == "yellow") {
        function11();
    }
}

//---------------------------------------------------

function function12() {
    localStorage.setItem("bground", "green");
    var element = document.getElementById("col2-body");
    element.classList.remove("b1");
    element.classList.remove("b3");
    element.classList.remove("b4");
    element.classList.add("b2");
}

function checkMode12() {
    var bground = localStorage.getItem("bground");
    if (bground == "green") {
        function12();
    }
}

//---------------------------------------------------

function function13() {
    localStorage.setItem("bground", "pink");
    var element = document.getElementById("col2-body");
    element.classList.remove("b1");
    element.classList.remove("b2");
    element.classList.remove("b4");
    element.classList.add("b3");
}

function checkMode13() {
    var bground = localStorage.getItem("bground");
    if (bground == "pink") {
        function13();
    }
}

//---------------------------------------------------

function function14() {
    localStorage.setItem("bground", "branco");
    var element = document.getElementById("col2-body");
    element.classList.remove("b1");
    element.classList.remove("b2");
    element.classList.remove("b3");
    element.classList.add("b4");
}

function checkMode14() {
    var bground = localStorage.getItem("bground");
    if (bground == "branco") {
        function14();
    }
}

//---------------------------------------------------

function function15() {
    localStorage.setItem("links", "hidden");
    var element = document.getElementById("col2-body");
    element.classList.add("lo");
}

function checkMode15() {
    var links = localStorage.getItem("links");
    if (links == "hidden") {
        function15();
    }
}

//---------------------------------------------------

function functionResetAll() {
    localStorage.removeItem("text");
    localStorage.removeItem("align");
    localStorage.removeItem("font");
    localStorage.removeItem("density");
    localStorage.removeItem("bground");
    localStorage.removeItem("links");
    var element = document.getElementById("col2-body");
    element.classList.remove("td");
    element.classList.remove("tn");
    element.classList.remove("ti");
    element.classList.remove("aj");
    element.classList.remove("al");
    element.classList.remove("f1");
    element.classList.remove("f2");
    element.classList.remove("f3");
    element.classList.remove("f4");
    element.classList.remove("dm");
    element.classList.remove("dn");
    element.classList.remove("ds");
    element.classList.remove("b1");
    element.classList.remove("b2");
    element.classList.remove("b3");
    element.classList.remove("b4");
    element.classList.remove("lo");
}

//---------------------------------------------------

function checkMode() {
    var text = localStorage.getItem("text");
    if (text == "increased") {
        function1();
    }
    if (text == "normal") {
        function0();
    }
    if (text == "decreased") {
        function2();
    }
    var align = localStorage.getItem("align");
    if (align == "left") {
        function3();
    }
    if (align == "justified") {
        function4();
    }
    var font = localStorage.getItem("font");
    if (font == "sans") {
        function5();
    }
    if (font == "serif") {
        function6();
    }
    if (font == "mono") {
        function7();
    }
    if (font == "slab") {
        function8();
    }
    var density = localStorage.getItem("density");
    if (density == "small") {
        function9();
    }
    if (density == "normal") {
        function9a();
    }
    if (density == "medium") {
        function10();
    }
    var bground = localStorage.getItem("bground");
    if (bground == "yellow") {
        function11();
    }
    if (bground == "green") {
        function12();
    }
    if (bground == "pink") {
        function13();
    }
    if (bground == "white") {
        function14();
    }
    var links = localStorage.getItem("links");
    if (links == "hidden") {
        function15();
    }
    var contrast = localStorage.getItem("contrast");
    if (contrast == "dark") {
        darkMode();
    }
}

// TOOLS END

// HYPO ALERT START

function hypoAlert() {
    alert("Caso a aba de anotações não esteja abrindo, clique e arraste o botão do topo.");
}

// HYPO ALERT END

// STRING REPLACE 1 START

var links, x, le;
links = document.getElementsByClassName('w');
for (x = 0, le = links.length; x < le; x++) {
    links[x].href = "https://en.m.wikipedia.org/wiki" + (links[x].pathname);
}

// STRING REPLACE 1 END


// STRING REPLACE 2 START

var links, y, le;
links = document.getElementsByClassName('d');
for (y = 0, le = links.length; y < le; y++) {
    links[y].href = "https://en.m.wiktionary.org/wiki" + (links[y].pathname);
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

// EXT LINKS START

window.onload = function() {
    /* onload code */
 
     var extLinks = document.querySelectorAll(
         "a[href^='https://en'], a[href^='https://maps']");
     var host = window.location.hostname;
 
     var isInternalLink = link => new URL(link).hostname === host;
 
     extLinks.forEach(link => {
         if (isInternalLink(link)) return;
 
         link.setAttribute("target", "ext");
         link.setAttribute("rel", "noopener");
     });
 };

// EXT LINKS END