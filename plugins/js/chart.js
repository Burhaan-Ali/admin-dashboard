$(document).ready(function () {
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Sales (USD)',
        data: [1200, 1900, 3000, 500, 2000, 3000],
        backgroundColor: 'rgba(42, 168, 242, 0.2)',
        borderColor: 'rgba(42, 168, 242, 1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true
    }]
    },
    options: {
    responsive: true,
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});
});

  $(document).ready(function () {
    const ctx = document.getElementById('barChart').getContext('2d');

    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Users Registered',
          data: [12, 19, 3, 5, 2, 7],
          backgroundColor: [
            '#2AA8F2', '#4FD1C5', '#F6AD55', '#FC8181', '#90CDF4', '#A3E635'
          ],
          borderColor: '#2AA8F2',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5
            }
          }
        }
      }
    });
  });
