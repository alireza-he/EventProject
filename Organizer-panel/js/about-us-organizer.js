const formAboutUsPage = document.getElementById('form-aboutUsPage');
const OrganizerName = document.getElementById('OrganizerName');
const ABriefDescriptionOfYourActivity = document.getElementById('ABriefDescriptionOfYourActivity');
const AddContent = document.getElementById('AddContent');
const FixedContactNumber = document.getElementById('FixedContactNumber');
const MobileNumber = document.getElementById('MobileNumber');
const invalidMessage = document.querySelectorAll('.invalid-message');
const phoneNumberPattern = /^(?:98|\+98|0098|0)?9[0-9]{9}$/;
let validatePhoneNumber = false;

formAboutUsPage.addEventListener('submit', function () {

    /*                    validation Organizer Name                    */
    if (OrganizerName.value === '') {
        OrganizerName.style = 'border: 2px solid red !important';
        invalidMessage[0].innerHTML = 'لطفا نام برگزار کننده را وارد کنید';
        event.preventDefault();
    } else {
        OrganizerName.style = 'border: none !important';
        invalidMessage[0].textContent = '';
    }

    /*                    validation ABrief Description Of Your Activity                    */


    if (ABriefDescriptionOfYourActivity.value === '') {
        ABriefDescriptionOfYourActivity.style = 'border: 2px solid red !important';
        invalidMessage[1].innerHTML = 'لطفا نوضیح کوتاه را وارد کنید';
        event.preventDefault();
    } else {
        ABriefDescriptionOfYourActivity.style = 'border: none !important';
        invalidMessage[1].textContent = '';
    }

    /*                    validation Add Content                    */


    if (AddContent.value === '') {
        AddContent.style = 'border: 2px solid red !important';
        invalidMessage[2].innerHTML = 'لطفا محتوا خود را وارد کنید';
        event.preventDefault();
    } else {
        AddContent.style = 'border: none !important';
        invalidMessage[2].textContent = '';
    }


    /*                    validation Fixed Contact Number                    */

    if (FixedContactNumber.value === '') {
        FixedContactNumber.style = 'border: 2px solid red !important';
        invalidMessage[3].innerHTML = 'لطفا تلفن ثابت خود را وارد کنید';
        event.preventDefault();
    } else if (FixedContactNumber.value.length < 8) {
        FixedContactNumber.style = 'border: 2px solid red !important';
        invalidMessage[3].innerHTML = 'لطفا تلفن ثابت خود را کامل وارد کنید';
        event.preventDefault();
    } else {
        FixedContactNumber.style = 'border: none !important';
        invalidMessage[3].textContent = '';
    }

    /*                    validation Mobile Number                    */

    if (MobileNumber.value === '') {
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[4].style.display = 'flex';
        invalidMessage[4].textContent = 'لطفا شماره موبایل خود را وارد کنید';
        event.preventDefault();
    } else if (MobileNumber.value.length < 10) {
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[4].style.display = 'flex';
        invalidMessage[4].textContent = 'شماره موبایل باید بیش 10 کاراکتر باشد';
        event.preventDefault();
    } else if (phoneNumberPattern.test(MobileNumber.value)) {
        validatePhoneNumber = true;
        MobileNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[4].style.display = 'none';
        invalidMessage[4].textContent = '';
    } else if (!phoneNumberPattern.test(MobileNumber.value)) {
        validatePhoneNumber = false;
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[4].style.display = 'flex';
        invalidMessage[4].textContent = 'شماره موبایل شما صحیح نمی باشد';
        event.preventDefault();
    }
});
