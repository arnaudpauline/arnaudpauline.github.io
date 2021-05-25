
// modal pour photos

//Calendrier Novembre
var modal3 = document.getElementById("myModal3");
                 
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("imgViewCalNov");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}
  
var span3 = document.getElementsByClassName("close")[0];

span3.onclick = function() { 
  modal3.style.display = "none";
}


//Calendrier Décembre
var modal4 = document.getElementById("myModal4");
                 
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("imgViewCalDec");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}
  
var span4 = document.getElementsByClassName("close")[1];

span4.onclick = function() { 
  modal4.style.display = "none";
}


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

var span1 = document.getElementsByClassName("close")[2];

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
  
var span2 = document.getElementsByClassName("close")[3];

span2.onclick = function() { 
  modal2.style.display = "none";
}