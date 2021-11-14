$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        dotsClass: 'step-list',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                    arrows: false
                }
            }
        ]
    });

 
    $('.slider-partners').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      });
});