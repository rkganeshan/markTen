import "./styles.css";
import Footer from "./Footer";
import { useState } from "react";
import CashGiven from "./CashGiven";
import Tabular from "./Tabular";
const App = () => {
  const arrayNoteAmt = [2000, 500, 100, 50, 20, 10, 5, 1];
  const ids = [
    "twoThousands",
    "fiveHundreds",
    "hundreds",
    "fiftys",
    "twentys",
    "tens",
    "fives",
    "ones"
  ];
  const [amount, setAmount] = useState(0);
  const [cash, setCash] = useState(0);
  const [flagcash, setFlagcash] = useState(false);
  const [flagtable, setFlagtable] = useState(false);
  const [flagbal, setFlagbal] = useState(true);
  function calc() {
    var balance = cash - amount;
    console.log(balance);
    if (balance < 0) {
      console.log("Not possible.");
      setFlagbal(false);
    } else {
      for (var i = 0; i < arrayNoteAmt.length; i++) {
        var n = Math.floor(balance / arrayNoteAmt[i]);
        console.log(arrayNoteAmt[i] + ":" + n);
        balance = balance - n * arrayNoteAmt[i];
        document.getElementById(`${ids[i]}`).textContent = n;
      }
    }
  }
  function billAmtHandler(e) {
    setAmount(e.target.value);
    setFlagcash(true);
  }
  function cashGivenHandler(e) {
    setCash(e.target.value);
    setFlagtable(true);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="alert alert-info mt-2 font-weight-bold t" role="alert">
          🤑💰Cash Register💵💲
          <p className="mb-0 font-weight-light t2">
            Enter the bill amount and cash given by the customer and know
            minimum number of notes to return.
          </p>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="billAmountInputLabel" className="font-weight-bold">
              Bill Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="billAmountInput"
              placeholder="Enter the bill amount."
              onChange={billAmtHandler}
            />
          </div>
          {flagcash && (
            <CashGiven handle={cashGivenHandler} func={calc} flag={flagbal} />
          )}
        </form>
      </div>
      {flagtable && <Tabular />}
      <Footer />
    </div>
  );
};
export default App;
