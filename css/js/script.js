(function ($) {
    "use strict";

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    //Animation

    $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover

    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("dark");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);




///////////////////////////////////container script
// .............................form scrept......
$(document).ready(function () {

})
// ............................. box see more button...


$(document).ready(function () {
    $('.add_service').mouseover(function () {
        $('.a_anime').addClass('a_anime_show');
    })
    $('.add_service').mouseout(function () {
        $('.a_anime').removeClass('a_anime_show');
    })
})




/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides() {
    $('#counter').html(pos + 1 + ' / ' + totalSlides);
}

function pagination() {
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}


const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', chekBoxes);

chekBoxes();

function chekBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}



$(document).ready(function() {
    $('.add_service').mouseover(function() {
        $('.a_anime').addClass('a_anime_show');
    })
    $('.add_service').mouseout(function() {
        $('.a_anime').removeClass('a_anime_show');
    })
})


// .............................custemer revive start
var swiper = new Swiper(".myswiper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPreview: 'auto',
    coverflowEffect: {
        rotate: -5,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShodows: true,

    },
    pagination: {
        el: ".swiper-pagination",
    },
});
// .............................custemer revive end
