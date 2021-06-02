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

//**** end mobile menu code ****//

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



    function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    } 
    
})