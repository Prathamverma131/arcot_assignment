import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef();
  

  useEffect(() => {
    // Destroy existing chart before creating a new one
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
    if(data){
    const ratings = data.ratings.map(item => item.rating);
    const counts = data.ratings.map(item => item.count);

    const chartConfig = {
      type: 'pie',
      data: {
        labels: ratings,
        datasets: [{
          label: 'Rating',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };

    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, chartConfig);

    // Store chart instance in ref for future access
    chartRef.current.chart = chart;
  }}, [data]);

  return <>
    <h2>User Rating Chart</h2>
    <div><canvas ref={chartRef} id="pieChart" width={500} height={500} /></div>
  </>;
};

export default PieChart;