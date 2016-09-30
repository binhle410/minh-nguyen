(function( $ ) {
/**
 * START - ONLOAD - JS
 * Custom select: custom_select()
 * Custom scrollbar: scrollbar()
 * Toggle Menu: toggleMenu()
 * Slider: slider()
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
/**
 * [custom_select description]
 * @return {[type]} [description]
 */
function custom_select () {
    $(".select-category").select2();
    $(".select-location").select2();
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
/* OnLoad Page */
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
