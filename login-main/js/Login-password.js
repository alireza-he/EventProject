const formLoginPasswordPage = document.getElementById('formLoginPasswordPage');
const password = document.getElementById('password');
const passwordPattern = /(?=.*\d)(?=.*[a-z]).{8,}/;

$('.invalid-message').hide();
$('.invalid-message').text('');
formLoginPasswordPage.addEventListener('submit', function (event) {
    if (!passwordPattern.test(password.value)) {
        password.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('رمز عبور باید حداقل هشت کاراکتر و شامل حروف و اعداد باشد');
        event.preventDefault();
    }

    if (password.value === '' ) {
        password.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('لطفا رمز عبور خود را وارد کنید');
        event.preventDefault();
    }
});
