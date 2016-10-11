(function( $ ) {
/**
 * START - ONLOAD - JS
 * 1. Custom select: custom_select()
 * 2. Custom scrollbar: scrollbar()
 * 3. Toggle Menu: toggleMenu()
 * 4. Slider: slider()
 * 5. debounceInp(): Delay an amount of time before sending AJAX request to server
 * 5.1. ajax_lookup(): Perform AJAX request after debouncing input
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
/**
 * [custom_select description]
 * @return {[type]} [description]
 */
function custom_select () {
    $(".select-category").select2().on("select2-focus", function(e) {
        console.log("focus");
    });
    $(".select-location").select2().on("select2-focus", function(e) {
         console.log("focus");
    });;
}

/**
 * [srollbar description]
 * @return {[type]} [description]
 */
function scrollbar() {
    $(".scrollbar-inner").scrollbar();
}

function toggleMenu() {
    if(!$(".navbar-toggle").length) { return; }
    $(".navbar-toggle").on('click', function(event) {
        var $mobi_menu = $(this).parent().next();

        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }

        if ($mobi_menu.hasClass('active')) {
            $mobi_menu.removeClass('active');
            $mobi_menu.hide();
        } else {
            $mobi_menu.addClass('active');
            $mobi_menu.show();
        }
    });
}

/**
 * [slider description]
 * @return {[type]} [description]
 */
function slider() {
    $("#owl-demo").owlCarousel({

      autoPlay: true,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

    });
}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoPSD Page */
$(document).ready(function($){
    custom_select();
    scrollbar();
    toggleMenu();
    slider();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
