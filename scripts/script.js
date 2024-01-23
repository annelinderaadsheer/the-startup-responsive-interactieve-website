document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", function () {
    toggleMenu();
  });

  navLinks.forEach((n) =>
    n.addEventListener("click", () => {
      toggleMenu();
    })
  );

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show-nav-menu");
  }
});
