function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

const formAboutUsPage = document.getElementById('form-aboutUsPage');
const OrganizerName = document.getElementById('OrganizerName');
const ABriefDescriptionOfYourActivity = document.getElementById('ABriefDescriptionOfYourActivity');
const AddContent = document.getElementById('AddContent');
const FixedContactNumber = document.getElementById('FixedContactNumber');
const MobileNumber = document.getElementById('MobileNumber');
const Fax = document.getElementById('Fax');
const Email = document.getElementById('Email');
const website = document.getElementById('website');
const InstagramPageAddress = document.getElementById('InstagramPageAddress');
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

    /*                    validation Fax                    */
    if (Fax.value === '') {
        Fax.style = 'border: 2px solid red !important';
        invalidMessage[4].innerHTML = 'لطفا شماره فکس خود را وارد کنید';
        event.preventDefault();
    } else {
        Fax.style = 'border: none !important';
        invalidMessage[4].textContent = '';
    }

    /*                    validation Mobile Number                    */
    if (MobileNumber.value === '') {
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[5].textContent = 'لطفا شماره موبایل خود را وارد کنید';
        event.preventDefault();
    } else if (MobileNumber.value.length < 10) {
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[5].textContent = 'شماره موبایل باید بیش 10 کاراکتر باشد';
        event.preventDefault();
    } else if (phoneNumberPattern.test(MobileNumber.value)) {
        validatePhoneNumber = true;
        MobileNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[5].textContent = '';
    } else if (!phoneNumberPattern.test(MobileNumber.value)) {
        validatePhoneNumber = false;
        MobileNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[5].textContent = 'شماره موبایل شما صحیح نمی باشد';
        event.preventDefault();
    }

    /*                    validation Email                    */
    if (Email.value === '') {
        Email.style = 'border: 2px solid red !important';
        invalidMessage[6].innerHTML = 'لطفا آدرس ایمیل خود را وارد کنید';
        event.preventDefault();
    } else {
        Email.style = 'border: none !important';
        invalidMessage[6].textContent = '';
    }

    /*                    validation website                    */
    if (website.value === '') {
        website.style = 'border: 2px solid red !important';
        invalidMessage[7].innerHTML = 'لطفا آدرس وب سایت خود را وارد کنید';
        event.preventDefault();
    } else {
        website.style = 'border: none !important';
        invalidMessage[7].textContent = '';
    }

    /*                    validation Instagram Page Address                    */
    if (InstagramPageAddress.value === '') {
        InstagramPageAddress.style = 'border: 2px solid red !important';
        invalidMessage[8].innerHTML = 'لطفا آدرس پیج اینستاگرام خود را وارد کنید';
        event.preventDefault();
    } else {
        InstagramPageAddress.style = 'border: none !important';
        invalidMessage[8].textContent = '';
    }
});
