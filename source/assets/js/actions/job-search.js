(function( $ ) {
/**
 * JOB SEARCH - ONLOAD - JS
 * 2. Open Filter on mobile: openFilter()
 * 3. chooseJob   : click to take a job for application.
 * 3.1 renderJobs : render jobs json to the view
 * 3.2 pushJobs() :  Push a job into applied jobs when user chooses.
 * 3.3 toggleApplJobBox() :  show hide Appl Job
 * 3.4 removeAllAppJobs() :  remove ALL Appl Jobs
 * 3.5 clickApply()       :  Apply jobs
 * 3.6 removeAApplJob() :  remove a job
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */

// 2. Open Filter on mobile: openFilter()
function openFilter() {
    if (!$(".btn-filter").length) {return;}

    $(".btn-filter").on("click", function(e) {
        if($("body").hasClass("bodyover")) {
            $("body").removeClass("bodyover");
        } else {
            $("body").addClass("bodyover");
        }

        if($(".side-column").hasClass("active")) {
            $(".side-column").removeClass("active");
        } else {
            $(".side-column").addClass("active");
        }

        $(".btn-confirm").on("click", function(e) {
            $(".side-column").removeClass("active");
            $("body").removeClass("bodyover");
        });
    });
}


// 3. chooseJob : click to take a job for application.
var _appliedJob = [];
function chooseJob() {

    $('body').on('click', '.choose-job', function(e) {

        var thisJob = null;
        thisJob     = {
            id : $(this).val(),
            title: $(this).closest('.job').find('.job-title').text(),
            href: $(this).closest('.job').find('.job-title').attr('href')
        };
        if( $(this).prop("checked") ) {
            _appliedJob.push(thisJob);
            pushJobs(thisJob);
            if ($('.applied-jobs ').hasClass('hidden-jobbox')) {
                $('.applied-jobs ').removeClass('hidden-jobbox');
            }

            console.log(_appliedJob);
        } else {
            var index = _appliedJob.findIndex(function(item, i){
                return item.id == thisJob.id;
            });
            if (index >= 0 ) {
                _appliedJob.splice(index, 1);
            }
            renderJobs();
            console.log(_appliedJob);
        }
    });
}

// 3.1 renderJobs: render jobs json to the view
function renderJobs() {
    if (!$('.applied-jobs ').length) {
        console.log('missing .applied-jobs');
        return;
    }

    var $jobTable = $('.applied-jobs table tbody');
    var newHTML   = '';
    if (_appliedJob.length) {
        _appliedJob.forEach(function(item, i) {
            newHTML  += '<tr>'
                    +     '<td><span>'+ (i+1) +'</span></td>'
                    +     '<td class="minw-appl-job">'
                    +         '<a href="'+ item.href +'">' + item.title + '</a>'
                    +     '</td>'
                    +     '<td>'
                    +         '<i class="fa fa-close delete-selected-job" title="Remove this job" data-jobid="' + item.id + '"></i>'
                    +     '</td>'
                    + '</tr>';
        });
    }
    if (!newHTML) {
        $('.applied-jobs').addClass('hidden-jobbox');
    }
    $jobTable.html(newHTML);
}

// 3.2 pushJobs() :  Push a job into applied jobs when user chooses.
function pushJobs(newRow) {
    // .applied-jobs
    if (!_appliedJob.length) {return;}
    if (!$('.applied-jobs ').length) {
        console.log('missing .applied-jobs');
        return;
    }
    var $jobTable = $('.applied-jobs table tbody');
    var newHTML   = '<tr>'
                  +     '<td><span>'+ _appliedJob.length +'</span></td>'
                  +     '<td  class="minw-appl-job">'
                  +         '<a href="'+ newRow.href +'">' + newRow.title + '</a>'
                  +     '</td>'
                  +     '<td>'
                  +         '<i class="fa fa-close delete-selected-job" title="Remove this job" data-jobid="' + newRow.id + '"></i>'
                  +     '</td>'
                  + '</tr>';
    $jobTable.append(newHTML);
}

// 3.3 toggleApplJobBox() :  show hide Appl Job
function toggleApplJobBox() {
    if (!$('.btn-minimize-panel').length) {return;}


    var $minzAppJob = $('.btn-minimize-panel');
    $minzAppJob.on('click', function(e) {
        if ($('.applied-jobs').hasClass('hidden-jobbox')) {return;}
        if ($('.appl-inner').hasClass('collp')) {
            $('.appl-inner').removeClass('collp');
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
        } else {
            $('.appl-inner').addClass('collp');
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    });
}

// 3.4 removeAllAppJobs() :  remove ALL Appl Jobs
function removeAllAppJobs () {
    if (!$('.delete-all-job').length) {return;}

    $removeAllJobs = $('.delete-all-job');
    $removeAllJobs.on('click', function() {
        _appliedJob = [];
        renderJobs();
        $('.choose-job').prop('checked', false);
    });
}

// 3.5 clickApply() :  Apply jobs
function clickApply() {
    if (!$('.btn-apply-job').length) {return;}
    $applyJobs = $('.btn-apply-job');

    $applyJobs.on('click', function() {
        if (!_appliedJob.length) {return;}

        console.log('send this data to apply jobs', _appliedJob);
    });
}

// 3.6 removeAApplJob() :  remove a job
function removeAApplJob() {
    $('body').on('click', '.delete-selected-job', function(e) {
        var jobId = $(this).data('jobid');

        var index = _appliedJob.findIndex(function(item, i){
            return item.id == jobId;
        });
        if (index >= 0 ) {
            _appliedJob.splice(index, 1);
        }
        $('#job-' + jobId).prop('checked', false);
        renderJobs();
    });
}

// 4. notAllowCl(): Make Find Job button not clickable when it was clicked
function notAllowCl() {
    if(!$(".btn-loading .btn-search").length) { return; }

    var $btn_srch = $(".btn-loading .btn-search"),
        $lding_state = $btn_srch.parent();
    $btn_srch.on("click", function(e) {
        if($lding_state.hasClass("loading")) {
            $lding_state.removeClass("loading");
        } else {
            $lding_state.addClass("loading");
        }
    });
}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    openFilter();
    chooseJob();
    toggleApplJobBox();
    removeAllAppJobs ();
    clickApply();
    removeAApplJob();
    notAllowCl();
});
/* OnLoad Window */
var init = function () {

};
window.onload = init;

})(jQuery);
