
window.addEventListener("DOMContentLoaded", function(e) {
	
  var myHilitor = new Hilitor2("playground");
  myHilitor.setMatchType("left");

  var matchIndex = -1;
  var matches = 0;

  var container = document.getElementById("playground");
  var searchEl  = document.getElementById("keywords");
  var counterEl = document.getElementById("counter");
  var navEl     = document.getElementById("navigate");
  var navPre    = document.getElementById("prev");
  var navNext   = document.getElementById("next");
  var navCancel = document.getElementById("cancel");
  var regexEl   = document.getElementById("regex")

  var searchTrigger = function(e) {
    matches = myHilitor.apply(searchEl.value);
    regexEl.innerHTML = "Regex: " + myHilitor.getRegex();
    displayNavigation();
  };
  searchEl.addEventListener("keyup", searchTrigger, false);

  navPre.addEventListener("click", function(e) {
    doNav(-1);
    e.preventDefault();
  }, false);

  navNext.addEventListener("click", function(e) {
    doNav(1);
    e.preventDefault();
  }, false);

  navCancel.addEventListener("click", function(e) {
    searchEl.value = "";
    searchTrigger();
    regexEl.innerHTML = counterEl.innerHTML = "";
    container.scrollTop = 0;
    e.preventDefault();
  }, false);

  var displayNavigation = function()
  {
    matchIndex = -1;
    counterEl.innerHTML = matches + ((matches == 1) ? " match" : " matches");
    if(matches > 0) {
      navEl.style.display = "inline";
      navPre.disabled = true;
      navNext.disabled = false;
    } else {
      navEl.style.display = "none";
    }
  };

  var doNav = function(offset)
  {
    matchIndex += offset;
    matchIndex = matchIndex % matches;
    myHilitor.gotoMatch(matchIndex);
    navPre.disabled = (matchIndex <= 0);
    navNext.disabled = (matchIndex >= matches - 1);
  };

}, false);
