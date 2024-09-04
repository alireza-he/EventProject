const formSelectTheVenuePage = document.getElementById('form-SelectTheVenuePage');
let State = document.getElementById('State');
let City = document.getElementById('City');
let Complex = document.getElementById('Complex');
let invalidMessage = document.querySelectorAll('.invalid-message');

formSelectTheVenuePage.addEventListener('submit', function () {
    if (Complex.value === '') {
        Complex.style = 'border: 2px solid red !important';
        invalidMessage[2].textContent = 'لطفا مجتمع خود را انتخاب کنید';
        event.preventDefault();
    } else {
        Complex.style = 'border: none !important';
        invalidMessage[2].textContent = '';
    }

    if (City.value === '') {
        City.style = 'border: 2px solid red !important';
        invalidMessage[1].textContent = 'لطفا شهر خود را انتخاب کنید';
        event.preventDefault();
    } else {
        City.style = 'border: none !important';
        invalidMessage[1].textContent = '';
    }

    if (State.value === '') {
        State.style = 'border: 2px solid red !important';
        invalidMessage[0].textContent = 'لطفا استان خود را انتخاب کنید';
        event.preventDefault();
    } else {
        State.style = 'border: none !important';
        invalidMessage[0].textContent = '';
    }
});
