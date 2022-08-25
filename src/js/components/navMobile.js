document.addEventListener("DOMContentLoaded", function () {
  let close = document.querySelector(".navMobile__close");
  let burgerNav = document.querySelector(".burger__nav");
  let menu = document.querySelector(".navMobile");

  burgerNav.addEventListener("click", function () {
    menu.classList.add("navMobile_active");
  });
  close.addEventListener("click", function () {
    menu.classList.remove("navMobile_active");
  });
});
