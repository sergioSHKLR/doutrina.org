// VER 23.12.24

// PERSIST MODE 01 START

const EL_body2 = document.querySelector("#col2-body");
const ELS_textAlign = document.querySelectorAll(".textAlign");
localStorage.textAlign = localStorage.textAlign || "left"; // Read or default to left
function changeAlign() {
  EL_body2.style.textAlign = `${localStorage.textAlign}`;
}

// Change size on subsequent page load
changeAlign();

// PERSIST MODE 01 END