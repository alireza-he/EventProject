let countDownDate = new Date("feb 30, 2021 12:30:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = 0;
        document.getElementById("hour").innerHTML = 0;
        document.getElementById("minute").innerHTML = 0;
        document.querySelector('.titleAndIcon span').innerHTML = 'پایان رویداد'
    }
}, 1000);