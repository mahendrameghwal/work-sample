document.addEventListener("DOMContentLoaded", function() {
    const mobMenuSpan = document.querySelector(".mob-menu span");
    const mainMenu = document.querySelector(".main-menu");
  
    mobMenuSpan.addEventListener("click", function() {
      mainMenu.style.display = (mainMenu.style.display === "none" || mainMenu.style.display === "") ? "block" : "none";
    });
  });
  