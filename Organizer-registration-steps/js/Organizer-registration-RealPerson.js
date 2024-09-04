const RealPerson = document.getElementById('RealPerson');
const contentFormRealPerson = document.getElementById('content-form-RealPerson');
const legalPerson = document.getElementById('legalPerson');
const contentFormLegalPerson = document.getElementById('content-form-legalPerson');
const formCompleteRegistration0 = document.getElementById('formCompleteRegistration0');
const invalidMessage = document.querySelectorAll('.invalid-message');
const phoneNumberPattern = /^(?:98|\+98|0098|0)?9[0-9]{9}$/;
let validatePhoneNumber = false;
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const MobileNumber = document.getElementById('MobileNumber');
const YearOfBirth = document.getElementById('YearOfBirth');
const gender = document.getElementById('gender');
const birthCertificateNumber = document.getElementById('birthCertificateNumber');
const nationalCode = document.getElementById('nationalCode');
const State = document.getElementById('State');
const City = document.getElementById('City');
const PostalCode = document.getElementById('PostalCode');
const Address = document.getElementById('Address');


RealPerson.addEventListener('click', function () {
    if (contentFormRealPerson.style.display = 'none') {
        contentFormLegalPerson.style.display = 'none';
        contentFormRealPerson.style.display = 'block';
    } else {
        contentFormRealPerson.style.display = 'none';
    }
});

legalPerson.addEventListener('click', function () {
    if (contentFormLegalPerson.style.display = 'none') {
        contentFormRealPerson.style.display = 'none';
        contentFormLegalPerson.style.display = 'block';
    } else {
        contentFormLegalPerson.style.display = 'none';
    }
});

$('.invalid-message').hide();
formCompleteRegistration0.addEventListener('submit', function (event) {
    /*                    validation First Name                    */
    if (FirstName.value === '') {
        FirstName.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[0].style.display = 'flex';
        invalidMessage[0].textContent = 'لطفا نام خود را وارد کنید';
        event.preventDefault();
    } else if (FirstName.value.length <= 1) {
        FirstName.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[0].style.display = 'flex';
        invalidMessage[0].textContent = 'نام باید بیش از یک کاراکتر باشد';
        event.preventDefault();
    } else {
        FirstName.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[0].style.display = 'none';
        invalidMessage[0].textContent = '';
    }

    /*                    validation Last Name                    */
    if (LastName.value === '') {
        LastName.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[1].style.display = 'flex';
        invalidMessage[1].textContent = 'لطفا نام خانوادگی خود را وارد کنید';
        event.preventDefault();
    } else if (LastName.value.length <= 1) {
        LastName.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[1].style.display = 'flex';
        invalidMessage[1].textContent = 'نام خانوادگی باید بیش از یک کاراکتر باشد';
        event.preventDefault();
    } else {
        LastName.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[1].style.display = 'none';
        invalidMessage[1].textContent = '';
    }

    /*                    validation Mobile Number                    */

    if (MobileNumber.value === '') {
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[2].style.display = 'flex';
        invalidMessage[2].textContent = 'لطفا شماره موبایل خود را وارد کنید';
        event.preventDefault();
    } else if (MobileNumber.value.length < 10) {
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[2].style.display = 'flex';
        invalidMessage[2].textContent = 'شماره موبایل باید بیش 10 کاراکتر باشد';
        event.preventDefault();
    } else if (phoneNumberPattern.test(MobileNumber.value)) {
        validatePhoneNumber = true;
        MobileNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[2].style.display = 'none';
        invalidMessage[2].textContent = '';
    } else if (!phoneNumberPattern.test(MobileNumber.value)) {
        validatePhoneNumber = false;
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[2].style.display = 'flex';
        invalidMessage[2].textContent = 'شماره موبایل شما صحیح نمی باشد';
        event.preventDefault();
    }

    /*                    validation Year Of Birth                   */

    if (YearOfBirth.value === '') {
        YearOfBirth.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[3].style.display = 'flex';
        invalidMessage[3].textContent = 'لطفا سال تولد خود را انتخاب کنید';
        event.preventDefault();
    } else {
        YearOfBirth.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[3].style.display = 'none';
        invalidMessage[3].textContent = '';
    }

    /*                    validation gender                   */

    if (gender.value === 'لطفا جنسیت خود را انتخاب کنید') {
        gender.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[4].style.display = 'flex';
        invalidMessage[4].textContent = 'لطفا جنسیت خود را انتخاب کنید';
        event.preventDefault();
    } else {
        gender.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[4].style.display = 'none';
        invalidMessage[4].textContent = '';
    }

    /*                    validation birth Certificate Number                   */

    if (birthCertificateNumber.value === '') {
        birthCertificateNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[5].style.display = 'flex';
        invalidMessage[5].textContent = 'لطفا شماره شناسنامه خود را وارد کنید';
        event.preventDefault();
    } else if (birthCertificateNumber.value.length < 10) {
        birthCertificateNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[5].style.display = 'flex';
        invalidMessage[5].textContent = 'شماره شناسنامه باید بیشتر از 10 کاراکتر باشد';
        event.preventDefault();
    } else {
        birthCertificateNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[5].style.display = 'none';
        invalidMessage[5].textContent = '';
    }

    /*                    validation national Code                   */
    if (nationalCode.value === '') {
        nationalCode.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[6].style.display = 'flex';
        invalidMessage[6].textContent = 'لطفا کد ملی خود را وارد کنید';
        event.preventDefault();
    } else if (nationalCode.value.length < 10) {
        nationalCode.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[6].style.display = 'flex';
        invalidMessage[6].textContent = 'کد ملی باید بیشتر از 10 کاراکتر باشد';
        event.preventDefault();
    } else {
        nationalCode.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[6].style.display = 'none';
        invalidMessage[6].textContent = '';
    }

    /*                    validation State                   */

    if (State.value === '') {
        State.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[7].style.display = 'flex';
        invalidMessage[7].textContent = 'لطفا استان خود را انتخاب کنید';
        event.preventDefault();
    } else {
        State.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[7].style.display = 'none';
        invalidMessage[7].textContent = '';
    }

    /*                    validation City                   */

    if (City.value === '') {
        City.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[8].style.display = 'flex';
        invalidMessage[8].textContent = 'لطفا شهر خود را انتخاب کنید';
        event.preventDefault();
    } else {
        City.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[8].style.display = 'none';
        invalidMessage[8].textContent = '';
    }

    /*                    validation Postal Code                  */

    if (PostalCode.value === '') {
        PostalCode.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[9].style.display = 'flex';
        invalidMessage[9].textContent = 'لطفا کد پستی خود را وارد کنید';
        event.preventDefault();
    } else if (PostalCode.value.length < 10) {
        PostalCode.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[9].style.display = 'flex';
        invalidMessage[9].textContent = 'کد پستی باید بیشتر از 10 کاراکتر باشد';
        event.preventDefault();
    } else {
        PostalCode.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[9].style.display = 'none';
        invalidMessage[9].textContent = '';
    }

    /*                    validation Address                  */
    if (Address.value === '') {
        Address.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[10].style.display = 'flex';
        invalidMessage[10].textContent = 'لطفا آدرس خود را وارد کنید';
        event.preventDefault();
    } else {
        Address.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[10].style.display = 'none';
        invalidMessage[10].textContent = '';
    }

});
