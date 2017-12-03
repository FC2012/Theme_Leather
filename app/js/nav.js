var openItem = document.getElementById("BURGER");
var navItem = document.getElementById("NAV");

openItem.addEventListener("click", activNav );

function activNav () {
  if (navItem.classList.contains("-active") === true) {
    navItem.classList.remove("-active");
    openItem.classList.remove("-open");
  } else {
    navItem.classList.add("-active");
    openItem.classList.add("-open");
  }
}

