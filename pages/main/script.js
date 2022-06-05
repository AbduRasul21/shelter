var humburger = document.querySelector(".humburger");
var sidebar = document.querySelector(".sidebar");
var header = document.querySelector(".header");

humburger.addEventListener("click", (event) => {
  sidebar.classList.toggle("show-sidebar");
//   event.stopPropagation();
});
