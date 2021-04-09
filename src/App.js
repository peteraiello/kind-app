import React, { useState } from "react";
import './App.css';
import data from './data.json';


function App() {

  let myRandom = 0;

  // convert the suggestion data to an array 
  let dataArr = Object.keys(data);

  // get the total number of suggestions
  let total = dataArr.length;

  const [randNum, setNum] = useState(0);

  const numberPick = (e) => {
    e.preventDefault();
    /* might put this in a function later */
    myRandom = Math.random() * (total - 1) + 1;
    myRandom = Math.floor(myRandom);
    setNum(myRandom);
  }

  return (
    <div className="App">
      <div className="body-app">
        <div className="container">
          <ul className="suggestions">
            {data.map((options, index) => (
              <li key={options.title} className={ randNum === index ? 'active' : 'inactive' }><h1>{options.suggestion}</h1></li>
            ))}
          </ul>
          <button 
            onClick={(e) => numberPick(e)}
            className="button" href="">What else?
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
