window.MB = window.MB || {};

MB.Main = (function($){
    var
    $form = $('#questionSubmit'),
    $chatThread = $('.chatThread'),
    i = 0,

    _init = function() {
        $form.submit(_subForm);
    },

    _subForm = function(e) {
        e.preventDefault();
        i++;
        var dat = $(this).serialize();
        var value = $('#q').val();
        var qText = '<li><strong>Question:</strong> <span id="question-'+i+'" class="question">'+value+'</span> </li>';
        $chatThread.append(qText);
        $.ajax({
            type:'post',
            url:'ask.php',
            data: dat,
            beforeSend : function() {
                var aText = '<li><strong>Answer:</strong> <span id="answer-'+i+'"  class="answer think">Hmm....</span> </li>';
                $chatThread.append(aText);

            },
            success: function(result) {
                $('#answer-' + i).removeClass('error').removeClass('think').html(result);
            },
            error: function() {
                $('#answer-' + i).removeClass('think').addClass('error').html('Woops there was an error. Go find a developer fast!');
            }
        });
    }


    ;

    return {
        init : _init
    }
})(jQuery);

$(function(){
    MB.Main.init();
});
