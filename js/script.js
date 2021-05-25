//navbar responsive
function myFunction() {
    var x = document.getElementById("mysidebar");
    var screen = document.getElementById("screen");

    if (x.className === "sidebar") {
      x.className += " responsive";
    } else {
      x.className = "sidebar";
    }

    if (screen.className === "screen-i") {
      screen.className += " screen-v";
    } else {
      screen.className = "screen-i";
    }
  }

