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

$('.owl-carousel-EventList-dotsAndNavNon').owlCarousel({
    rtl: true,
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