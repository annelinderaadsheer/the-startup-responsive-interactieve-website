// 1. Element zoeken
// 2. Event listener toevoegen
// 3. Functie uitvoeren als gebeurtenis wordt geactiveerd

// 1. Elementen zoeken

document.addEventListener("DOMContentLoaded", function () {
  // Zoekt het hamburger element in de HTML
  const hamburger = document.querySelector(".hamburger");
  // Zoekt het navigatie-menu element in de HTML
  const navMenu = document.querySelector(".nav-menu");
  // Zoekt het navigatie-link elementen in de HTML
  const navLinks = document.querySelectorAll(".nav-link");

  // 2. Event listener toevoegen

  // Voegt een event listener toe aan het 'hamburger' element voor het 'click' event
  hamburger.addEventListener("click", function () {
    // Wanneer er op de hamburger wordt geklikt, komt de toggleMenu functie
    toggleMenu();
  });

  // Voeg een event listener toe aan elk 'nav-link' element voor het 'click' event
  navLinks.forEach((n) =>
    n.addEventListener("click", () => {
      // Wanneer er op de 'nav-link' wordt geklikt, komt de toggleMenu functie
      toggleMenu();
    })
  );

  // 3. Functie uitvoeren als gebeurtenis wordt geactiveerd

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show-nav-menu");
  }
});
