jQuery(document).ready(async function () {
    await getData();
    setTimeout(chartit, 1050);
})

let h, g = []
let i, y = []
let k, l = []
let n, m = []
let x, z = []
let j, v = []
let we, ew = []
let bn, nm = []
let zx, xz = []
let km, mk = []
let ok, ko = []
let nh, hn = []

/**Chart 1 */
function chartit() {

    var ctx = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontColor = 'white';
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: g,
            datasets: [{
                    label: 'Total Positive',
                    data: y,
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                    borderWidth: 1,
                    fill:false
                },

                {
                    label: "Total Samples Tested",
                    lineTension: 0.1,
                    backgroundColor: "rgba(255, 99, 132, 1)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: l,
                    spanGaps: false,
                    fill:false
                }
            ]
        }
    });

    /**Chart 2 */

    var cty = document.getElementById('Chart').getContext('2d');
    var uChart = new Chart(cty, {
        type: 'line',
        data: {
            labels: m,
            datasets: [{
                    label: 'Daily Confirmed',
                    data: z,
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                    borderWidth: 1,
                    fill:false
                },

                {
                    label: "Daily Deceased",
                    lineTension: 0.1,
                    backgroundColor: "rgba(255, 99, 132, 1)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: ew,
                    borderWidth: 1,
                    fill:false
                },
                {
                    label: "Daily Recovered",
                    lineTension: 0.1,
                    backgroundColor: "white",
                    borderColor: "white",
                    data: v,
                    borderWidth: 1,
                    fill:false
                }
            ]
        },
        options: {
            plugins: {
                datalabels: {
                    color: 'white',
                    display: function(context) {
                        return context.dataset.data[context.dataIndex] > 15;
                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: Math.round
                }
            }
    }});
    

    /**Chart 3 */

    var ctz = document.getElementById('cChart').getContext('2d');
    var cChart = new Chart(ctz, {
        type: 'line',
        data: {
            labels: m,
            datasets: [{
                    label: 'Total Confirmed',
                    data: nm,
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                    borderWidth: 1,
                    fill:false
                },
                {
                    label: "Total Deceased",
                    lineTension: 0.1,
                    backgroundColor: "rgba(255, 99, 132, 1)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: mk,
                    spanGaps: false,
                    fill:false
                },
                {
                    label: "Total Recovered",
                    lineTension: 0.1,
                    backgroundColor: "white",
                    borderColor: "white",
                    data: xz,
                    spanGaps: false,
                    fill:false
                }
            ]
        }
    });

    /**Chart 4 */

    var cta = document.getElementById('gChart').getContext('2d');
    var gChart = new Chart(cta, {
        type: 'pie',
        data: {
            labels: ["Total Confirmed Cases In World", 'Total Confirmed Cases In India'],
            datasets: [{
                data: [hn, ko],
                backgroundColor: ['red', 'white'],
                borderColor: 'grey',
                borderWidth: 1
            }]
        }
    });
}