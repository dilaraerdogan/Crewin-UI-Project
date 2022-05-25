$(document).ready(function () {
  var owl_carousel_one = $("#owl-carousel-two"); //tekli
  var bool = true;
  owl_carousel_one.owlCarousel({
    // autoplay: true,
    // autoplayhoverpause: true,
    // autoplaytimeout: 600,
    items: 3,
    nav: true,
    loop: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: false,
        nav: false,
      },
      768: {
        items: 2,
        nav: true,
      },
      1280: {
        items: 3,
        nav: true,
      },
    },
  });
  $("#footer-toggle").click(function () {
    if (bool) {
      $(this).html("Kapat");
      bool = false;
    } else {
      $(this).html("Devamını Göster");
      bool = true;
    }
    $("#toggle-content").toggle();
  });
});
