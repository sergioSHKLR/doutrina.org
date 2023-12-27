// VER 23.12.24

// LINE HEIGHT START

const EL_body1 = document.querySelector("#col2-body");
const ELS_lineHeight = document.querySelectorAll(".lineHeight");
localStorage.lineHeight = localStorage.lineHeight || 24; // Read or default to 16px
function changeHeight() {
  EL_body1.style.lineHeight = `${localStorage.lineHeight}px`;
}
ELS_lineHeight.forEach(el => el.addEventListener("click", function () {
  localStorage.lineHeight = parseInt(localStorage.lineHeight) + parseInt(el.value);
  changeHeight();
}));
// Change height on subsequent page load
changeHeight();

// LINE HEIGHT END
