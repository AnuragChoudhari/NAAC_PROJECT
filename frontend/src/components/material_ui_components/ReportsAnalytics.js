import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';


function ReportsAnalytics() {
  return (
    <>

      <div className="">
    
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Computer Science Dept', 'Mechanical Dept'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [1, 6, 3] }, { data: [1, 6, 3] }]}
      width={500}
      height={300}
    />
      </div>
    </>
  );
}

export default ReportsAnalytics;
