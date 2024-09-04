const formPaymentList = document.getElementById('form-PaymentList');
const AccountHolderName = document.getElementById('AccountHolderName');
const ShabaNumber = document.getElementById('ShabaNumber');
const cardNumber = document.getElementById('cardNumber');
const accountNumber = document.getElementById('accountNumber');
const invalidMessage = document.querySelectorAll('.invalid-message');
const ShabaNumberPattern = /^(?:IR)(?=.{24}$)[0-9]*$/;
let validateShabaNumber = false;

formPaymentList.addEventListener('submit', function () {

    /*                   validation Account Holder Name                    */
    if (AccountHolderName.value === '') {
        AccountHolderName.style = 'border: 2px solid red !important';
        invalidMessage[0].textContent = 'لطفا نام دارنده حساب را وارد کنید';
        event.preventDefault();
    } else {
        AccountHolderName.style = 'border: none !important';
        invalidMessage[0].textContent = '';
    }

    /*                    validation Shaba Number                    */
    if (ShabaNumber.value === '') {
        ShabaNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[1].textContent = 'لطفا شماره شبا خود را وارد کنید';
        event.preventDefault();
    } else if (ShabaNumber.value.length <= 16) {
        ShabaNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[1].textContent = 'شماره شبا باید 16 رقم باشد';
        event.preventDefault();
    } else if (ShabaNumberPattern.test(ShabaNumber.value)) {
        validateShabaNumber = true;
        ShabaNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[1].textContent = '';
    } else if (!ShabaNumberPattern.test(ShabaNumber.value)) {
        validateShabaNumber = false;
        ShabaNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[1].textContent = 'شماره شبا شما صحیح نمی باشد';
        event.preventDefault();
    }

    /*                    validation cardNumber                    */
    /*const cardNumberValue = cardNumber.value;

    function validateCard(cardNumberValue) {
        if (typeof cardNumberValue === 'undefined'
            || cardNumberValue === null
            || cardNumberValue.length !== 16) {
            return false;
        }
        let cardTotal = 0;
        for (let i = 0; i < 16; i += 1) {
            const c = Number(cardNumberValue[i]);
            if (i % 2 === 0) {
                cardTotal += ((c * 2 > 9) ? (c * 2) - 9 : (c * 2));
            } else {
                cardTotal += c;
            }
        }
        return (cardTotal % 10 === 0);
    }*/

    if (cardNumber.value === '') {
        cardNumber.style = 'border: 2px solid red !important';
        invalidMessage[2].textContent = 'لطفا شماره کارت خود را وارد کنید';
        event.preventDefault();
    } else if (cardNumber.value.length !== 16) {
        cardNumber.style = 'border: 2px solid red !important';
        invalidMessage[2].textContent = 'شماره کارت شما باید 16 رقم باشد';
        event.preventDefault();
    } else {
        cardNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[2].textContent = '';
    }

    /*                    validation account Number                    */
    if (accountNumber.value === '') {
        accountNumber.style = 'border: 2px solid red !important';
        invalidMessage[3].textContent = 'لطفا شماره حساب خود را وارد کنید';
        event.preventDefault();
    } else if (accountNumber.value.length !== 10) {
        accountNumber.style = 'border: 2px solid rgb(255, 0, 0) !important';
        invalidMessage[3].textContent = 'شماره حساب باید 10 رقم باشد';
        event.preventDefault();
    } else {
        accountNumber.style = 'border: 1px solid #F4F5FE !important';
        invalidMessage[3].style.display = 'none';
        invalidMessage[3].textContent = '';
    }
});

