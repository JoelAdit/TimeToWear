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
  for (var index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSliderID == index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}
