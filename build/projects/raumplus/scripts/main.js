"use strict";

$(document).ready(function () {


      //** ---- SLICK SLIDER INIT AND SETTINGS ---- **//

      $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }],

        prevArrow: $('.prev-arr'),
        nextArrow: $('.next-arr'),

      });

      //** ---- SLICK SLIDER SECTION END ---- **//


      //** ---- POPUP VARS AND FUNCTIONS SECTION ---- **//

      const trigger = document.querySelectorAll('.popup__trigger');
      const bg = document.querySelector('.bg-dark');
      const popup = document.querySelector('.popup');
      const closeIcon = document.querySelector('.popup__close');

      trigger.forEach(el => {
        el.addEventListener('click', showPopup);
      });

      bg.addEventListener('click', (e) => {
        hidePopup(e);
      });
      closeIcon.addEventListener('click', hidePopup);


      function showPopup() {
        bg.classList.add('show');
        popup.classList.add('show');
      }

      function hidePopup(e) {
        if (e.target === bg || e.target === closeIcon) {
          bg.classList.remove('show');
          popup.classList.remove('show');
        }

      }

      //** ---- 3D SECTION REFERENCE*******//

      const link = document.querySelector('.tour');

      link.addEventListener('click', () => {

        window.open('http://www.google.ru', '_blank');

      });


      //** ---- 3D SECTION END ---- **//



      //** ---- FORM CHECK INPUTS AND SEND SECTION *******//

      const submitButtons = document.querySelectorAll('button[type="submit"]');
      

      submitButtons.forEach((el) => {

          el.addEventListener('click', function (e) {

              e.preventDefault();

              const form = e.target.closest('form');
              const checkbox = form.querySelector('input[type="checkbox"]');
              const errAlert = form.querySelector('.err-alert');
              const inputs = form.querySelectorAll(`input[type="text"]`);
              const btn = form.querySelector(`button`);
              const btnText = form.querySelector(`button .button__text`);
              const agree = form.querySelector(`.agree__text`);
              

              function checkForm() {
                let checked = false;

                inputs.forEach((el) => {
                    el.classList.remove('err');
                    agree.classList.remove('red-text'); 
                    errAlert.classList.remove('show');
                    if (el.value == '') {
                        el.classList.add('err');
                        errAlert.classList.add('show');   
                      checked = false;
                    } else {
                      checked = true;
                    }
                    
                });

                  if(!checkbox.checked) {
                    agree.classList.add('red-text');
                    errAlert.classList.add('show');
                    checked = false;
                  } else {
                    checked = true;
                  }
                  return checked;
                }

              if(checkForm()) {
                btnText.textContent = "УСПЕШНО";
              }
          });

       
      });
      
        //** ---- FORM SECTION END *******//



        //** ---- GSAP Section Animation On Scroll *******//

        gsap.from(".header__cupboard", 1, {
          scrollTrigger: ".header__left", 
          y: '100px', 
          opacity: 0,
          delay: 0.5
        });

        gsap.to(".header__title", 1, {
          scrollTrigger: ".header__title", 
          x: '0px', 
          opacity: 1,
          delay: 1});

        gsap.to(".header__button", 1, {
          scrollTrigger: ".header__title", 
          y: '0px', 
          opacity: 1,
          delay: 1.5});

        gsap.from(".calc__title", 0.5, {
          scrollTrigger: ".calc__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".calc__paper", 1, {
          scrollTrigger: ".calc__paper", 
          x: '120px', 
          opacity: 0,
          delay: 1.5});

        gsap.from(".projects__title", 0.5, {
          scrollTrigger: ".projects__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".choose__title", 0.5, {
          scrollTrigger: ".choose__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".quality__title", 0.5, {
          scrollTrigger: ".quality__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".welcome__title", 0.5, {
          scrollTrigger: ".welcome__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".count__title", 0.5, {
          scrollTrigger: ".count__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".discount__title", 0.5, {
          scrollTrigger: ".discount__title", 
          y: '30px', 
          opacity: 0,
          delay: 0.5});

        gsap.from(".discount__get", 1, {
          scrollTrigger: ".discount__get", 
          y: '40px', 
          opacity: 0,
          delay: 1});

        gsap.from(".quality__top", .5, {
          scrollTrigger: ".quality__top", 
          y: '40px', 
          opacity: 0,
          delay: 0.2});

        gsap.from(".quality__bottom", .5, {
          scrollTrigger: ".quality__bottom", 
          y: '40px', 
          opacity: 0,
          delay: 0.4});

        gsap.from(".welcome__left", .5, {
          scrollTrigger: ".quality__bottom", 
          x: '-140px', 
          opacity: 0,
          delay: 0.4});

        gsap.from(".quality__button ", .5, {
          scrollTrigger: ".quality__button ", 
          y: '40px', 
          opacity: 0,
          delay: 1});

        gsap.from(".tour ", .5, {
          scrollTrigger: ".tour ", 
          y: '40px', 
          opacity: 0,
          delay: 1});

        gsap.from(".count__button ", .5, {
          scrollTrigger: ".count__button ", 
          y: '40px', 
          opacity: 0,
          delay: 1});

        gsap.from(".choose__wrap", .5, {
          scrollTrigger: ".choose__wrap", 
          y: '40px', 
          opacity: 0,
          delay: .2});



        //** ---- GSAP Section Scroll Animation END *******//

});