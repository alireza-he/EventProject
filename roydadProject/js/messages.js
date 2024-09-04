$(function () {
    $('.box-inputAndButton').on('submit', function (event) {
        if ($('.inputInboxPage').val() !== '') {
            event.preventDefault();
            let messageUser = $('.messageUser').first().clone();
            messageUser.find('div p').text($('.inputInboxPage').val());
            messageUser.prependTo('.messages');
            $('input').val('');
        } else {
            event.preventDefault();
            alert('لطفا متن خود را وارد کنید')
        }
    });
});

$('.messages').scroll(function () {
    if ($(this).scrollTop()) {
        $('.dayDate').css('display', 'flex');
    } else {
        $('.dayDate').css('display', 'none');
    }
});
