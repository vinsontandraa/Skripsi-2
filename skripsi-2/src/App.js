import React, { useState } from 'react'

import './App.css';
import BarChart from './components/BarChart';
import {AppData} from './Data.js';

function App() {
  const [appData, setAppData] = useState({
    labels: AppData.map((data) => data.info),
    datasets: [
      {
        label: "app",
        data: AppData.map((data) => data.jumlah),
      },
    ],
  });

  return (
    <div className='App'>
      <BarChart chartData={appData}/>
    </div>
  );
}

export default App;
