import React from "react";
import './App.css';
import CountryCapital from "./CountryCapital";

function App() {
 
  const data = {
  "India": "New Delhi",
  "Australia" : "Canberra",
  "Nepal" : "Kathmandu",
  "Srilanka" : "Colombo",
  "Angola" : "Luanda",
};

  return (
    <div className="App">
      <CountryCapital data={data} />
    </div>
  );
}

export default App;