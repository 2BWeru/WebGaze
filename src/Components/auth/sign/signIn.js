import React from 'react';
import { Link } from 'react-router-dom';
import "./signIn.css";

function Signin () {
  return (
    <div className='container'>
        <form className='Form'>
            <fieldset>
                <label>UserName</label>
                <input type="text" placeholder='UserName'></input>
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input type="email" placeholder='Email'></input>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input type="password" placeholder='Password'></input>
            </fieldset>
            <fieldset>
                <label>Repeat Password</label>
                <input type="password" placeholder='Repeat Password'></input>
            </fieldset>

            <button>Sign In</button>
            <br></br>
          <span>Already Have An Account? <span> <Link to="/Log"> Log In</Link></span></span>

        </form>
        
    </div>
  )
}

export default Signin