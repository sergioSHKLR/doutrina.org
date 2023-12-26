// VER 23.12.24

// PERSIST MODE 07-08-09 START

const EL_body4 = document.querySelector("#col2-body");
const ELS_bground = document.querySelectorAll(".bground");
localStorage.backgroundColor = localStorage.backgroundColor || "transparent"; // Read or default to transparent
function changeBground() {
  EL_body4.style.backgroundColor = localStorage.backgroundColor};


// Change size on subsequent page load
changeBground();

// PERSIST MODE 07-08-09 END