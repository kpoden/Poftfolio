$(document).ready(function () {

    $('.quiz-content__vars__item').on('click', function () {
       
        $(this).toggleClass('checked-border');
        $(this).find('.check-icon').toggleClass('checked');
    })

    $('.chooseall').on('click', function (e) {

        e.preventDefault();
        let quiz_item = $('.quiz-content__vars__item')
        
        quiz_item.addClass('checked-border');
        quiz_item.find('.check-icon').addClass('checked');

            
    })


})