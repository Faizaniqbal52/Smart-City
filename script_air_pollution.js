// JavaScript for Air Pollution Chart

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('air-pollution-chart').getContext('2d');
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Air Pollution Level',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [10, 20, 30, 25, 15, 30, 40], // Sample data (replace with actual air pollution data)
        }]
    };

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
