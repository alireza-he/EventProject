let minute = document.getElementById("minute");
let second = document.getElementById("second");

minute.innerText = '02';
second.innerText = '00';

var timerInterval = setInterval(timer, 1000);

function timer() {
    if (minute.innerHTML === "00" && second.innerHTML === "00") {
        minute.innerHTML = "00";
        minute.innerHTML = "00";
        $('#resend').show();
        $('#timer').hide();
        clearInterval(timerInterval);
        return
    }

    if (parseInt(second.innerHTML) === 0) {
        let newMin = (parseInt(minute.innerHTML) - 1).toString();
        if (newMin < 10)
            newMin = "0" + newMin;
        minute.innerHTML = newMin;
        second.innerHTML = "59";
    } else {
        let newSec = (parseInt(second.innerHTML) - 1).toString();
        if (newSec < 10)
            newSec = "0" + newSec;
        second.innerHTML = newSec;
    }
}

$('#resentCode').on('click', function () {
    $('#resend').hide();
    $('#timer').show();
    minute.innerText = '02';
    second.innerText = '00';
    timerInterval = setInterval(timer, 1000);
});
