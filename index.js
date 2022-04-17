let slideNum = 0;
slideShow();

function slideShow(){
  let slides = document.getElementsByClassName("slide");
  let slideBg = document.getElementById("right")
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  slideNum++;
  if(slideNum > slides.length){
    slideNum = 1;
  }
  slides[slideNum-1].style.display = "block";
  slides[slideNum-1].style.position = "sticky";
  setTimeout(slideShow,10000);
}