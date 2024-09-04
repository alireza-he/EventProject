$('.owl-carousel-EventList').owlCarousel({
    rtl: true,
    nav: true,
    dots: true,
    autoplay: true,
    margin: 25,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$('.owl-carousel').owlCarousel({
    rtl: true,
    loop:true,
    autoplay: true,
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

/*           Left list codes             */

/*$('#mainPage').on('click', function () {
    $('#mainPage a').css('border-right', '5px solid #FF0077');
    $('#mainPage a svg path').css('fill', '#FF0077');
});

$('#events').on('click', function () {
    $('#events a').css('border-right', '5px solid #FF0077');
    $('#events a svg path').css('fill', '#FF0077');
});

$('#movieTheaters').on('click', function () {
    $('#movieTheaters a').css('border-right', '5px solid #FF0077');
    $('#movieTheaters a svg path').css('fill', '#FF0077');
});

$('#restaurant').on('click', function () {
    $('#restaurant a').css('border-right', '5px solid #FF0077');
    $('#restaurant a svg path').css('fill', '#FF0077');
});

$('#RecreationCenters').on('click', function () {
    $('#RecreationCenters a').css('border-right', '5px solid #FF0077');
    $('#RecreationCenters a svg path').css('fill', '#FF0077');
});*/

/*                  show time in event page                  */

/*let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

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
        document.getElementById("timer").innerHTML = "Done";
    }
}, 1000);*/

