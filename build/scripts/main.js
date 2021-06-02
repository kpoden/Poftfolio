
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

////**** GSAP SECTION END ****////


$('.burger__out').on('click', function() {
    $(this).addClass('burger--active');
    $('.nav__bar').addClass('nav__bar--active');
})
$('.burger__in').on('click', function() {
    $('.burger__out').removeClass('burger--active');
    $('.nav__bar').removeClass('nav__bar--active');
})






})