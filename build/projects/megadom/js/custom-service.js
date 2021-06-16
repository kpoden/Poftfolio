$(document).ready(function () {
    $('.custom-service_title').on('click', function () {
        $(this).next().slideToggle();
        $('.custom-service_title').not(this).next().slideUp();
    })



   

})
