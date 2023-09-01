import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1>Weather App </h1>
        <weather />
        <footer>
          This project was coded by Tamara Walker and is{" "}
          <a
            href="https://github.com/TamaraWG/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code on GitHub and hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
