// window event list
function eventListeners() {
  const ui = new UI();
  window.addEventListener("load", function () {
    ui.hidePreloader();
  });
  // nav btn
  document.querySelector(".navBtn").addEventListener("click", function () {
    ui.toggleNav();
  });
}
eventListeners();

function UI() {}
UI.prototype.hidePreloader = function () {
  document.querySelector(".preloader").style.display = "none";
};
UI.prototype.toggleNav = function () {
  document.querySelector(".nav").classList.toggle("nav--show");
};
