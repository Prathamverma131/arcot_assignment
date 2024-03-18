import React from 'react';
import data from './ai_data';
import BarChart from './BarGraph';
import { useState } from 'react';
import { useEffect } from 'react';
import LineChart from './LineChart';


const App = () => {

  const [chartData,setChartData] = useState({});
  const [responseTime,setResponseTime] = useState("");
  useEffect(()=>{
    //Component dID Mount
    //To create category data
    createCategoryData();
    createResponseTime();

  },[])

  function createResponseTime(){

    const response_times = data.response_times;
    setResponseTime(response_times);
  }

  function createCategoryData(){
    //Mock api call
    const category_distribution = data.category_distribution;
  
    setChartData( {
      labels: Object.keys(category_distribution),
      datasets: [
        {
          label: 'Category Distribution',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          color: 'red',
          borderWidth: 1,
          data: Object.values(category_distribution),
        },
      ],
    });


  }


   
 

  return (
    <div style={{margin:"8px"}}>
      <h1 style={{textAlign:"center",marginBottom:32}}>My Dashboard</h1>
      <ol style={{fontSize:"19px"}}>
      <li><BarChart chartData={chartData} /></li>
      <li>
      <LineChart
        dailyData={responseTime.day_wise}
        weeklyData={responseTime.week_wise}
      /></li>
      </ol>
    </div>
  );
};

export default App;
