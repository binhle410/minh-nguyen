(function( $ ) {
/**
 * SEARCH JOB - ONLOAD - JS
 * 1. custom_select(): Custom select
 * 2. drdownSrch(): Create a search dropdown when user type in search input
 */
// 1. custom_select(): Custom select
function custom_select () {
    $(".select-category").select2().on("select2-focus", function(e) {
        console.log("focus");
    });
    $(".select-location").select2().on("select2-focus", function(e) {
         console.log("focus");
    });;
}

// 2. drdownSrch(): Create a search dropdown when user type in search input
// $("#job-search")
// JOBS is a preloaded data
var jobs = [
            { value: 'Programmer', data: 'AD' },
            { value: 'Accountant', data: 'Corel abc' },
            { value: 'Accenture Consulting Internship Opportunity', data: 'Accenture' },
            { value: 'PHP - Java Development Project Leader', data: 'Java' },
            { value: 'Design Quality Officer', data: 'Design' },
            { value: 'Internship Opportunity', data: 'Internship' }
        ];
var skills = [
                { value: 'IT Business Analysis', data: 'AD' },
                { value: 'Architect', data: 'Corel abc' },
                { value: 'Good at English command ', data: 'English' },
                { value: 'Good UML design is required', data: 'UML' },
                { value: 'Japanese ', data: 'Japanese' },
                { value: 'Hard working', data: 'Hard working' }
            ];
var places = [
                { value: 'Ha Noi', data: 'AD' },
                { value: 'Ho Chi Minh,', data: 'Corel abc' },
                { value: 'Ba Ria - Vung Tau', data: 'Ba Ria - Vung Tau' },
                { value: 'Bac Can', data: 'Bac Can' },
                { value: 'Bac Lieu ', data: 'Bac Lieu' },
                { value: 'Bac Ninh', data: 'Bac Ninh' }
            ];
function drdownSrch(objClass, preData, fnCallback) {
    if(!$(objClass).length) { return; }

    // SEARCH SUB
    $(objClass).autocomplete({
        lookup: preData,
        onSelect: function (suggestion) {
            // Handler
            if (typeof fnCallback == 'function') {
                fnCallback(suggestion);
            }
        }
    });
}


// Callback when searching and select 1
function anyFnCallbackSelect(suggestion) {
    console.log('This is selected item', suggestion);
}
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoPSD Page */
$(document).ready(function($){
    custom_select();
    drdownSrch('#job-search', jobs, anyFnCallbackSelect);
    drdownSrch('#skill-srch', skills, anyFnCallbackSelect);
    drdownSrch('#place-srch', places, anyFnCallbackSelect);
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
