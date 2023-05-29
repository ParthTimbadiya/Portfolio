$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      loop: true,
      margin: 10,
      autoplay:true,
      nav: false,
      responsive: {
        320: {
          items: 1,
        },
        576:{
          items : 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 4,
        },
      },
    });
  });
  