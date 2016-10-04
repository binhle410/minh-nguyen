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
    if(!$(".form-wrapper .form-btn-edit").length) { return; }

    var $editBtn = $(".form-wrapper .form-btn-edit");

    // Toggle editMode on a form
    $editBtn.on("click", function(e) {
        var $this_f = $(this).closest(".form-wrapper");
        if(!$this_f.hasClass("editMode")) {
            $this_f.addClass("editMode");
            $this_f.find(".view-field").hide();
            $this_f.find(".edit-field").show();
        }

        // Show benefit-list's edit mode if edit Working Preference form
        if($this_f.hasClass("form-working-preference")) {
            $("#benefit-view-mode").hide();
            $("#benefit-edit-mode").show();
        }
    });
}

// 1.1. Cancel editing a form
function cancelEdit() {
    if(!(".btn-cancel").length) { return; }

    var $btnCl = $(".btn-cancel");
    $btnCl.on("click", function(e) {
        var $this_f = $(this).closest(".form-wrapper");
        $this_f.removeClass("editMode");
        $this_f.find(".view-field").show();
        $this_f.find(".edit-field").hide();

        // Show benefit-list's view mode if press Cancel in Working Preference form
        if($this_f.hasClass("form-working-preference")) {
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
        if($(this).hasClass("active")) {
            return false;
        } else {
            $(this).addClass("active");
        }

        var $currSec   = $(this).prev(".sortable.content-section"),
            $cloneElem = $currSec.find(".form-wrapper.sample").clone();
        $cloneElem.removeAttr("hidden");
        $cloneElem.removeClass("sample");
        $cloneElem.addClass("editMode");
        $cloneElem.addClass("newForm");
        $cloneElem.find(".view-field").hide();
        $cloneElem.find(".edit-field").show();

        // Append new cloned Form into current section
        $currSec.append($cloneElem);
    });
}

// 3.1. Delete one form
function delForm() {
    $("body").on("click", ".newForm .btn-cancel", function(e) {
        // console.log("ac");
        $(this).closest(".section-detail").find(".add-one-more-section").removeClass("active");
        $(this).closest(".form-wrapper").remove();
    });
}

// 4. Toggle contact box
function toggleCttBox() {
    if(!$(".contact-information-toggler").length) { return; }

    var $cttBtn = $(".contact-information-toggler");
    $cttBtn.on("click", function(e) {
        var $secCtt = $(".section-contact");
        if($secCtt.hasClass("active")) {
            $secCtt.removeClass("active");
            $secCtt.hide();
        } else {
            $secCtt.addClass("active");
            $secCtt.show();
        }
    });
}

// 5. Turn on/off Searchable button
function tnSrchBtn() {
    if(!$(".switchery").length) { return; }

    var $swBtn = $(".switchery");
    $swBtn.on("click", function(e) {
        if(!$(this).hasClass("active")) {
            $(this).css({
                            "background-color": "rgb(100, 189, 99)",
                            "border-color": "rgb(100, 189, 99)",
                            "box-shadow": "rgb(100, 189, 99) 0px 0px 0px 16px inset",
                            "transition": "border 0.5s, box-shadow 0.5s, background-color 1.5s"
                        });
            $(this).find("small").css({
                                        "left": "20px"
                                    });
            $(this).parent().siblings(".note-searchable").show();
            $(this).parent().siblings(".note-unsearchable").hide();
            $(this).closest(".searchable-setting").next().show();
            $(this).addClass("active");
        } else {
            $(this).css({
                            "background-color": "#fff",
                            "box-shadow":" rgb(223, 223, 223) 0px 0px 0px 0px inset",
                            "border-color": "rgb(223, 223, 223)",
                            "transition": "border 0.5s, box-shadow 0.5s"
                        });
            $(this).find("small").css({
                                        "left": "0"
                                    });
            $(this).parent().siblings(".note-searchable").hide();
            $(this).parent().siblings(".note-unsearchable").show();
            $(this).closest(".searchable-setting").next().hide();
            $(this).removeClass("active");
        }
    });
}

// 6. inputDateFm(): Format date input
function inputDateFm() {
    if(!$(".datepicker").length) { return; }

    $(".datepicker").inputmask('dd/mm/yyyy');

}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    editForms();
    cancelEdit();
    getBnfList();
    activeBnfItem();
    addForm();
    delForm();
    toggleCttBox();
    tnSrchBtn();
    inputDateFm();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
