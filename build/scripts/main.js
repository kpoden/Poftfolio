
$(document).ready(function() {



////**** GSAP SECTION ****////

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'body'
    }
})


tl.to('.color1', 0.3, { width: '100%', ease: "Expo.easeInOut"})
tl.to('.color2', 0.5, { width: '100%'})
tl.to('.header__title', 0.4, { y: '0', ease: "Expo.easeInOut"})
tl.to('.header__subtitle',  { opacity: '1'})


gsap.from(".skill__el", {
    scrollTrigger: ".skill__el", 
    y: '100px', 
    stagger: 0.15,
    opacity: 0
  });

gsap.to(".skill__el", {
    scrollTrigger: ".skill__el", 
    y: '0', 
    stagger: 0.15,
    opacity: '1' });


gsap.to(".header__image", {
    scrollTrigger: ".header__image", 
    scaleX: '1',
    transformOrigin: 'right center',
    delay: .5});

gsap.to(".header__image img", {
    scrollTrigger: ".header__image", 
    y: '0',
    delay: 1});

gsap.to(".header-img-wrap", 1.5,{
    scrollTrigger: ".header__image", 
    y: '-500', 
    ease: "Expo.easeInOut",
    delay: .5
    });

gsap.to(".header__button", {
    scrollTrigger: ".header__image", 
    y: '0', 
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: 1.9,
    stagger: 0.15
    });

gsap.to(".nav__el", 1.2,{
    scrollTrigger: ".header__image", 
    y: '0', 
    ease: "Power3.easeInOut",
    opacity: 1,
    stagger: -0.1,
    ease: "power2.inOut"
    });



gsap.from(".work", 1,{
    scrollTrigger: ".work", 
    y: '50', 
    opacity: 0,
    stagger: 0.3,
    delay: 0.3
    });

gsap.to(".work", 1,{
    scrollTrigger: ".work", 
    y: '0', 
    opacity: 1,
    stagger: 0.3,
    delay: 0.3
    });


gsap.to(".skills__title.block-title", 1,{
    scrollTrigger: ".skills__title", 
    y: '0', 
    delay: 0.1
    });

gsap.from(".skills__title + .title-line", .4,{
    scrollTrigger: ".skills__title", 
    width: '0', 
    delay: 0.2
    });
    
gsap.to(".block-title.portfolio__title", 1,{
    scrollTrigger: ".portfolio__title", 
    y: '0', 
    delay: 0.1
    });

gsap.from(".portfolio__title + .title-line", .4,{
    scrollTrigger: ".portfolio__title", 
    width: '0', 
    delay: 0.2
    });

gsap.to(".block-title.contacts__title", 1,{
    scrollTrigger: ".contacts__title", 
    y: '0', 
    delay: 0.1
    });

gsap.from(".contacts__title + .title-line", .4,{
    scrollTrigger: ".contacts__title", 
    width: '0', 
    delay: 0.2
    });



// document.querySelector("nav__link").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
//     });
    // });

////**** GSAP SECTION END ****////


/*-----------------------------------------------------------*/


////**** MOBILE MENU SECTION ****////

$('.burger__out').on('click', function() {
    $(this).addClass('burger--active');
    $('.nav__bar').addClass('nav__bar--active');
    $('.dark-bg').addClass('dark-bg--active');
})
$('.burger__in').on('click', function() {
    $('.burger__out').removeClass('burger--active');
    $('.nav__bar').removeClass('nav__bar--active');
    $('.dark-bg').removeClass('dark-bg--active');
})
})

$('.dark-bg').on('click', function(){
    $('.burger__out').removeClass('burger--active');
    $('.nav__bar').removeClass('nav__bar--active');
    $('.dark-bg').removeClass('dark-bg--active');
})

window.onresize = function(event) {
    if($(window).width() > 979) {
        $('.burger__out').removeClass('burger--active');
        $('.nav__bar').removeClass('nav__bar--active');
        $('.dark-bg').removeClass('dark-bg--active');
    }
};

////**** MOBILE MENU SECTION END****////


/*-----------------------------------------------------------*/


////**** FOOTER FORM SECTION  ****////

$('.contacts__field, .contacts__msg').on('focus', function() {
    $(this).next().addClass('focused');
})

$('.contacts__field, .contacts__msg').on('blur', function() {
    if($(this).val() === '') {
        $(this).next().removeClass('focused');
    }
})
////**** FOOTER FORM SECTION END ****////