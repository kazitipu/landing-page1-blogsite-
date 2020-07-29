var responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};
AOS.init();
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$(".owl-navigation-prev"), $(".owl-navigation-next")],
    responsive: responsive,
  });
});
document.querySelector(".toggle-collapse").addEventListener("click", () => {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("toggle-height");
});
