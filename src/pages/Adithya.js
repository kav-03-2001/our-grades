import React from "react";
import Data from '../data.json';

function Adithya() {
  const Total = Data.adithya.reduce((total, single) => total + parseInt(single.cxgp, 10), 0);
  const CTotal = Data.adithya.reduce((ctotal,single) => ctotal + parseInt(single.credits, 10), 0);
  const CGPA = Total/CTotal;
  return (
    <div className="container">
      <div className="mt-3 mb-3 text-left">
        <h4>K. Adithya Vardhan</h4>
        <h4>18STUCHH010277</h4>
      </div>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course Code</th>
            <th scope="col">Course Title</th>
            <th scope="col">Credits</th>
            <th scope="col">Grade</th>
            <th scope="col">Credits*Grade point</th>
          </tr>
        </thead>
        <tbody>
          {Data.adithya.map((user,index) => {
            return(
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.ccode}</td>
                <td>{user.ctitle}</td>
                <td>{user.credits}</td>
                <td>{user.grade}</td>
                <td>{user.cxgp}</td>
              </tr>
            )
          })}
          <tr className="font-weight-bold">
            <td></td>
            <td></td>
            <td>Total Credits = </td>
            <td>{CTotal}</td>
            <td>Total Credits*Grade point = </td>
            <td>{Total}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-3 mb-3 text-right">
        <h4>CGPA = {CGPA}</h4>
      </div>
    </div>
  );
}

export default Adithya;
