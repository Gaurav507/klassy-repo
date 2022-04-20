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
const displayColored1 = document.querySelector(".foodtype1");
const displayColored2 = document.querySelector(".foodtype2");
const displayColored3 = document.querySelector(".foodtype3");
const displayBox1 = document.querySelector(".box1");
const displayBox2 = document.querySelector(".box2");
const displayBox3 = document.querySelector(".box3");

displayColored1.addEventListener("click", function () {
  displayColored1.classList.add("colorred");
  displayColored2.classList.remove("colorred");
  displayColored3.classList.remove("colorred");
  displayBox1.classList.remove("notvisiblebox");
  displayBox2.classList.add("notvisiblebox");
  displayBox3.classList.add("notvisiblebox");
});
displayColored2.addEventListener("click", function () {
  displayColored2.classList.add("colorred");
  displayColored1.classList.remove("colorred");
  displayColored3.classList.remove("colorred");
  displayBox2.classList.remove("notvisiblebox");
  displayBox1.classList.add("notvisiblebox");
  displayBox3.classList.add("notvisiblebox");
});
displayColored3.addEventListener("click", function () {
  displayColored3.classList.add("colorred");
  displayColored2.classList.remove("colorred");
  displayColored1.classList.remove("colorred");
  displayBox3.classList.remove("notvisiblebox");
  displayBox2.classList.add("notvisiblebox");
  displayBox1.classList.add("notvisiblebox");
});
