// var carouselWidth = $('.carousel-inner')[0].scrollWhidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;

// $('.carousel-control-next').on('click', function () {
//  scrollPosition = scrollPosition + cardWidth;
//  $('.carousel-inner').animate({scrollLeft: scrollPosition},
//   600);
// });
// $('.carousel-control-prev').on('click', function () {
//  scrollPosition = scrollPosition + cardWidth;
//  $('.carousel-inner').animate({scrollLeft: scrollPosition},
//   600);
// });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
       
    }
})
