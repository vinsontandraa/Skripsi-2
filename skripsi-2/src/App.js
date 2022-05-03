import './App.css';
import BarChart from './components/BarChart';
import { AppData } from './Data.js';
import { ApacheData } from './ApacheData.js';
import { NginxData } from './NginxData';
import { PhpData } from './PhpData';
import { PythonData } from './PythonData';
import { JQMigrateData } from './JQueryMigrateData';
import { JQueryData } from './JQueryData';

import BasicTable from './components/Table/BasicTable';
import {URL_ALL_RESULT_TABLE} from "./json/url_all_result_table";
import {CATEGORY_PER_UNSUPPORTED} from "./json/category_per_jumlah_unsupported";
import {NUMSITES_APP_RESULT} from "./json/numsites_app_result";

//Create Measurement Color
function color(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].result === "UNSUPPORTED" ? temp.push("red") : temp.push("#0000FF"); //biru
  }
  return temp
}

//Create Chart with JSON data
function App() {
  const appData = {
    labels: AppData.map((data) => data.info),
    datasets: [
      {
        label: "app",
        data: AppData.map((data) => data.jumlah),
        backgroundColor: ["orange"]
      },
    ],
  };

  const apacheData = {
    labels: ApacheData.map((data) => data.info),
    datasets: [
      {
        label: "Apache",
        data: ApacheData.map((data) => data.jumlah),
        backgroundColor: color(ApacheData)
      },
    ],
  };

  const nginxData = {
    labels: NginxData.map((data) => data.info),
    datasets: [
      {
        label: "Nginx",
        data: NginxData.map((data) => data.jumlah),
        backgroundColor: color(NginxData)
      },
    ],
  };

  const phpData = {
    labels: PhpData.map((data) => data.info),
    datasets: [
      {
        label: "PHP",
        data: PhpData.map((data) => data.jumlah),
        backgroundColor: color(PhpData)
      },
    ],
  };

  const pythonData = {
    labels: PythonData.map((data) => data.info),
    datasets: [
      {
        label: "Python",
        data: PythonData.map((data) => data.jumlah),
        backgroundColor: color(PythonData)
      },
    ],
  };

  const jqmigrateData = {
    labels: JQMigrateData.map((data) => data.info),
    datasets: [
      {
        label: "jQuery Migrate",
        data: JQMigrateData.map((data) => data.jumlah),
        backgroundColor: color(JQMigrateData)
      },
    ],
  };

  const jqueryData = {
    labels: JQueryData.map((data) => data.info),
    datasets: [
      {
        label: "jQuery",
        data: JQueryData.map((data) => data.jumlah),
        backgroundColor: color(JQueryData)
      },
    ],
  };

  return (
    <div className='App'>
      <BasicTable data={CATEGORY_PER_UNSUPPORTED} title="Number of Categories by Unsupported Version"/>
      <BasicTable data={URL_ALL_RESULT_TABLE} title="Usage of technologies per site (top 10)" />
      <BasicTable data={NUMSITES_APP_RESULT} title="Top 10 popular technologies" />
      <BarChart chartData={appData} />
      <BarChart chartData={apacheData} />
      <BarChart chartData={nginxData} />
      <BarChart chartData={phpData} />
      <BarChart chartData={pythonData} />
      <BarChart chartData={jqmigrateData} />
      <BarChart chartData={jqueryData} />
    </div>
  );
}

export default App;
