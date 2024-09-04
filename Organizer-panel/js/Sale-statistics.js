/*               chart for Sale statistics page                           */

let ctx0 = document.getElementById('myChart-bar0').getContext('2d');
var chart = new Chart(ctx0, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ['0%', '35%', '10%', '35%', '30%', '20%', '30%', '35%', '10%', '35%', '30%', '20%', '30%'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#4E57AA',
            borderColor: '#4E57AA',
            data: [0, 35, 10, 35, 30, 20, 30, 35, 10, 35, 30, 20, 30]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontFamily: "IRANSansFaNum"
            }
        }
    }
});


let ctx1 = document.getElementById('myChart-bar1').getContext('2d');
var chart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ['0%', '35%', '10%', '35%', '30%', '20%', '30%', '35%', '10%', '35%', '30%', '20%', '30%'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#4E57AA',
            borderColor: '#4E57AA',
            data: [0, 35, 10, 35, 30, 20, 30, 35, 10, 35, 30, 20, 30]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontFamily: "IRANSansFaNum"
            }
        }
    }
});
