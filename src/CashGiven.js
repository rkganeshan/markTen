import React from "react";
// import { cashGivenHandler, calc } from "./App.js";
import Tabular from "./Tabular";
const CashGiven = ({ handle, func, flag }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="cashGivenInputLabel" className="font-weight-bold">
          Cash Given
        </label>
        <input
          type="text"
          className="form-control"
          id="cashGivenInput"
          placeholder="Enter the cash given."
          onChange={handle}
        />
      </div>
      <button type="button" className="btn btn-info" onClick={func}>
        Check
      </button>
      {!flag && (
        <p className="text-danger font-weight-bold mt-2">
          Cash Given cannot be less than Bill Amount.
        </p>
      )}
    </div>
  );
};

export default CashGiven;
