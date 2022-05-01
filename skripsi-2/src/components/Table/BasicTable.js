import React from 'react'

import { useTable } from "react-table";
import "./table.css";

function BasicTable({ data, title }) {

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });

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
          {/* {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))} */}
          <tr>

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
          {/* {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable;