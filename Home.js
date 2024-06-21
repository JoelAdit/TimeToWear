//slider image
currentSliderID = 1;

sliderElement = document.getElementById("slider");
totalSlides = sliderElement.childElementCount;

function next() {
  if (currentSliderID < totalSlides) {
    currentSliderID++;
    showSlide();
  }
}
function prev() {
  if (currentSliderID > 1) {
    currentSliderID--;
    showSlide();
  }
}

function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (var count = 0; count < totalSlides; count=count+1) {
    const element = slides[count];
    if (currentSliderID == count + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}

//offerbar
var popup = document.getElementById("popup");
var popupClose = document.getElementById("popupClose");

popupClose.addEventListener("click", function () {
  popup.style.display = "none";
});

//side div
var Menuicon = document.getElementById("Menuicon");
var sidenav = document.getElementById("sidenav");
var sidenavClose = document.getElementById("sidenavClose");

Menuicon.addEventListener("click", function () {
  sidenav.style.left = "0";

  sidenavClose.addEventListener("click", function () {
    sidenav.style.left = "-50%";
  });
});
