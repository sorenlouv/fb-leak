import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <h1>Tjek om du optræder i Facebook lækket</h1>
      <p>
        <strong>639.841</strong> danskere optræder i datalækagen. Indtast dit
        telefonnummer for at se om du er på. Dit telefonnummer gemmes IKKE.
      </p>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
