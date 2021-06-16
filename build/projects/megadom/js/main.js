var mySwiper = new Swiper('.appartament-wrap', {
  slidesPerView: 3,
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 2,
  navigation: {
    nextEl: '.appartament-arrows .swiper-button-next',
    prevEl: '.appartament-arrows .swiper-button-prev',
  },

  breakpoints: {
    // when window width is <= 480px
    650: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 640px
    1000: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

var swiperItem = $('.appartament-slider__inside');

swiperItem.on('init', function () {
  console.log('slide changed');
});

new Swiper(swiperItem, {
  slidesPerView: 1,
  effect: 'fade',
  navigation: {
    nextEl: '.appartament-arrows--item .swiper-button-next',
    prevEl: '.appartament-arrows--item .swiper-button-prev',
  },
  on: {
    slideChange: function () {
      console.log(1)
    },
  },

 
});




$('.header-buttons__item button').on('click', function () {
  $(this).toggleClass('active');
});

function getNotice() {
  $('.button-mute').addClass('notice');
}

setTimeout(getNotice, 1000);

$('.nav-open button').on('click', function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.navigation-list').removeClass('active');
  } else {
    $(this).addClass('active');
    $('.navigation-list').addClass('active');
  }
});
$('.calc-table .calc-table__cell').on('click', function() {
  const tableStr = $(this).closest('tr');
  tableStr.toggleClass('active');
});