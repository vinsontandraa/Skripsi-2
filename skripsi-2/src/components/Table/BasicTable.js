import React from 'react'
import "./table.css";

function BasicTable({ data, title }) {

  return (
    <div className="tabel-data">
      <p>
        {title}
      </p>
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((value, key) =>
              <th key={key}>
                {value}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) =>
            <tr key={key}>
              {Object.values(value).map((items, _key) =>
                <td key={_key}>
                  {items}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable;