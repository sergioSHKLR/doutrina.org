// VERSION 23.12.24

// DARK MODE START

function darkMode() {
    var element = document.body;
    element.classList.add("dark-mode");
    var element = document.getElementById("col2-dm-btn");
    element.classList.add("hide");
    var element = document.getElementById("col2-lm-btn");
    element.classList.remove("hide");
    localStorage.setItem("contrast","dark");
}

function lightMode() {
    var element = document.body;
    element.classList.remove("dark-mode");
    var element = document.getElementById("col2-lm-btn");
    element.classList.add("hide");
    var element = document.getElementById("col2-dm-btn");
    element.classList.remove("hide");
    localStorage.setItem("contrast","light");
}

// DARK MODE END


