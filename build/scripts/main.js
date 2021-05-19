
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'body'
    }
})


tl.to('.color1', 0.4, { width: '100%', ease: "power3.inOut"})
tl.to('.color2', 0.6, { width: '100%'})
tl.from('.header__title', 0.5, { y: '-500'})
tl.from('.header__subtitle',  { opacity: '0'})
tl.to('.header__title', { opacity: '1'})
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