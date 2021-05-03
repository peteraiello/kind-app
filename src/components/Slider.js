import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const Slider = () => {

    const [arrData, setData] = useState({
        suggestions: [],
    });

    // retrieve database entries from firebase
    const getUserData = () => {
        let ref = firebase.database().ref('suggestions');
        ref.on('value', snapshot => {
            let items = snapshot.val();
            console.log(items);
            let myArr = [];
            for (let item in items) {
                myArr.push({
                    id: item,
                    suggestion: items[item].suggestion,
                    username: items[item].username
                });
            }

            setData({
                suggestions: myArr
            });

        });
    }

    useEffect(() => {
        getUserData();
    },[]);

    let myInt = 0; 
    let total = 0;

    if(arrData.suggestions){
        total = arrData.suggestions.length;
    }

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
            { total > 0 && arrData.suggestions.map((suggestion, index) => (
                <li key={suggestion.id} className={ active === index ? 'active' : 'inactive' }>
                    <h1>{suggestion.suggestion}</h1>
                    <p>Kindee: {suggestion.username}</p>
                </li>
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