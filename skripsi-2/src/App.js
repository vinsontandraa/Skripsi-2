import React, { useState } from 'react'

import './App.css';
import BarChart from './components/BarChart';
import { AppData } from './Data.js';
import { ApacheData } from './ApacheData.js';

function App() {
  const [appData, setAppData] = useState({
    labels: AppData.map((data) => data.info),
    datasets: [
      {
        label: "app",
        data: AppData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  const [apacheData, setApacheData] = useState({
    labels: ApacheData.map((data) => data.info),
    datasets: [
      {
        label: "app",
        data: ApacheData.map((data) => data.jumlah),
      },
    ],
  });

  return (
    <div className='App'>
      <BarChart chartData={appData} />
      <BarChart chartData={apacheData} />

    </div>
  );
}

export default App;
