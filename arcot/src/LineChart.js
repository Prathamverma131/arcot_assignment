import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './linechart.module.css';

const LineChart = ({ dailyData, weeklyData }) => {
  const dailyChartRef = useRef();
  const weeklyChartRef = useRef();

  useEffect(() => {
    // Destroy existing charts before creating new ones
    if (dailyChartRef.current && dailyChartRef.current.chart) {
      dailyChartRef.current.chart.destroy();
    }
    if (weeklyChartRef.current && weeklyChartRef.current.chart) {
      weeklyChartRef.current.chart.destroy();
    }
    
    if(dailyData){
        
    
    const dailyLabels = dailyData.map(entry => entry.date);
    const dailyValues = dailyData.map(entry => entry.average_time);

    const weeklyLabels = weeklyData.map(entry => `Week ${entry.week}`);
    const weeklyValues = weeklyData.map(entry => entry.average_time);

    const dailyChartConfig = {
      type: 'line',
      data: {
        labels: dailyLabels,
        datasets: [{
          label: 'Daily Average Response Time',
          data: dailyValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const weeklyChartConfig = {
      type: 'line',
      data: {
        labels: weeklyLabels,
        datasets: [{
          label: 'Weekly Average Response Time',
          data: weeklyValues,
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const dailyCtx = dailyChartRef.current.getContext('2d');
    const dailyChart = new Chart(dailyCtx, dailyChartConfig);

    const weeklyCtx = weeklyChartRef.current.getContext('2d');
    const weeklyChart = new Chart(weeklyCtx, weeklyChartConfig);

    // Store chart instances in ref for future access
    dailyChartRef.current.chart = dailyChart;
    weeklyChartRef.current.chart = weeklyChart;}
  }, [dailyData, weeklyData]);

  return (<div style={{marginBottom:"16px"}}>
    <h2 className={styles.heading}>Response Time</h2>
    <div className={styles.container} style={{ position: 'relative', width: '90vw',display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",padding:"8px",rowGap:"16px" }}>
        <div className={styles.first}>
      <canvas ref={dailyChartRef} id="dailyChart"></canvas></div>
      <div className={styles.first}>
      <canvas ref={weeklyChartRef} id="weeklyChart"></canvas>
      </div>
    </div>
    </div>
  );
};

export default LineChart;