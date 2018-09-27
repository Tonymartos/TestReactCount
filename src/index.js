import React from "react";
import ReactDOM from "react-dom";
import ButtonCount from "./components/buttonCount";
import "./styles.css";

function App() {
  return (
    <div className="count" classCount="count">
      <ButtonCount defaultName="New Count" defaultNumb={0} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
