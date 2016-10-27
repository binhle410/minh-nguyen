(function( $ ) {
/**
 * START - ONLOAD - JS
 * 1. Custom select     : custom_select()
 * 2. Custom scrollbar  : scrollbar()
 * 3. Toggle Menu       : toggleMenu()
 * 4. Slider            : slider()
 * 5. clkBrFile()       : Browse File when clicking resume option label
 * 6. editField()       : Edit a field
 * 7. valiSignForm()    : Validate Login + Sign up form
 * 8. openMbMenu()      : Open message list on mobile
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
// 1. Custom select
function custom_select() {
    // if(!$(".select-category").length && !$(".select-location").length && !$(".date-filter select").length) && !$(".page-filter select").length ) { return; }

    $(".select-category").select2();
    $(".select-location").select2();
    $(".date-filter select").select2({
        minimumResultsForSearch: Infinity
    });
    $(".page-filter select").select2({
        minimumResultsForSearch: Infinity
    });
}

// 2. Custom scrollbar
function scrollbar() {
    $(".scrollbar-inner").scrollbar();
}

// 3. Toggle Menu
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

// 4. Slider 
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

// 5. Browse File when clicking resume option label
function clkBrFile() {
    if(!$(".resume-opt-upl > label").length) { return; }

    var $res_label = $(".resume-opt-upl > label");

    $res_label.on("click", function(e) {
        e.stopPropagation();
        console.log("abc");
        $("#resume-opt-3").trigger("click");
    });
}

// 6. Edit a field
function editField() {
    if(!$(".edittable").length) { return; }

    var $edit_span  = $(".edittable");

    $edit_span.on("click", function(e) {
        var $txt_field  = $(this),
            $txt_ctner = $(this).parent(),
            placeholder = $(this).data("placeholder"),
            $edit_tml     = "<div class='edit-group'>"
                          +     "<input type='text' class='form-control' value='"+ $(this).text() +"' placeholder='" + placeholder + "' />"
                          +     "<button type='button' class='btn btn-default btn-save'>"
                          +         "<i class='fa fa-check'></i>"
                          +     "</button>"
                          + "</div>",
            count       = 0;

        $txt_field.hide();
        $txt_ctner.append($edit_tml);

        $(".edit-group .btn-save").on("click", function(e) {
            if(!$(this).prev().val().length) {
                if(count==0) {
                    $(this).parent().append("<p>This field must not be empty.</p>");
                    count++;
                }
            } else {
                $txt_field.find(".edit-ct").text($(this).prev().val());
                $txt_field.show();
                $(this).parent().remove();
            }
        });
    });    
}

// 7. Validate Login + Sign up form
function valiSignForm() {
    if(!$(".user-sign-form form").length) { return; }

    $(".user-sign-form form").validate();
}

// 8. Open message list on mobile
function openMbMenu() {
    if(!$(".mb-list-msg").length) { return; }

    $(".mb-list-msg").on('click', function(e) {
        $(".msg-list-box").css({
            "opacity": 1,
            "visibility": "visible"
        });
        $("body").addClass("bodyover");

        $(".msg-header-ttl .close").on("click", function(e) {
            $(".msg-list-box").css({
                "opacity": 0,
                "visibility": "hidden"
            });
        });
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
    clkBrFile();
    editField();
    valiSignForm();
    openMbMenu();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
