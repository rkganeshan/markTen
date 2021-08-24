import React from "react";

const Tabular = () => {
  return (
    <div className="container mt-5">
      <p className="font-weight-bold">Return Change</p>
      <table className="table table-striped table-dark">
        <tr>
          <th className="font-weight-bold">Note</th>
          <td>2000</td>
          <td>500</td>
          <td>100</td>
          <td>50</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>1</td>
        </tr>
        <tr>
          <th className="font-weight-bold">No. of Notes</th>
          <td id="twoThousands"></td>
          <td id="fiveHundreds"></td>
          <td id="hundreds"></td>
          <td id="fiftys"></td>
          <td id="twentys"></td>
          <td id="tens"></td>
          <td id="fives"></td>
          <td id="ones"></td>
        </tr>
      </table>
    </div>
  );
};

export default Tabular;
