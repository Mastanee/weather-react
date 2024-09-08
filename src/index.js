import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <App />
    <p>
      This project was coded by{" "}
      <a href="https://www.shecodes.io/" alt="shecodes website">
        SheCodes
      </a>{" "}
      and is open-sourced on{" "}
      <a href="https://github.com/Mastanee/weather-react" alt="github website">
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="https://glittering-sawine-f17b18.netlify.app" alt="Netlify">
        Netlify
      </a>
      .
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
