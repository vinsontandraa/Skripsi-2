import "./App.css";
import BarChart from "./components/BarChart";
import { AppData } from "./data/AppData.js";
import { ApacheData } from "./data/ApacheData.js";
import { NginxData } from "./data/NginxData";
import { PhpData } from "./data/PhpData";
import { PythonData } from "./data/PythonData";
import { JQMigrateData } from "./data/JQueryMigrateData";
import { JQueryData } from "./data/JQueryData";

import BasicTable from "./components/Table/BasicTable";
import { URL_ALL_RESULT_TABLE } from "./data/UrlAllResultTable";
import { CATEGORY_PER_UNSUPPORTED } from "./data/CategoryPerJumlahUnsupported";
import { NUMSITES_APP_RESULT } from "./data/NumsitesAppResult";

import compareVersions from "compare-versions";

compareVersions("11.1.1", "10.0.0");
compareVersions("10.0.0", "10.0.0");
compareVersions("10.0.0", "11.1.1");

//Create Measurement Color
function color(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].result === "UNSUPPORTED" ? temp.push("red") : temp.push("blue");
  }
  return temp;
}

//Create Chart with JSON data
function App() {
  const appData = {
    labels: AppData.map((data) => data.info),
    datasets: [
      {
        label: "app",
        data: AppData.map((data) => data.jumlah),
        backgroundColor: ["orange"],
      },
    ],
  };

  const apacheData = {
    labels: ApacheData.map((data) => data.info),
    datasets: [
      {
        label: "Apache",
        data: ApacheData.map((data) => data.jumlah),
        backgroundColor: color(ApacheData),
      },
    ],
  };

  const nginxData = {
    labels: NginxData.map((data) => data.info),
    datasets: [
      {
        label: "Nginx",
        data: NginxData.map((data) => data.jumlah),
        backgroundColor: color(NginxData),
      },
    ],
  };

  const phpData = {
    labels: PhpData.map((data) => data.info),
    datasets: [
      {
        label: "PHP",
        data: PhpData.map((data) => data.jumlah),
        backgroundColor: color(PhpData),
      },
    ],
  };

  const pythonData = {
    labels: PythonData.map((data) => data.info),
    datasets: [
      {
        label: "Python",
        data: PythonData.map((data) => data.jumlah),
        backgroundColor: color(PythonData),
      },
    ],
  };

  const jqmigrateData = {
    labels: JQMigrateData.map((data) => data.info),
    datasets: [
      {
        label: "jQuery Migrate",
        data: JQMigrateData.map((data) => data.jumlah),
        backgroundColor: color(JQMigrateData),
      },
    ],
  };

  const jqueryData = {
    labels: JQueryData.map((data) => data.info),
    datasets: [
      {
        label: "jQuery",
        data: JQueryData.map((data) => data.jumlah),
        backgroundColor: color(JQueryData),
      },
    ],
  };

  return (
    <div className="App">
      <BasicTable
        data={CATEGORY_PER_UNSUPPORTED}
        title="Number of Categories by Unsupported Version"
      />
      <BasicTable
        data={URL_ALL_RESULT_TABLE}
        title="Usage of technologies per site (top 10)"
      />
      <BasicTable
        data={NUMSITES_APP_RESULT}
        title="Top 10 popular technologies"
      />
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
