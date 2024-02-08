document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".scroll-hide");
  const menus = document.querySelector(".menus");

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const windowWidth = window.innerWidth;
   
    if ( scrollTop === 0) {
      header.classList.remove("hidden-header");
      menus.style.marginTop = "0";
    } else {
      if (scrollTop > lastScrollTop) {
        header.classList.add("hidden-header");
        menus.style.marginTop = "-70px";
       
      } else {
        header.classList.remove("hidden-header");

        menus.style.marginTop = "0";
       
      }
    }
  });
});
