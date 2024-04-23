// Generate random data for the traffic congestion chart
function generateTrafficData() {
    let labels = [];
    let data = [];
    for (let i = 2010; i <= 2024; i++) {
        labels.push(i.toString());
        data.push(Math.floor(Math.random() * 100) + 50); // Random value between 50 and 150
    }
    return { labels: labels, data: data };
}

// Function to create and display the traffic congestion chart
function createTrafficChart() {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    const trafficData = generateTrafficData();
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: trafficData.labels,
            datasets: [{
                label: 'Traffic Congestion',
                data: trafficData.data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// Call the function to create the traffic congestion chart when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createTrafficChart();
});
