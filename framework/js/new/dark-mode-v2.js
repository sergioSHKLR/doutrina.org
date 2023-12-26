function checkLocalstorage() {
    if (localStorage.getItem("contrast") == "dark") {
      darkMode(); //if dark mode was on, run this function
    } else {
      lightMode(); //if dark mode was on, run this function
    }
  }