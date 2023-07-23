$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 1000,
      draggable: false,
      swipe: true,
      waitForAnimate: true,
   });
   $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
   $('.header__burger').click(function(event) {
      $('.header__burger, .navigation').toggleClass('active');
   });
});
