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


// modal pour photos
  //Amiciel img formulaire
var modal1 = document.getElementById("myModal1");
                  
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("imgViewF");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

var span1 = document.getElementsByClassName("close")[0];

span1.onclick = function() { 
  modal1.style.display = "none";
}

  //Amiciel img tableau
var modal2 = document.getElementById("myModal2");
                 
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("imgViewT");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
  
var span2 = document.getElementsByClassName("close")[1];

span2.onclick = function() { 
  modal2.style.display = "none";
}