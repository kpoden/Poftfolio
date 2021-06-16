$(document).ready(function () {

$('.reviews').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover: false,
    // asNavFor: '.reviews-dots',
    dots: true,
    arrows: false
});





$('.bg-video').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 8000,
infinite: true,
adaptiveHeight: true,
arrows: false,
pauseOnFocus: false,
pauseOnHover: false,
asNavFor: '.slider-dots',
draggable: true,
swipe: true

});

$('.slider-dots').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.bg-video',
dots: true,
centerMode: true,
focusOnSelect: true,
pauseOnFocus: false
});



});