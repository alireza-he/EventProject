const formSetPasswordPage = document.getElementById('form-SetPasswordPage');
const PasswordSetPasswordPage = document.getElementById('Password-SetPasswordPage');
const repeatPasswordSetPasswordPage = document.getElementById('repeatPassword-SetPasswordPage');
const passwordPattern = /(?=.*\d)(?=.*[a-z]).{8,}/;


$('.invalid-message').hide();
$('.invalid-message').text('');
formSetPasswordPage.addEventListener('submit', function (event) {
    if (!passwordPattern.test(PasswordSetPasswordPage.value)
        &&
        !passwordPattern.test(repeatPasswordSetPasswordPage.value)) {
        PasswordSetPasswordPage.style.border = '2px solid #FF0000';
        repeatPasswordSetPasswordPage.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('رمز عبور باید حداقل هشت کاراکتر و شامل حروف و اعداد باشد');
        event.preventDefault();
    }

    if (PasswordSetPasswordPage.value !== repeatPasswordSetPasswordPage.value) {
        PasswordSetPasswordPage.style.border = '2px solid #FF0000';
        repeatPasswordSetPasswordPage.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('رمز عبور ها مطابقت ندارند');
        event.preventDefault();
    }

    if (PasswordSetPasswordPage.value === '' && repeatPasswordSetPasswordPage.value === '') {
        PasswordSetPasswordPage.style.border = '2px solid #FF0000';
        repeatPasswordSetPasswordPage.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('لطفا رمز عبور خود را وارد کنید');
        event.preventDefault();
    }
});
