(function( $ ) {
/**
 * START - ONLOAD - JS
 * 1. Custom select: custom_select()
 * 2. Custom scrollbar: scrollbar()
 * 3. Toggle Menu: toggleMenu()
 * 4. Slider: slider()
 * 5. debounceInp(): Delay an amount of time before sending AJAX request to server
 * 5.1. ajax_lookup(): Perform AJAX request after debouncing input
 * 5.2 Save id of autocomplete box items for sending AJAX requests later
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

// 5. debounceInp(): Delay an amount of time before sending AJAX request to server
function debounceInp() {
    if(!$(".auto-dropdown input.form-control").length) { return; }

    var $auto_inp = $(".auto-dropdown input.form-control");
    $auto_inp.keyup( $.debounce( 250, ajax_lookup ) );
}

// 5.1. ajax_lookup(): Perform AJAX request after debouncing input
function ajax_lookup() {
    var $auto_box = $(this).next(),
        $auto_itm = $auto_box.find(".auto-itm");
    // Show autocomplete box
    if(!$(this).val().length) {
        $auto_box.hide();
        return;
    }

    $auto_box.show();

    // Hide the autocomplete box when user clicks outside of it.
    $auto_box.bind("clickoutside", function(event){
        $(this).hide();
    });

    // Perform an AJAX GET lookup on $(this).val();
    // ..........
    // END: AJAX GET.

    // Save id of autocomplete box items for sending AJAX requests later
    saveItemId($auto_itm);
}

// 5.2 Save id of autocomplete box items for sending AJAX requests later
function saveItemId($itm) {
    var sendingData = [];

    $itm.on("click", function(e) {
        var itmObj = {
                        "id"   : $(this).data("id"),
                        "name" : $(this).data("name")
                    }
        sendingData.push(itmObj);
        console.log(sendingData);
    });

    // Sending AJAX here
    // ...
    // END: Sending AjAX
}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    custom_select();
    scrollbar();
    toggleMenu();
    slider();
    debounceInp();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
