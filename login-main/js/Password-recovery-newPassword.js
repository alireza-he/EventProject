const formChangePasswordPage = document.getElementById('form-changePasswordPage');
const PasswordChangePasswordPage = document.getElementById('Password-changePasswordPage');
const repeatPasswordChangePasswordPage = document.getElementById('repeatPassword-changePasswordPage');
const passwordPattern = /(?=.*\d)(?=.*[a-z]).{8,}/;


$('.invalid-message').hide();
$('.invalid-message').text('');
formChangePasswordPage.addEventListener('submit', function (event) {
    if (!passwordPattern.test(PasswordChangePasswordPage.value)
        &&
        !passwordPattern.test(repeatPasswordChangePasswordPage.value)) {
        PasswordChangePasswordPage.style.border = '2px solid #FF0000';
        repeatPasswordChangePasswordPage.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('رمز عبور باید حداقل هشت کاراکتر و شامل حروف و اعداد باشد');
        event.preventDefault();
    }

    if (PasswordChangePasswordPage.value !== repeatPasswordChangePasswordPage.value) {
        PasswordChangePasswordPage.style.border = '2px solid #FF0000';
        repeatPasswordChangePasswordPage.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('رمز عبور ها مطابقت ندارند');
        event.preventDefault();
    }

    if (PasswordChangePasswordPage.value === '' && repeatPasswordChangePasswordPage.value === '') {
        PasswordChangePasswordPage.style.border = '2px solid #FF0000';
        repeatPasswordChangePasswordPage.style.border = '2px solid #FF0000';
        $('.invalid-message').show();
        $('.invalid-message').text('لطفا رمز عبور خود را وارد کنید');
        event.preventDefault();
    }
});
