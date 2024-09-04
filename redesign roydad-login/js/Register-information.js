const formChangePasswordPage = document.getElementById('form-Register-informationPage');
const PasswordChangePasswordPage = document.getElementById('Password-Register-informationPage');
const repeatPasswordChangePasswordPage = document.getElementById('repeatPassword-Register-informationPage');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const invalidMessageFirstName = document.querySelector('#invalid-messageFirstName');
const invalidMessageLastName = document.querySelector('#invalid-messageLastName');
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
        $('.invalid-message').text('رمز عبور باید حداقل هشت کاراکتر و شامل حروف انگلیسی و اعداد باشد');
        event.preventDefault();
    } else {
        $('.invalid-message').hide();
        $('.invalid-message').text('');
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

    if (FirstName.value === '') {
        FirstName.style.border = '2px solid #FF0000';
        invalidMessageFirstName.style.display = 'flex';
        invalidMessageFirstName.textContent = 'لطفا نام خود را وارد کنید';
        event.preventDefault();
    } else if (FirstName.value.length <= 1) {
        FirstName.style.border = '2px solid #FF0000';
        invalidMessageFirstName.style.display = 'flex';
        invalidMessageFirstName.textContent = 'نام باید بیش از یک کاراکتر باشد';
        event.preventDefault();
    } else {
        invalidMessageFirstName.style.display = 'none';
        invalidMessageFirstName.textContent = '';
    }

    if (LastName.value === '') {
        LastName.style.border = '2px solid #FF0000';
        invalidMessageLastName.style.display = 'flex';
        invalidMessageLastName.textContent = 'لطفا نام خانوادگی خود را وارد کنید';
        event.preventDefault();
    } else if (LastName.value.length <= 1) {
        LastName.style.border = '2px solid #FF0000';
        invalidMessageLastName.style.display = 'flex';
        invalidMessageLastName.textContent = 'نام خانوادگی باید بیش از یک کاراکتر باشد';
        event.preventDefault();
    } else {
        invalidMessageLastName.style.display = 'none';
        invalidMessageLastName.textContent = '';
    }
});
