$(document).ready(function(){   
    $('.galeria').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1204,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                pauseOnHover: false,
                arrows: false,
              }
            },
            {
              breakpoint: 804,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                pauseOnHover: false,
                arrows: false,
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                pauseOnHover: false,
                arrows: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });       
});
