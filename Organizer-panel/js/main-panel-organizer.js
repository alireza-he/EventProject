/*               nav in responsive codes                */

$('#bars-icon').on('click', function () {
    $('#nav').css('right', '0px');
});

$('#nav-close-icon').on('click', function () {
    $('#nav').css('right', '-300px');
});

/*               chart for Dashboard organizer page                           */

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#55BCC9',
            borderColor: '#55BCC9',
            data: [0, 10, 5, 2, 20, 30, 45]
        }, {
            label: ['', '', '', ''],
            backgroundColor: '#16D8C9',
            borderColor: '#16D8C9',
            data: [0, 20, 10, 5, 20, 30, 40]
        }]
    },

    // Configuration options go here
    options: {}
});

/*                 */
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
/*              header links                */

// let iconHeader1 = document.querySelector('#icon-header1');
// let iconHeader1Span = document.getElementById('#icon-header1 span');
// const iconHeader2 = document.querySelector('#icon-header2');
// const iconHeader3 = document.querySelector('#icon-header3');
// const iconHeader4 = document.querySelector('#icon-header4');
// const bgIcons = document.querySelector('#bg-icons');
//
// iconHeader1.addEventListener('click', function () {
//     bgIcons.style.display = 'flex';
// });
// iconHeader2.addEventListener('click', function () {
//     bgIcons.style.display = 'flex';
// });
// iconHeader3.addEventListener('click', function () {
//     bgIcons.style.display = 'flex';
// });
// iconHeader4.addEventListener('click', function () {
//     bgIcons.style.display = 'flex';
//     iconHeader1Span.style.display = 'none'
// });
