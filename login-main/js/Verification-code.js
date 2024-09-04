const formActiveCode = document.querySelector('#formActiveCode');
const line = document.querySelectorAll('.line');

formActiveCode.addEventListener('submit', validateActiveCode);

function validateActiveCode(event) {
    const activeCode = document.getElementById('activeCode');
    const activeCodeError = document.querySelector('.invalid-message');

    activeCodeError.textContent = '';
    if (activeCode.value.length < 6) {
        line.forEach(i => i.style.background = '#FF0000');
        activeCodeError.style.display = 'flex';
        activeCodeError.textContent = 'لطفا کد ارسال شده را کامل وارد نمایید';
        event.preventDefault();
    }

    if (activeCode.value === '') {
        line.forEach(i => i.style.background = '#FF0000');
        activeCodeError.style.display = 'flex';
        activeCodeError.textContent = 'لطفا کد ارسال شده را وارد نمایید';
        event.preventDefault();
    }
}
