$(document).ready(function() {
    $("#ajax_form").submit(
        function() {
            sendAjaxForm('ajax_form', 'php/formhandler.php');
            return false;
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            form_send("Анкета <br> отправлена")
        },
        error: function(response) {
            form_send("Произошла <br> ошибка")
        }
    });
}

function form_send(resp_text) {
    $('.response').html(resp_text);
    $('.form_wrap').addClass('form_send');
}