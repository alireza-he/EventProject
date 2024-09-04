$('#calendar').persianDatepicker({
    inline: true,
});

/*               chart for Sale statistics page                           */

var ctx = document.getElementById('left-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            data: [10, 20, 30]
        }]
    },

    // Configuration options go here
    options: {}
});

// let ctx0 = document.getElementById('left-chart').getContext('2d');
// let chart = new Chart(ctx0, {
//     // The type of chart we want to create
//     type: 'polarArea',
//     // The data for our dataset
//     data: {
//         labels: ['Red', 'Yellow', 'Blue'],
//         datasets: [{
//             data: [10, 20, 30]
//         }],
//     },
// });

