
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
    opacity: 0
  });

gsap.to(".skill__el", {
    scrollTrigger: ".skill__el", 
    y: '0', 
    opacity: '1' });

gsap.to(".header__image", {
    scrollTrigger: ".header__image", 
    scaleX: '1',
    transformOrigin: 'left center',
    delay: .8});




gsap.to(".header-img-wrap", 1.5,{
    scrollTrigger: ".header__image", 
    x: '-500', 
    ease: "Expo.easeInOut",
    delay: 1
    });