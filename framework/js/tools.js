
//---------------------------------------------------
function function1() {
    localStorage.setItem("text","increased");
    var element = document.getElementById("col2-body");
    element.classList.remove("td");
    element.classList.toggle("ti");
}

function checkMode1() {
    let text = localStorage.getItem("text");
    if (text == "increased") {
        function1()
    }
}

//---------------------------------------------------

function function2() {
    localStorage.setItem("text","decreased");
    var element = document.getElementById("col2-body");
    element.classList.remove("ti");
    element.classList.add("td");
}

function checkMode2() {
    let text = localStorage.getItem("text");
    if (text == "increased") {
        function2()
    }
}

//---------------------------------------------------

function function3() {
    localStorage.setItem("align","left");
    var element = document.getElementById("col2-body");
    element.classList.remove("aj");
    element.classList.add("al");
}

function checkMode3() {
    let align = localStorage.getItem("align");
    if (align == "left") {
        function3()
    }
}

//---------------------------------------------------

function function4() {
    localStorage.setItem("align","justified");
    var element = document.getElementById("col2-body");
    element.classList.remove("al");
    element.classList.add("aj");
}

function checkMode4() {
    let align = localStorage.getItem("align");
    if (align == "justified") {
        function4()
    }
}

//---------------------------------------------------

function function5() {
    localStorage.setItem("font","sans");
    var element = document.getElementById("col2-body");
    element.classList.remove("f2");
    element.classList.remove("f3");
    element.classList.remove("f4");
    element.classList.add("f1");
}

function checkMode5() {
    let font = localStorage.getItem("font");
    if (font == "sans") {
        function5()
    }
}

//---------------------------------------------------

function function6() {
    localStorage.setItem("font","serif");
    var element = document.getElementById("col2-body");
    element.classList.remove("f1");
    element.classList.remove("f3");
    element.classList.remove("f4");
    element.classList.add("f2");
}

function checkMode6() {
    let font = localStorage.getItem("font");
    if (font == "serif") {
        function6()
    }
}

//---------------------------------------------------

function function7() {
    localStorage.setItem("font","mono");
    var element = document.getElementById("col2-body");
    element.classList.remove("f1");
    element.classList.remove("f2");
    element.classList.remove("f4");
    element.classList.add("f3");
}

function checkMode7() {
    let font = localStorage.getItem("font");
    if (font == "mono") {
        function7()
    }
}

//---------------------------------------------------

function function8() {
    localStorage.setItem("font","slab");
    var element = document.getElementById("col2-body");
    element.classList.remove("f1");
    element.classList.remove("f2");
    element.classList.remove("f3");
    element.classList.add("f4");
}

function checkMode8() {
    let font = localStorage.getItem("font");
    if (font == "slab") {
        function8()
    }
}

//---------------------------------------------------

function function9() {
    localStorage.setItem("density","small");
    var element = document.getElementById("col2-body");
    element.classList.remove("dm");
    element.classList.add("ds");
}

function checkMode9() {
    let density = localStorage.getItem("density");
    if (density == "small") {
        function9()
    }
}

//---------------------------------------------------

function function10() {
    localStorage.setItem("density","medium");
    var element = document.getElementById("col2-body");
    element.classList.remove("ds");
    element.classList.add("dm");
}

function checkMode10() {
    let density = localStorage.getItem("density");
    if (density == "medium") {
        function10()
    }
}

//---------------------------------------------------

function function11() {
    localStorage.setItem("bground","amarelado");
    var element = document.getElementById("col2-body");
    element.classList.remove("b2");
    element.classList.remove("b3");
    element.classList.add("b1");
}

function checkMode11() {
    let bground = localStorage.getItem("bground");
    if (bground == "amarelado") {
        function11()
    }
}

//---------------------------------------------------

function function12() {
    localStorage.setItem("bground","esverdeado");
    var element = document.getElementById("col2-body");
    element.classList.remove("b1");
    element.classList.remove("b3");
    element.classList.add("b2");
}

function checkMode12() {
    let bground = localStorage.getItem("bground");
    if (bground == "esverdeado") {
        function12()
    }
}

//---------------------------------------------------

function function13() {
    localStorage.setItem("bground","roseado");
    var element = document.getElementById("col2-body");
    element.classList.remove("b1");
    element.classList.remove("b2");
    element.classList.add("b3");
}

function checkMode13() {
    let bground = localStorage.getItem("bground");
    if (bground == "roseado") {
        function13()
    }
}

//---------------------------------------------------

