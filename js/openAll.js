function openAll() {
  var x = document.getElementsByTagName("details");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("open", "true");
  }
}