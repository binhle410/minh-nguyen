(function( $ ) {
/**
 * JOB DETAIL - ONLOAD - JS
 * 1. jobSlide()        : Make slide for job detail page
 * 2. jobLightbox()     : Create job image and video gallery slider
 * 3. showFixedNav()    : Show navbar fixted top menu when user scrolls window
 * 4. showPopover()     : show Popover
 * 5. clkBrFile()       : Browse File when clicking resume option label
 * 5. valiPopForm()     : Validate popover form
 * 6. saveJob()         : Save job
 */
// 1. Make slide for job detail page
function jobSlide() {
    if(!$(".job-slides").length) { return; }

    $('.job-slides').slick({
        infinite        : false,
        slidesToShow    : 3,
        slidesToScroll  : 3,
        prevArrow       : "<i class='fa fa-angle-left fa-3x'></i>",
        nextArrow       : "<i class='fa fa-angle-right fa-3x'></i>",
        dots            : true,
        responsive      : [
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow    : 2,
                                        slidesToScroll  : 1,
                                        arrows          : false,
                                    }
                                },
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow    : 1,
                                        slidesToScroll  : 1,
                                        arrows          : false,
                                        centerMode      : true,
                                        infinite        : true,
                                        dots            : false
                                    }
                                },
                            ]
    });
}

// 2. Create job image and video gallery slider
function jobLightbox() {
    if(!$(".job-slides").length) { return; }

    $('.job-slides').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true},
        callbacks: {
            elementParse: function(item) {
                // the class name
                if(item.el.context.className == 'popup-youtube') {
                    item.type = 'iframe';
                } else {
                    item.type = 'image';
                }
            }
        }
        // other options
    });
}

// 3. Show navbar fixted top menu when user scrolls window
function showFixedNav() {
    if(!$(".detail-navbar").length) { return; }
    $(window).scroll(function() {
         
        if($(window).scrollTop() >= 300) {
            $(".detail-navbar").css({ 
                opacity     : "1",
                visibility  : "visible"
            });
        } else {
            $(".detail-navbar").css({ 
                opacity     : "0",
                visibility  : "hidden"
            });
        }
    });
}

// 4. show Popover
function showPopover() {
    if(!$("a.detail-popover").length) { return; }

    $('a.detail-popover').popover({
        html: true,
        content:  "<button type='button' class='close'><span>×</span></button>"
                + "<form>"
                +   "<div class='form-group'>"
                +       "<input type='text' name='refer-f-name' class='form-control' placeholder='First Name' required />"
                +   "</div>"
                +   "<div class='form-group'>"
                +       "<input type='text' name='refer-l-name' class='form-control' placeholder='Last Name' required />"
                +   "</div>"
                +   "<div class='form-group'>"
                +       "<input type='email' name='refer-email' class='form-control' placeholder='Email' required />"
                +   "</div>"
                +   "<div class='form-group pull-right'>"
                +       "<button class='btn btn-primary'>Refer</button>"
                +   "</div>"
                +"</form>"
    });

    // Validate form, Close form
    $('a.detail-popover').on('shown.bs.popover', function () {
        valiPopForm();
        $('.popover').find('.close').on("click", function(e) {
            $('a.detail-popover').popover('hide');
        });
    })

    $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState.click = false;
    });
}

// 5. Validate popover form
function valiPopForm() {
    if(!$(".popover form").length) { return; }
    console.log("abcd");
    $(".popover form").validate();
}

// 6. Save job
function saveJob() {
    if(!$(".btn-interested").length) { return; }

    $(".btn-interested").on("click", function(e) {
        $(this).hide();
        $(".saved-job").show();
    });

    if(!$(".save-job").length) { return; }

    $(".save-job").on("click", function(e) {
        $(".btn-interested").click();
    });
}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    jobSlide();
    jobLightbox();
    showFixedNav();
    showPopover();
    saveJob();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
