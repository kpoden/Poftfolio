$(document).ready(function () {
 

    $('#blank-select').on('focus', function () {

        $('.blank-content__select__wrap').slideToggle();
    })

    $('#blank-select').focusout(function() {
        $('.blank-content__select__wrap').slideUp();
    })

    $('.blank-content__select__list li').click(function () {
        
        var  serv_val = $(this).text();
        $('#blank-select').val(serv_val);
    }
        
    )



});