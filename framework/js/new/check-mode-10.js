// VER 23.12.24

// PERSIST MODE 10 START

const EL_body5 = document.querySelector("#col2-body a");
const ELS_textDecoration = document.querySelectorAll(".textDecoration");
localStorage.textDecoration = localStorage.textDecoration || "underline"; // Read or default to underline
function changeDecoration() {
  EL_body5.style.textDecoration = `${localStorage.textDecoration}`;
}

// Change size on subsequent page load
changeDecoration();

// PERSIST MODE 10 END