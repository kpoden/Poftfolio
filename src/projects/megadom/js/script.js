$(document).ready(function () {
    nav = $('.top-nav');
    if ($(window).scrollTop() > 0) {
        nav.addClass('fixed-nav');
        $('.logo1').css({'opacity' : '0'});
        $('.logo1').css({'transform' : 'translateX(80px)'});
        $('.logo1').css({'width' : '139px'});
        $('.logo2').css({'opacity' : '1'});
        $('.logo2').css({'transform' : 'translateX(80px)'});
        $('.logo2').css({'width' : '139px'});
        $('#search').css({'opacity' : '0'});
        $('#search2').css({'opacity' : '1'});
    } else {
        nav.removeClass('fixed-nav');
        $('.logo1').css({'opacity' : '1'});
        $('.logo1').css({'transform' : 'translateX(0)'});
        $('.logo1').css({'width' : '152px'});
        $('.logo2').css({'opacity' : '0'});
        $('.logo2').css({'transform' : 'translateX(0)'});
        $('.logo2').css({'width' : '152px'});
        $('#search').css({'opacity' : '1'});
        $('#search2').css({'opacity' : '0'});
    }

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();




//Анимация блока "Услуги"

let service = $('.service-item');
let services = $('.services');
let service_main = $('.service-item__main');
let service_link = $('.service-item__link');

service.mouseover(function (){
    $(this).find(service_link).css({'transform' : 'translateY(-100%)'});  
});

services.mouseout(function (){
    $(this).find(service_link).css({'transform' : 'translateY(0%)'});  
});

//конец анимации блока "Услуги"



// Фиксирование навигационного меню




$(function(){
    $(window).on('scroll', function(){
    if ($(window).scrollTop() > 0) {
        $('.header-common').css({'height':'65', 'margin-bottom':'200px'});
        $('.header-common_title_wrap').slideUp();
        nav.addClass('fixed-nav');
        $('.logo1').css({'opacity' : '0'});
        $('.logo1').css({'transform' : 'translateX(80px)'});
        $('.logo1').css({'width' : '139px'});
        $('.logo2').css({'opacity' : '1'});
        $('.logo2').css({'transform' : 'translateX(80px)'});
        $('.logo2').css({'width' : '139px'});
        $('#search').css({'opacity' : '0'});
        $('#search2').css({'opacity' : '1'});
        
    } else {
        $('.header-common_title_wrap').fadeIn();
        $('.header-common').css({'height':'340', 'margin-bottom':'0'});
        nav.removeClass('fixed-nav');
        $('.logo1').css({'opacity' : '1'});
        $('.logo1').css({'transform' : 'translateX(0)'});
        $('.logo1').css({'width' : '152px'});
        $('.logo2').css({'opacity' : '0'});
        $('.logo2').css({'transform' : 'translateX(0)'});
        $('.logo2').css({'width' : '152px'});
        $('#search').css({'opacity' : '1'});
        $('#search2').css({'opacity' : '0'});
    }
});

});

$('.search-button').on('click', function(){
    $('.search-input').toggle(100);
});


for (let i = 1; i < 5; i++) {
    $('#dot'+i).on('mouseover', function(){
        console.log(i);
        $('#tri'+i).fadeIn();
    })
    $('#dot'+i).on('mouseout', function(){
        console.log(i);
        
        $('#tri'+i).fadeOut();
    })
    
}

$('.info_icon').on('click', function () {
    $(this).next().fadeIn();
})


$('.info_icon').on('mouseout', function () {
    
}
)

$('#info_close, .info_appear').on('click', function () {
    $('.info_appear').fadeOut();
})


});