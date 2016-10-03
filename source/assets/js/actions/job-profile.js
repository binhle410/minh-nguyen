(function( $ ) {
/**
 * JOB PROFILE - ONLOAD - JS
 * 1.   editForms()     : Edit each form
 * 2.   getBnfList()    : Get Benefit list
 * 2.1. activeBnfItem() : Toggle class active on each benefit item label
 * 2.2. scanCkbox()     : Scan all checked checkboxes
 *
 * _bnfList        : json Obj will be used for sending to server side.
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */

// 1. editForms(): Edit forms on Job Profile page
function editForms() {
    if(!$(".form-wrapper").length) { return; }

    // Toggle editMode on a form
    $(".form-wrapper").on("click", function(e) {
        if(!$(this).hasClass("editMode")) {
            $(this).addClass("editMode");
            $(this).find(".view-field").hide();
            $(this).find(".edit-field").show();
        }

        // Show benefit-list's edit mode if edit Working Preference form
        if($(this).hasClass("form-working-preference")) {
            $("#benefit-view-mode").hide();
            $("#benefit-edit-mode").show();
        }

        // Cancel editting if pressing Cancel button
        cancelEdit($(this));
    });
}

// 1.1. Cancel editing a form
function cancelEdit($fWrap) {
    if(!$fWrap.find(".btn-cancel").length) { return; }

    var $btnCancel = $fWrap.find(".btn-cancel");
    $btnCancel.on("click", function(e) {
        e.stopPropagation();
        $fWrap.removeClass("editMode");
        $fWrap.find(".view-field").show();
        $fWrap.find(".edit-field").hide();

        // Show benefit-list's view mode if press Cancel in Working Preference form
        if($fWrap.hasClass("form-working-preference")) {
            $("#benefit-view-mode").show();
            $("#benefit-edit-mode").hide();
        }
    });
}

// 2. Get Benefit list
var _bnfList = null;
function getBnfList() {
    if(!$("#benefit-edit-mode input.filter-ipt").length) { return; }

    var $ckbox = $("#benefit-edit-mode input.filter-ipt");
    $ckbox.on("change", function(e) {
        _bnfList = scanCkbox($ckbox);
        console.log(_bnfList);
    });
}

// 2.1. Toggle class active on each benefit item label
function activeBnfItem() {
    if(!$("#benefit-edit-mode .benefit-itm label").length) { return; }

    // Toggle class active on each benefit item label
    var $bnfLabel = $("#benefit-edit-mode .benefit-itm label");
    $bnfLabel.on("click", function(e) {
        var $ckbox = $(this).find("input.filter-ipt");
        if($ckbox.prop("checked")) {
            $(this).addClass("active");
            $(this).find(".fa.fa-fw").addClass("fa-check");
        } else {
            $(this).removeClass("active");
            $(this).find(".fa.fa-fw").removeClass("fa-check");
        }
    });
}

// 2.2. Scan all checked checkboxes
function scanCkbox($elemObj) {
    var data = [];
    $elemObj.each(function(i) {
        if($(this).prop("checked")) {
            var bnfObj = {
                            "name": $(this).data("key"),
                            "id"  : $(this).val()
                        };
            data.push(bnfObj);
        }
    });

    return data;
}

// 3. Add one more form in each section
function addForm() {
    if(!$(".add-one-more-section").length) { return; }

    var $addMore = $(".add-one-more-section");
    $addMore.on("click", function(e) {
        var $currSec   = $(this).prev(".sortable.content-section"),
            $cloneElem = $currSec.find(".form-wrapper.sample").clone();
        $cloneElem.removeAttr("hidden");
        $cloneElem.removeClass("sample");
        $cloneElem.addClass("editMode");
        $cloneElem.find(".view-field").hide();
        $cloneElem.find(".edit-field").show();

        // Append new cloned Form into current section
        $currSec.append($cloneElem);

        // Cancel editting if pressing Cancel button
        delForm($cloneElem);
    });
}

function delForm($fWrap) {
    if(!$fWrap.find(".btn-cancel").length) { return; }

    var $btnCancel = $fWrap.find(".btn-cancel");
    $btnCancel.on("click", function(e) {
        e.stopPropagation();
        $fWrap.remove();
    });
}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    editForms();
    getBnfList();
    activeBnfItem();
    addForm();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
