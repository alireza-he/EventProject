const formRegistrationANewOrganizer = document.getElementById('form-RegistrationANewOrganizer');
const eventName = document.getElementById('eventName');
const Grouping = document.getElementById('Grouping');
const ShortExplanation = document.getElementById('ShortExplanation');
const AdditionalExplanation = document.getElementById('AdditionalExplanation');
const Specifications0 = document.getElementById('Specifications0');
const Specifications1 = document.getElementById('Specifications1');
const Specifications2 = document.getElementById('Specifications2');
const Description0 = document.getElementById('Description0');
const Description1 = document.getElementById('Description1');
const Description2 = document.getElementById('Description2');
const invalidMessage = document.querySelectorAll('.invalid-message');

formRegistrationANewOrganizer.addEventListener('submit', function () {

    /*                    validation Organizer Name                    */
    if (eventName.value === '') {
        eventName.style = 'border: 2px solid red !important';
        invalidMessage[0].innerHTML = 'لطفا نام رویداد خود را وارد کنید';
        event.preventDefault();
    } else {
        eventName.style = 'border: none !important';
        invalidMessage[0].textContent = '';
    }

    /*                    validation ABrief Description Of Your Activity                    */


    if (Grouping.value === '') {
        Grouping.style = 'border: 2px solid red !important';
        invalidMessage[1].innerHTML = 'لطفا دسته بندی را انتخاب کنید';
        event.preventDefault();
    } else {
        Grouping.style = 'border: none !important';
        invalidMessage[1].textContent = '';
    }

    /*                    validation Add Content                    */


    if (ShortExplanation.value === '') {
        ShortExplanation.style = 'border: 2px solid red !important';
        invalidMessage[2].innerHTML = 'لطفا توضیح کوتاه خود را وارد کنید';
        event.preventDefault();
    } else {
        ShortExplanation.style = 'border: none !important';
        invalidMessage[2].textContent = '';
    }


    /*                    validation Fixed Contact Number                    */

    if (AdditionalExplanation.value === '') {
        AdditionalExplanation.style = 'border: 2px solid red !important';
        invalidMessage[3].innerHTML = 'لطفا توضیح تکمیلی خود را وارد کنید';
        event.preventDefault();
    } else {
        AdditionalExplanation.style = 'border: none !important';
        invalidMessage[3].textContent = '';
    }

    /*                    validation Specifications1 and Description                    */

    if (Specifications0.value === '') {
        Specifications0.style = 'border: 2px solid red !important';
        invalidMessage[4].innerHTML = 'لطفا مشخصات خود را وارد کنید';
        event.preventDefault();
    } else {
        Specifications0.style = 'border: none !important';
        invalidMessage[4].textContent = '';
    }

    if (Description0.value === '') {
        Description0.style = 'border: 2px solid red !important';
        invalidMessage[5].innerHTML = 'لطفا توضیحات خود را وارد کنید';
        event.preventDefault();
    } else {
        Description0.style = 'border: none !important';
        invalidMessage[5].textContent = '';
    }

    if (Specifications1.value === '') {
        Specifications1.style = 'border: 2px solid red !important';
        invalidMessage[6].innerHTML = 'لطفا مشخصات خود را وارد کنید';
        event.preventDefault();
    } else {
        Specifications1.style = 'border: none !important';
        invalidMessage[6].textContent = '';
    }

    if (Description1.value === '') {
        Description1.style = 'border: 2px solid red !important';
        invalidMessage[7].innerHTML = 'لطفا توضیحات خود را وارد کنید';
        event.preventDefault();
    } else {
        Description1.style = 'border: none !important';
        invalidMessage[7].textContent = '';
    }

    if (Specifications2.value === '') {
        Specifications2.style = 'border: 2px solid red !important';
        invalidMessage[8].innerHTML = 'لطفا مشخصات خود را وارد کنید';
        event.preventDefault();
    } else {
        Specifications2.style = 'border: none !important';
        invalidMessage[8].textContent = '';
    }

    if (Description2.value === '') {
        Description2.style = 'border: 2px solid red !important';
        invalidMessage[9].innerHTML = 'لطفا توضیحات خود را وارد کنید';
        event.preventDefault();
    } else {
        Description2.style = 'border: none !important';
        invalidMessage[9].textContent = '';
    }
});
