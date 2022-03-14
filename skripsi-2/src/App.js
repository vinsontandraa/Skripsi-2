import React, { useState } from 'react'

import './App.css';
import BarChart from './components/BarChart';
import {appData} from './Data.json';

function App() {
  const [appData, setAppData] = useState({
    label: appData.map((data) => data.info),
    datasets: [
      {
        label: "result",
        data: appData.map((data) => data.app),
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
