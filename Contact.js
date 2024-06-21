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
