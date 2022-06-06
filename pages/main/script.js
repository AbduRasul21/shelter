var humburger = document.querySelector(".humburger");
var sidebar = document.querySelector(".sidebar");
var header = document.querySelector(".header");

humburger.addEventListener("click", (event) => {
  sidebar.classList.toggle("show-sidebar");
  humburger.classList.toggle("rotate");
  event.stopPropagation();
});

document.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  humburger.classList.remove("rotate");
});
