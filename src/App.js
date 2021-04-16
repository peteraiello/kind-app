import React, { useState } from "react";
import './App.css';
import data from './data.json';


function App() {

  let myInt = 0; 

  // convert the suggestion data to an array 
  let dataArr = Object.keys(data);

  let total = dataArr.length;

  const [randNum, setNum] = useState(myInt);

  const numberPick = (e) => {
    
    e.preventDefault();

    if(randNum < total -1) {
      setNum( randNum + 1);
    } else {
      setNum(0);
    }
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
