// >>>>>>>>>>>>>>>>>>book service button start<<<<<<<<<<<<<<<<<<<<//
$(document).ready(function () {
    $('.booking-btn0').mouseover(function () {
        $('.booking-btn0').removeClass('btn0-animation')
        $('.booking-btn0').addClass('show-btn0')
        $('.booking-btn01').removeClass('btn01-animation')
        $('.booking-btn01').addClass('show-btn01')
    });
    $('.booking-btn0').mouseout(function () {
        $('.booking-btn01').addClass('btn01-animation')
        $('.booking-btn01').removeClass('show-btn01')
        $('.booking-btn0').addClass('btn0-animation')
        $('.booking-btn0').removeClass('show-btn0')
    })

    $('.booking-btn0').click(function () {
        $(".hiden").addClass('form-show')
    });
    $('.close').click(function () {
        $(".hiden").removeClass('form-show')
    });
})
// >>>>>>>>>>>>>>>>>>book service button end<<<<<<<<<<<<<<<<<<<<//
