import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [steps, setSteps] = useState(1);
  const [display, setDisplay] = useState(true);

  function NextHandler() {
    if (steps < messages.length) {
      setSteps((step) => step + 1);
    }
  }
  function PrevHandler() {
    if (steps > 1) {
      setSteps((step) => step - 1);
    }
  }
  function DisplayHandler() {
    setDisplay((display) => !display);
  }

  return display ? (
    <div className="steps">
      <Numbers step={steps} />
      <Message step={steps} />
      <Buttons NextHandler={NextHandler} PrevHandler={PrevHandler} />
      <button className="close" onClick={DisplayHandler}>
        &times;
      </button>
    </div>
  ) : (
    <button className="close" onClick={DisplayHandler}>
      &times;
    </button>
  );
}
function Numbers({ step }) {
  return (
    <div className="numbers">
      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
    </div>
  );
}

function Message({ step }) {
  return (
    <div className="message">
      <h3>steps:{step}</h3>
      <p>{messages[step - 1]}</p>
    </div>
  );
}
function Buttons({ NextHandler, PrevHandler }) {
  const colorstyle = { color: "#fff", backgroundColor: "#7950f2" };
  return (
    <div className="buttons">
      <button style={colorstyle} onClick={PrevHandler}>
        Previous
      </button>
      <button style={colorstyle} onClick={NextHandler}>
        Next
      </button>
    </div>
  );
}
export default App;
