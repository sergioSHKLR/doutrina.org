const EL_body = document.querySelector(".content");
const ELS_fontSize = document.querySelectorAll(".fontSize");
localStorage.fontSize = localStorage.fontSize || 16; // Read or default to 16px
function changeSize() {
  EL_body.style.fontSize = `${localStorage.fontSize}px`;
}
ELS_fontSize.forEach(el => el.addEventListener("click", function () {
  localStorage.fontSize = parseInt(localStorage.fontSize) + parseInt(el.value);
  changeSize();
}));
// Change size on subsequent page load
changeSize();