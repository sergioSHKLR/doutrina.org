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