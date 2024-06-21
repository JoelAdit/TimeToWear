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

//Product search function

var productContainer = document.getElementById("productContainer");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();

  for (count = 0; count < productList.length; count = count + 1) {
    var productname = productList[count].querySelector("h1").textContent;

    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});
