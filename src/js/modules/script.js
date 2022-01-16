const menuLinks = document.querySelectorAll(".menu__item");

menuLinks.forEach((item) => {
  item.addEventListener("click", functions.menuClose);
  item.addEventListener("click", functions.bodyUnlock);
});
