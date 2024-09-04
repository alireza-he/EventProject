const formCompleteRegistration1 = document.getElementById('formCompleteRegistration1');
const CompanyName = document.getElementById('CompanyName');
const Activity = document.getElementById('Activity');
const EstablishedYear = document.getElementById('EstablishedYear');
const RegistrationNumber = document.getElementById('RegistrationNumber');
const ManagingDirector = document.getElementById('ManagingDirector');
const FixedContactNumber = document.getElementById('FixedContactNumber');
const PhoneNumberRealPerson = document.getElementById('PhoneNumberRealPerson');
const Fax = document.getElementById('Fax');
const StateRealPerson = document.getElementById('StateRealPerson');
const CityRealPerson = document.getElementById('CityRealPerson');
const PostalCodeRealPerson = document.getElementById('PostalCodeRealPerson');
const addressRealPerson = document.getElementById('addressRealPerson');
const invalidMessageLegalPerson = document.querySelectorAll('.invalid-message');
const PhoneNumberRealPersonPattern = /^(\+98|0)?9\d{9}$/;

$('.invalid-message').hide();
formCompleteRegistration1.addEventListener('submit', function (event) {
    /*                    validation Company Name                    */
    if (CompanyName.value === '') {
        CompanyName.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[11].style.display = 'flex';
        invalidMessageLegalPerson[11].textContent = 'لطفا نام شرکت خود را وارد کنید';
        event.preventDefault();
    } else {
        CompanyName.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[11].style.display = 'none';
        invalidMessageLegalPerson[11].textContent = '';
    }

    /*                    validation Activity                    */
    if (Activity.value === '') {
        Activity.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[12].style.display = 'flex';
        invalidMessageLegalPerson[12].textContent = 'لطفا حوزه فعالیت خود را وارد کنید';
        event.preventDefault();
    } else {
        Activity.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[12].style.display = 'none';
        invalidMessageLegalPerson[12].textContent = '';
    }

    /*                    validation Established Year                    */
    if (EstablishedYear.value === '') {
        EstablishedYear.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[13].style.display = 'flex';
        invalidMessageLegalPerson[13].textContent = 'لطفا سال تاسیس شرکت خود را وارد کنید';
        event.preventDefault();
    } else {
        EstablishedYear.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[13].style.display = 'none';
        invalidMessageLegalPerson[13].textContent = '';
    }

    /*                    validation Registration Number                   */
    if (RegistrationNumber.value === '') {
        RegistrationNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[14].style.display = 'flex';
        invalidMessageLegalPerson[14].textContent = 'لطفا شماره ثبت شرکت خود را وارد کتید';
        event.preventDefault();
    } else {
        RegistrationNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[14].style.display = 'none';
        invalidMessageLegalPerson[14].textContent = '';
    }

    /*                    validation Managing Director                   */
    if (ManagingDirector.value === '') {
        ManagingDirector.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[15].style.display = 'flex';
        invalidMessageLegalPerson[15].textContent = 'لطفا نام مدیر عامل خود را وارد کنید';
        event.preventDefault();
    } else {
        ManagingDirector.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[15].style.display = 'none';
        invalidMessageLegalPerson[15].textContent = '';
    }

    /*                    validation Fixed Contact Number                   */
    if (FixedContactNumber.value === '') {
        FixedContactNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[16].style.display = 'flex';
        invalidMessageLegalPerson[16].textContent = 'لطفا شماره تماس ثابت خود را وارد کنید';
        event.preventDefault();
    } else if (FixedContactNumber.value.length < 7) {
        FixedContactNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[16].style.display = 'flex';
        invalidMessageLegalPerson[16].textContent = 'شماره تماس ثابت باید بیشتر از 7 کاراکتر باشد';
        event.preventDefault();
    } else {
        FixedContactNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[16].style.display = 'none';
        invalidMessageLegalPerson[16].textContent = '';
    }

    /*                    validation Phone Number Real Person                   */
    if (PhoneNumberRealPerson.value === '') {
        PhoneNumberRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[17].style.display = 'flex';
        invalidMessage[17].textContent = 'لطفا شماره موبایل خود را وارد کنید';
        event.preventDefault();
    } else if (PhoneNumberRealPerson.value.length < 10) {
        PhoneNumberRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[17].style.display = 'flex';
        invalidMessage[17].textContent = 'شماره موبایل باید بیش 10 کاراکتر باشد';
        event.preventDefault();
    } else if (PhoneNumberRealPersonPattern.test(PhoneNumberRealPerson.value)) {
        validatePhoneNumber = true;
        PhoneNumberRealPerson.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[17].style.display = 'none';
        invalidMessage[17].textContent = '';
    } else if (!PhoneNumberRealPersonPattern.test(PhoneNumberRealPerson.value)) {
        validatePhoneNumber = false;
        PhoneNumberRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[17].style.display = 'flex';
        invalidMessage[17].textContent = 'شماره موبایل شما صحیح نمی باشد';
        event.preventDefault();
    }

    /*                    validation Fax Real Person form                   */
    if (Fax.value === '') {
        Fax.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[18].style.display = 'flex';
        invalidMessageLegalPerson[18].textContent = 'لطفا شماره فکس خود را وارد کنید';
        event.preventDefault();
    } else if (Fax.value.length < 8) {
        Fax.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[18].style.display = 'flex';
        invalidMessageLegalPerson[18].textContent = 'شماره فکس باید بیشتر از 8 کاراکتر باشد';
        event.preventDefault();
    } else {
        Fax.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[18].style.display = 'none';
        invalidMessageLegalPerson[18].textContent = '';
    }

    /*                    validation State Real Person form                  */
    if (StateRealPerson.value === '') {
        StateRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[19].style.display = 'flex';
        invalidMessageLegalPerson[19].textContent = 'لطفا استان خود را انتخاب کنید';
        event.preventDefault();
    } else {
        StateRealPerson.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[19].style.display = 'none';
        invalidMessageLegalPerson[19].textContent = '';
    }

    /*                    validation City Real Person form                   */
    if (CityRealPerson.value === '') {
        CityRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[20].style.display = 'flex';
        invalidMessageLegalPerson[20].textContent = 'لطفا شهر خود را انتخاب کنید';
        event.preventDefault();
    } else {
        CityRealPerson.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[20].style.display = 'none';
        invalidMessageLegalPerson[20].textContent = '';
    }

    /*                    validation Postal Code Real Person form                 */
    if (PostalCodeRealPerson.value === '') {
        PostalCodeRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[21].style.display = 'flex';
        invalidMessageLegalPerson[21].textContent = 'لطفا کد پستی خود را وارد کنید';
        event.preventDefault();
    } else if (PostalCodeRealPerson.value.length < 10) {
        PostalCodeRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[21].style.display = 'flex';
        invalidMessageLegalPerson[21].textContent = 'کد پستی باید بیشتر از 10 کاراکتر باشد';
        event.preventDefault();
    } else {
        PostalCodeRealPerson.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[21].style.display = 'none';
        invalidMessageLegalPerson[21].textContent = '';
    }

    /*                    validation address Real Person form                   */
    if (addressRealPerson.value === '') {
        addressRealPerson.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessageLegalPerson[22].style.display = 'flex';
        invalidMessageLegalPerson[22].textContent = 'لطفا آذزس خود را وارد کنید';
        event.preventDefault();
    } else {
        addressRealPerson.style = 'border: 1px solid #F4F5FE !important';
        invalidMessageLegalPerson[22].style.display = 'none';
        invalidMessageLegalPerson[22].textContent = '';
    }
});
