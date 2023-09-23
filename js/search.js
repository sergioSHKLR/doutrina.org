const searchBtn = document.getElementById("searchBtn");
const searchElement = document.querySelector("content-panel"); // Any element you want to search
const backup = searchElement.innerHTML;

searchBtn.addEventListener("click", function () {
  searchElement.innerHTML = backup;

  const search = prompt("Search");
  const text = searchElement.innerHTML.split(" ");

  if (search != null) {
    for (let i = 0; i < text.length; i++) {
      let index = text[i];
      let splitIndex = index.split("");
      if (index.toLowerCase().includes(search.toLowerCase())) {
        for (let si = 0; si < index.length; si++) {
          if (search.toLowerCase().includes(index[si].toLowerCase())) {
            splitIndex[si] = `<mark>${index[si]}</mark>`;
            text[i] = splitIndex.join("");
          }
        }
      }
    }
    searchElement.innerHTML = text.join(" ");
  }
});