$(function () {
    $('#form-senTicket').on('submit', function (event) {
        if ($('#userMessageText').val() !== '') {
            event.preventDefault();
            let messageUser = $('.parentUserMessage').first().clone();
            messageUser.find('div p').text($('#userMessageText').val());
            messageUser.prependTo('.partMessages');
            $('#userMessageText').val('');
        } else {
            event.preventDefault();
            alert('لطفا متن خود را وارد کنید')
        }
    });
});

/*$('.partMessages').scroll(function () {
    if ($(this).scrollTop()) {
        $('.dayDate').css('display', 'flex');
    } else {
        $('.dayDate').css('display', 'none');
    }
});*/
