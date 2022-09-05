$(document).ready(function() {


//**** mobile menu code ****//
    $(".burger-menu").on('click', function() {
        $(".top-menu__nav").toggleClass("mobile-active");
        $(".bg-mobile").toggleClass("bgactive");
        $(".burger-menu").toggleClass("close");
    });

    $(".top-menu__nav").on('click', function(e) {
        if($(".bg-mobile").hasClass("bgactive")) {     
            if ($(e.target).is("a")){             
            } else {
                $('.top-menu__nav').removeClass('mobile-active');
                $('.bg-mobile').removeClass("bgactive");
                $(".burger-menu").removeClass("close");
            }
        }
    });

    $(".featured__image").mouseover(function () {
        $(this).width('50%');

    });
    $(".featured__image").mouseout(function () {
        $(this).width('33.4%');
    });

    $('.top-menu__link').on('click', function () {
        if ($(window).width() < 820) {
            $('.top-menu__nav').removeClass('mobile-active');
            $('.bg-mobile').removeClass("bgactive");
            $(".burger-menu").removeClass("close");
        }
    })

//**** end mobile menu code ****//

//--------------------------------------//

//* ----- Round Pie Charts init and sizes ----- *//

    chartSize = 120;

    function windowSize(){
        if ($(window).width() <= '900'){
            chartSize = 80;
        } else if ($(window).width() <= '1200') {
            chartSize = 100;
        }
        else {
            chartSize = 120;
        }
        return chartSize;
    }

    $(function() {
        $('.chart').easyPieChart({
            scaleColor: false,
            barColor: '#19bd9a',
            trackColor: '#047378',
            size: windowSize()   
            
        });
    });

//* ----- end Round Pie Charts init and sizes ----- *//

//--------------------------------------//

//* ----- Slick Slider init and settings ----- *//

    $('.team-slider-wrap').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        infinite: true
    });

    $('.testimonials__wrap').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        infinite: true

    });

    $('.news__wrap').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true

    });

//* ----- end Slick Slider init and settings ----- *//

//--------------------------------------//

//* ----- Read More code ----- *//

    $('.news__more').on('click', function() {

        if($(this).hasClass('shown')) {
            $(this).html("+ Read More");
            $(this).siblings('.news__article').children('.news__more-text').hide();
            $(this).siblings('.news__article').children('.news__dots').show();
            $(this).removeClass("shown");
        }

        else {
            $(this).html("- Read Less");
            $(this).siblings('.news__article').children('.news__more-text').show();
            $(this).siblings('.news__article').children('.news__dots').hide();
            $(this).addClass("shown");
        }


    })

//* -----  end Read More code ----- *//

//--------------------------------------//

//* ---- Show Up Button ---- *//


$(window).scroll(function () {
    if ($(this).scrollTop() > 780) {
        $('#up-btn').fadeIn();
    } else $('#up-btn').fadeOut();
});

//--------------------------------------//


//* ----- Subscribe Field Placeholder code ----- *//


    $('.form-field').val('');
    $('.submit__textarea').val('');

    $('.form-field').on('focus', function() {
        $(this).next().addClass('focused');
    })
    $('.form-field').on('focusout', function() {
        if($(this).val() === '') {
            $(this).next().removeClass('focused');
        } 
    })

//* ----- Subscribe Field Placeholder code END ----- *//

//--------------------------------------//

//* ----- Map Init ----- *//

    function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    } 
    
})

//* ----- Map Init END ----- *//

//--------------------------------------//

//* ----- GSAP Section Animation On Scroll----- *//

gsap.from(".header__header-title", 1, {
    scrollTrigger: ".header__header-title", 
    y: '-100px', 
    opacity: 0
  });

gsap.from(".down-button", 1, {
    scrollTrigger: ".down-button", 
    y: '20px', 
    opacity: '0',
    delay: 1});

gsap.from(".header__top", 2.5, {
    scrollTrigger: ".header__top", 
    opacity: '0' });

gsap.from(".bouncy__right", 2, {
    scrollTrigger: ".bouncy__right", 
    y: '-50px', 
    opacity: '0' });

gsap.from(".details__title, .details__subtitle", .5, {
    scrollTrigger: ".details__title ", 
    y: '-20px',
    opacity: '0' });


gsap.from(".details__icon",{
    scrollTrigger: ".details__icon ", 
    y: '-5px', 
    stagger: .2,
    opacity: '0' });

gsap.from(".featured__title, .featured__subtitle", .5, {
    scrollTrigger: ".featured__title ", 
     y: '-20px',
    opacity: '0' });
    
gsap.from(".services__title, .services__subtitle", .5, {
    scrollTrigger: ".services__title ", 
     y: '-20px',
    opacity: '0' });
    
gsap.from(".portfolio__title, .portfolio__subtitle", .5, {
    scrollTrigger: ".portfolio__title ", 
     y: '-20px',
    opacity: '0' });

gsap.from(".portfolio__list", 1, {
    scrollTrigger: ".portfolio__list ", 
    delay: .5,
    opacity: '0' });


gsap.from(".gallery__item",{
    scrollTrigger: ".gallery ", 
    y: '-5px', 
    stagger: .1,
    opacity: '0' });

    
gsap.from(".team__title, .team__subtitle", .5, {
    scrollTrigger: ".team__title ", 
     y: '-20px',
    opacity: '0' });

gsap.from(".testimonials__title, .testimonials__subtitle", .5, {
    scrollTrigger: ".testimonials__title ", 
     y: '-20px',
    opacity: '0' });

gsap.from(".price__title, .price__subtitle", .5, {
    scrollTrigger: ".price__title ", 
     y: '-20px',
    opacity: '0' });

gsap.from(".contactus__title, .contactus__subtitle", .5, {
    scrollTrigger: ".contactus__title ", 
     y: '-20px',
    opacity: '0' });



//* ----- GSAP Section Scroll Animation END ----- *//

////**** SCROLL TO SECTIONS FROM NAV ****////

let navLinks = document.querySelectorAll('.top-menu__link');

navLinks.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();

}))


document.getElementById("main").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".header"
        }
    })
})

document.getElementById("about").addEventListener("click", () => {
    gsap.to(window, {
        duration: .5,
        scrollTo: {
            y: ".details"
        }
    })
})

document.getElementById("services").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".services"
        }
    })
})
document.getElementById("portfolio").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".portfolio"
        }
    })
})
document.getElementById("team").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".team"
        }
    })
})
document.getElementById("blog").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".testimonials"
        }
    })
})
document.getElementById("contact").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".contactus"
        }
    })
})

document.getElementById("up-btn").addEventListener("click", () => {
    gsap.to(window, {
        duration: .5,
        scrollTo: {
            y: ".main"
        }
    })
})

document.querySelector(".down-button").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: {
            y: ".portfolio"
        }
    })
})


////**** SCROLL TO SECTIONS FROM NAV END****////