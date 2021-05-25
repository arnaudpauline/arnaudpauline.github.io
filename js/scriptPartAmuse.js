
// modal pour photos

//Calendrier Novembre
var modal13 = document.getElementById("myModal13");
                 
var img13 = document.getElementById("myImg13");
var modalImg13 = document.getElementById("imgUSPA");
var captionText13 = document.getElementById("caption13");
img13.onclick = function(){
  modal13.style.display = "block";
  modalImg13.src = this.src;
  captionText13.innerHTML = this.alt;
}
  
var span13 = document.getElementsByClassName("close")[0];

span13.onclick = function() { 
  modal13.style.display = "none";
}
