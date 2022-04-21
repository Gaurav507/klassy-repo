let navLinks = document.getElementsByClassName("nav-link");
navLinks[0].classList.add("activeLink");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeLink");
    current[0].classList.remove("activeLink");
    // current[0].className = current[0].className.replace(" activeLink", "");
    this.classList.add("activeLink");
  });
}


// When the user scrolls down 750px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    // alert("hii boss u have scrolled by 80");
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").classList.add("slideFromTopAnimation");
    // document.getElementById("navbar").style.paddingBottom = "0.5vw";
    // document.getElementById("navbar").classList.add("slideToTopAnimation");    
  } else {
    document.getElementById("navbar").style.position = "relative";
    // document.getElementById("navbar").classList.remove("slideToTopAnimation");
    document.getElementById("navbar").classList.remove("slideFromTopAnimation");
  }
}

function toggleMenu() {
  let navLinks = document.querySelector(".nav-links");
  if(navLinks.style.display === "none"){
      navLinks.style.display = "block";
  }
  else{
      navLinks.style.display = "none";
  }
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
