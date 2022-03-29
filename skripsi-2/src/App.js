import React, { useState } from 'react'

import './App.css';
import BarChart from './components/BarChart';
import { AppData } from './Data.js';
import { ApacheData } from './ApacheData.js';
import {NginxData} from './NginxData';
import { PhpData } from './PhpData';
import { PythonData } from './PythonData';
import { JQMigrateData } from './JQueryMigrateData';
import { JQueryData } from './JQueryData';

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
        label: "Apache",
        data: ApacheData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  const [nginxData, setNginxData] = useState({
    labels: NginxData.map((data) => data.info),
    datasets: [
      {
        label: "Nginx",
        data: NginxData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  const [phpData, setPhpData] = useState({
    labels: PhpData.map((data) => data.info),
    datasets: [
      {
        label: "PHP",
        data: PhpData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  const [pythonData, setPythonData] = useState({
    labels: PythonData.map((data) => data.info),
    datasets: [
      {
        label: "Python",
        data: PythonData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  const [jqmigrateData, setJQMigrateData] = useState({
    labels: JQMigrateData.map((data) => data.info),
    datasets: [
      {
        label: "jQuery Migrate",
        data: JQMigrateData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  const [jqueryData, setJQueryData] = useState({
    labels: JQueryData.map((data) => data.info),
    datasets: [
      {
        label: "jQuery",
        data: JQueryData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  });

  return (
    <div className='App'>
      <BarChart chartData={appData} />
      <BarChart chartData={apacheData} />
      <BarChart chartData={nginxData} />
      <BarChart chartData={nginxData} />
      <BarChart chartData={phpData} />
      <BarChart chartData={pythonData} />
      <BarChart chartData={jqmigrateData} />
      <BarChart chartData={jqueryData} />


    </div>
  );
}

export default App;
