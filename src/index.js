import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const date = new Date();
  const initialTime = date.getTime();
  const [time, setTime] = React.useState(initialTime);
  const [timerStyle, setTimerStyle] = React.useState("h1-entering");
  setTimeout(() => setTime(date.getTime()), 1000);
  const handleAnimateIn = () => {
    let element = document.querySelector("#timer");
    if (element) {
      setTimerStyle("h1-entered");
    }
  };
  React.useEffect(handleAnimateIn, []);
  return (
    <div className="App">
      <h1 id="timer" className={timerStyle}>
        Hello CodeSandbox {time}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
