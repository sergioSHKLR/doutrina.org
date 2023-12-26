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
    var element = document.getElementById("col2-body");
    element.classList.remove("lh-wide");
    element.classList.add("lh-narrow");
}

//---------------------------------------------------

function function06() {
    localStorage.setItem("lineHeight", "wide");
    var element = document.getElementById("col2-body");
    element.classList.remove("lh-narrow");
    element.classList.add("lh-wide");
}

//---------------------------------------------------

function function07() {
    localStorage.setItem("backgroundColor", "#ffff001a");
    var element = document.getElementById("col2-body");
    element.classList.remove("bg-green");
    element.classList.remove("bg-pink");
    element.classList.add("bg-yellow");
}

//---------------------------------------------------

function function08() {
    localStorage.setItem("backgroundColor", "#00ff001a");
    var element = document.getElementById("col2-body");
    element.classList.remove("bg-yellow");
    element.classList.remove("bg-pink");
    element.classList.add("bg-green");
}

//---------------------------------------------------

function function09() {
    localStorage.setItem("backgroundColor", "#fff0f51a");
    var element = document.getElementById("col2-body");
    element.classList.remove("bg-yellow");
    element.classList.remove("bg-green");
    element.classList.add("bg-pink");
}

//---------------------------------------------------

function function10() {
    localStorage.setItem("textDecoration", "none");
    var element = document.getElementById("col2-body");
    element.classList.add("links-off");
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
