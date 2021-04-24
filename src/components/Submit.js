import React from 'react';

const Login = () => {
   return(
     <div className="container">

         <form>
            <input type="text" name="username" placeholder="Name" />
            <input type="textarea" name="currentItem" placeholder="Share a kind suggestion" />
            <button>Send</button>
         </form>
        </div>
   );
}

export default Login;