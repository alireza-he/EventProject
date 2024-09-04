const formLogin = document.querySelector('#login');
formLogin.addEventListener('submit', validate);

function validate(event) {
    const emailOrPhone = document.getElementById('emailOrPhone');
    const emailOrPhoneError = document.querySelector('.invalid-message');

    const simpleEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const simplePhone = /^(?:98|\+98|0098|0)?9[0-9]{9}$/;
    let validation = false;

    emailOrPhoneError.textContent = '';
    if (simpleEmail.test(emailOrPhone.value)) {
        validation = true;
    } else if (simplePhone.test(emailOrPhone.value)) {
        validation = true;
    }

    if (validation == false) {
        emailOrPhone.style.border = '2px solid #FF0000';
        emailOrPhoneError.style.display = 'flex';
        emailOrPhoneError.textContent = 'آدرس ایمیل یا شماره موبایل صحیح نمی باشد';
        event.preventDefault();
    }

    if (emailOrPhone.value === '') {
        emailOrPhone.style.border = '2px solid #FF0000';
        emailOrPhoneError.style.display = 'flex';
        emailOrPhoneError.textContent = 'لطفا آدرس ایمیل یا شماره موبایل خود را وارد کنید';
        event.preventDefault();
    }
}
