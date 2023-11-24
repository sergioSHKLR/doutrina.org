
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