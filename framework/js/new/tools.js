// VERSION 23.12.24

// TOOLS START

// SHOW MENU

function function00() {
    var element00 = document.getElementById("vert-tools-buttons");
    element00.classList.toggle("hide");
  }

//---------------------------------------------------

function function01() {
    localStorage.setItem("textAlign", "justify");
    var element01 = document.getElementById("col2-body");
    element01.classList.add("ta-justify");
}

//---------------------------------------------------

function function02() {
    localStorage.setItem("fontFamily", "serif");
    var element02 = document.getElementById("col2-body");
    element02.classList.remove("ff-sans");
    element02.classList.remove("ff-mono");
    element02.classList.add("ff-serif");
}

//---------------------------------------------------

function function03() {
    localStorage.setItem("fontFamily", "sans");
    var element03 = document.getElementById("col2-body");
    element03.classList.remove("ff-serif");
    element03.classList.remove("ff-mono");
    element03.classList.add("ff-sans");
}

//---------------------------------------------------

function function04() {
    localStorage.setItem("fontFamily", "mono");
    var element04 = document.getElementById("col2-body");
    element04.classList.remove("ff-serif");
    element04.classList.remove("ff-sans");
    element04.classList.add("ff-mono");
}

//---------------------------------------------------

function function05() {
    localStorage.setItem("lineHeight", "narrow");
    var element05 = document.getElementById("col2-body");
    element05.classList.remove("lh-wide");
    element05.classList.add("lh-narrow");
}

//---------------------------------------------------

function function06() {
    localStorage.setItem("lineHeight", "wide");
    var element06 = document.getElementById("col2-body");
    element06.classList.remove("lh-narrow");
    element06.classList.add("lh-wide");
}

//---------------------------------------------------

function function07() {
    localStorage.setItem("backgroundColor", "#ffff001a");
    var element07 = document.getElementById("col2-body");
    element07.classList.remove("bg-green");
    element07.classList.remove("bg-pink");
    element07.classList.add("bg-yellow");
}

//---------------------------------------------------

function function08() {
    localStorage.setItem("backgroundColor", "#00ff001a");
    var element08 = document.getElementById("col2-body");
    element08.classList.remove("bg-yellow");
    element08.classList.remove("bg-pink");
    element08.classList.add("bg-green");
}

//---------------------------------------------------

function function09() {
    localStorage.setItem("backgroundColor", "#ff00001a");
    var element09 = document.getElementById("col2-body");
    element09.classList.remove("bg-yellow");
    element09.classList.remove("bg-green");
    element09.classList.add("bg-pink");
}

//---------------------------------------------------

function function10() {
    localStorage.setItem("textDecoration", "none");
    var element10 = document.querySelectorAll("#col2-body a:link");
    element10.classList.add("links-off");
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

//---------------------------------------------------

// TOOLS END
