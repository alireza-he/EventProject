$('#startDate').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    autoClose: true
});

$('#ExpirationDate').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    autoClose: true
});

const formDiscountCodesPage = document.getElementById('form-DiscountCodesPage');
const eventName = document.getElementById('eventName');
const discountCode = document.getElementById('discountCode');
const startDate = document.getElementById('startDate');
const ExpirationDate = document.getElementById('ExpirationDate');
const DescriptionDiscountCodesPage = document.getElementById('Description-DiscountCodesPage');
const DiscountRate = document.getElementById('DiscountRate');
const MinimumInvoiceAmount = document.getElementById('MinimumInvoiceAmount');
const MaximumDiscountAmount = document.getElementById('MaximumDiscountAmount');
const invalidMessage = document.querySelectorAll('.invalid-message');

formDiscountCodesPage.addEventListener('submit', function () {

    /*                    validation event Name                    */
    if (eventName.value === '') {
        eventName.style = 'border: 2px solid red !important';
        invalidMessage[0].innerHTML = 'لطفا نام رویداد را وارد کنید';
        event.preventDefault();
    } else {
        eventName.style = 'border: none !important';
        invalidMessage[0].textContent = '';
    }

    /*                    validation discountCode                    */
    if (discountCode.value === '') {
        discountCode.style = 'border: 2px solid red !important';
        invalidMessage[1].innerHTML = 'لطفا کد تخفیف ارسال شده را وارد کنید';
        event.preventDefault();
    } else {
        discountCode.style = 'border: none !important';
        invalidMessage[1].textContent = '';
    }

    /*                    validation start Date                    */
    if (startDate.value === '') {
        startDate.style = 'border: 2px solid red !important';
        invalidMessage[2].innerHTML = 'لطفا تاریخ شروع رویداد را وارد کنید';
        event.preventDefault();
    } else {
        startDate.style = 'border: none !important';
        invalidMessage[2].textContent = '';
    }

    /*                    validation Expiration Date                    */
    if (ExpirationDate.value === '') {
        ExpirationDate.style = 'border: 2px solid red !important';
        invalidMessage[3].innerHTML = 'لطفا تاریخ انقضا رویداد را وارد کنید';
        event.preventDefault();
    } else {
        ExpirationDate.style = 'border: none !important';
        invalidMessage[3].textContent = '';
    }

    /*                    validation Description Discount Codes Page                    */
    if (DescriptionDiscountCodesPage.value === '') {
        DescriptionDiscountCodesPage.style = 'border: 2px solid red !important';
        invalidMessage[4].innerHTML = 'لطفا توضیحات رویداد را وارد کنید';
        event.preventDefault();
    } else {
        DescriptionDiscountCodesPage.style = 'border: none !important';
        invalidMessage[4].textContent = '';
    }
    /*                    validation Discount Rate                    */
    if (DiscountRate.value === '') {
        DiscountRate.style = 'border: 2px solid red !important';
        invalidMessage[5].innerHTML = 'لطفا نرخ تخفیف را وارد کنید';
        event.preventDefault();
    } else {
        DiscountRate.style = 'border: none !important';
        invalidMessage[5].textContent = '';
    }
    /*                    validation Minimum Invoice Amount                    */
    if (MinimumInvoiceAmount.value === '') {
        MinimumInvoiceAmount.style = 'border: 2px solid red !important';
        invalidMessage[6].innerHTML = 'لطفا حداقل مبلغ صورتحساب را وارد کنید';
        event.preventDefault();
    } else {
        MinimumInvoiceAmount.style = 'border: none !important';
        invalidMessage[6].textContent = '';
    }
    /*                    validation Maximum Discount Amount                    */
    if (MaximumDiscountAmount.value === '') {
        MaximumDiscountAmount.style = 'border: 2px solid red !important';
        invalidMessage[7].innerHTML = 'لطفا حداکثر مبلغ تخفیف را وارد کنید';
        event.preventDefault();
    } else {
        MaximumDiscountAmount.style = 'border: none !important';
        invalidMessage[7].textContent = '';
    }
});
