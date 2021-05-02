import React, { useState } from 'react';
import firebase from '../firebase';


const Login = () => {

   const [currentSuggestion, setSuggestion] = useState('');
   const [username, setUsername] = useState('');

   const updateUser = (e) => {
      /* username */
      e.preventDefault();
      setUsername(e.target.value);
   }

   const updateText = (e) => {
      /* suggestion */
      e.preventDefault(e);
      setSuggestion(e.target.value);
   }

   const handleSubmit = (e) => {
      /* form submit */
      e.preventDefault(e);
      const suggestionRef = firebase.database().ref('suggestions');  
      const Suggestion = {
         suggestion: currentSuggestion,
         username: username,
      }
      suggestionRef.push(Suggestion);
      setUsername('');
      setSuggestion('');
   }

   return(
     <div className="container">
         <form className="login" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="username" placeholder="Name" onChange={(e) => updateUser(e) } value={username} />
            <textarea name="currentItem" rows="4" cols="50" placeholder="Kind suggestion..." onChange={(e) => updateText(e)} value={currentSuggestion} />
            <div className="btn-wrap">
               <button className="submit">Submit</button>
            </div>
         </form>
      </div>
   );
}

export default Login;