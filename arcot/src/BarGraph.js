import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js library

const BarChart = ({ chartData }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    // If there's an existing chart instance, destroy it before creating a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false,
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);

  return (
    <div>
      <h2>Category Distribution Chart</h2>
      <div style={{ position: 'relative', height: '400px', width: '90vw' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BarChart;