import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr className="bg-white-smoke">
            {columns.map((column, index) => (
              <th
                key={column}
                className={`text-gray-light font-medium py-3 text-start text-sm px-6 ${
                  index === 0 ? "rounded-tl-xl" : ""
                } ${index === columns.length - 1 ? "rounded-tr-xl" : ""}`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columns.map((column) => (
                <td key={column} className="py-2 px-6">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
