(function( $ ) {
/**
 * FORM FILTER - ONLOAD - JS
 * 1. collapseBlk() : Toggle each filter-form block
 * 2. expandBlk()   : Expand or minimize each filter-form block
 * 3. getFormData() : Get Data from form
 * 3.1 scanCkBox()  : scan Which one was checked in Filter
 * 3.2 clearAllFilter() : clear ALL in filter
 *
 * _filterData      : json Obj will be used for sending to server side.
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */

//  1. collapseBlk() : .....
function collapseBlk() {
    if(!$(".facet-title").length) { return; }

    var $f_ttl  = $(".facet-title");

    $f_ttl.on("click", function(e) {
        var $f_body = $(this).next();

        if($f_body.hasClass("collapsed")) {
            $f_body.removeClass("collapsed");
        } else {
            $f_body.addClass("collapsed");
        }
    });
}

// 2. expandBlk() : Expand or minimize each filter-form block
function expandBlk() {
    if(!$(".show-more").length) { return; }

    $(".show-more").on("click", function(e) {
        var $f_body = $(this).prev();

        if($f_body.hasClass("more")) {
            $f_body.removeClass("more");
            $(this).text("Show more");
        } else {
            $f_body.addClass("more");
            $(this).text("Show less");
        }
    });
}



// 3. getFormData() : Get Data from form
var _filterData = null;
function getFormData() {
    if(!$("form.filter-jobs input.filter-ipt").length) { return; }

    var $ckbox = $("form.filter-jobs input.filter-ipt");

    $ckbox.on("change", function() {
        _filterData = scanCkBox($ckbox);
        console.log(_filterData);

        if($.isEmptyObject(_filterData)) {
            $(".btn-clear").hide();
        } else {
            $(".btn-clear").show();
        }

        // AJAX GET below this line
        // ...
        // END: AJAX GET.
    });
}

// 3.1 scanCkBox() : scan Which one was checked in Filter
function scanCkBox($elemObj) {
    var data   = {};
    $elemObj.each(function(i) {
        if( $(this).prop("checked") ) {
            var vKey = $(this).data('key');
            if (!data[vKey]) {
                data[vKey] = [];
            }
            data[vKey].push($(this).val());
        }
    });

    return data;
}

// 3.2 clearAllFilter() : clear ALL in filter
function clearAllFilter() {
    if (!$('.btn-clear').length) {return;}

    var $btnClear = $('.btn-clear');
    $btnClear.on('click', function(e) {
        e.preventDefault();
        _filterData = null;
        $("form.filter-jobs input.filter-ipt").prop("checked", false);
        $(this).hide();
    })
}


/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    collapseBlk();
    expandBlk();
    getFormData();
    clearAllFilter();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
