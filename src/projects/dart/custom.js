

////**** Testimonials Slick Slider  ****////

$('.carousel-testim').slick({
  infinite: true,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  initialSlide: 1,
  prevArrow: $('prev'),
  nextArrow:$('next'),
  draggable: true
});

$('.prev').click(function(){
  $('.carousel-testim').slick('slickPrev');
  console.log('hello')
})

$('.next').click(function(){
  $('.carousel-testim').slick('slickNext');
});


////**** 2 binded Team Swiper Sliders  ****////

var mySwiper2 = new Swiper ('.s2', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      spaceBetween: 200,
      clickable: false,
      autoHeight:true,
      initialSlide: 1,
      on: {
      	init: function () {
      		
      		console.log("6");
      	}
      }
    });

    var mySwiper = new Swiper ('.s1', {
      // Optional parameters
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: true,
      clickable: true,
      autoHeight:true,
      slideToClickedSlide: true,
      centeredSlides: true,
      initialSlide: 1,
      on: {
      	slideChange: function () {
      		mySwiper2.slideTo(this.activeIndex); 
      	}
      }
    });

    
	

