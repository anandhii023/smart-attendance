<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
        }
        .card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 200px;
            padding: 20px;
            margin: 10px;
            text-align: center;
            flex: 1 1 calc(25% - 40px);
        }
        .card h3 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }
        .card p {
            margin: 5px 0;
            font-size: 18px;
            color: #777;
        }
        .chart-container {
            width: 50%;
            max-width: 250px;
            margin: 250px auto;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="card">
            <h3>Present</h3>
            <p>50</p>
        </div>
        <div class="card">
            <h3>Absent</h3>
            <p>10</p>
        </div>
        <div class="card">
            <h3>Active</h3>
            <p>40</p>
        </div>
        <div class="card">
            <h3>Holiday</h3>
            <p>5</p>
        </div>
    </div>

    <div class="chart-container">
        <canvas id="attendanceChart"></canvas>
    </div>

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Get the context of the canvas element for the pie chart
        const ctx = document.getElementById('attendanceChart').getContext('2d');

        // Data for the pie chart
        const data = {
            labels: ['Present', 'Absent'],
            datasets: [{
                data: [50, 10],  // You can dynamically update this based on the actual data
                backgroundColor: ['#4CAF50', '#F44336'],
            }]
        };

        // Pie chart configuration
        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                }
            },
        };

        // Render the pie chart
        const attendanceChart = new Chart(ctx, config);
    </script>

</body>
</html>
