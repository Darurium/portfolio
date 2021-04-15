const humburger = document.querySelector(".hamburger"),
      close = document.querySelector(".mobile-menu__close"),
      menu = document.querySelector(".mobile-menu");

humburger.addEventListener("click", () => {
    menu.classList.add("mobile-menu__active");
})

close.addEventListener("click", () => {
    menu.classList.remove("mobile-menu__active");
})
