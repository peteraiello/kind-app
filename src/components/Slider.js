import React, { useState, useEffect } from 'react';
import firebase from '../firebase';


const Slider = () => {

    // state for firebase array data
    const [arrData, setData] = useState({
        Suggestions: [],
    });
    // retrieve database entries from firebase
    const getUserData = () => {
        let ref = firebase.database().ref('/');
        ref.on('value', snapshot => {
            const snapData = snapshot.val();
            setData(snapData);
        });
    }

    useEffect(() => {
        getUserData();
    },[]);

    let myInt = 0; 
    let total = arrData.Suggestions.length;
    const [active, setActive] = useState(myInt);

    const numberPick = (e) => {
        e.preventDefault();
        if(active < total -1) {
            setActive( active + 1);
        } else {
            setActive(0);
        }
    }
    
    return(
        <div className="container">
            <ul className="suggestions">
            { arrData.Suggestions.map((suggestion, index) => (
                <li key={index} className={ active === index ? 'active' : 'inactive' }><h1>{suggestion.suggestion}</h1></li>
            )) }
            </ul>
            <button 
                onClick={(e) => numberPick(e)}
                className="button" href="">What else?
            </button>
        </div>
    );
}

export default Slider;