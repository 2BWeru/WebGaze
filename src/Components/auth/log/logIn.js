import React from 'react';
import { Link } from 'react-router-dom';
import "./logIn.css";

function Login () {
  return (
    <div className='container'>
        <form className='Form'>
            <fieldset>
                <label>Email</label>
                <input type="email" placeholder='Email'></input>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input type="password" placeholder='Password'></input>
            </fieldset>

            <button>Log In</button>
                <br></br>
            <span>Don't Have An Account?<span> <Link to="/sign">Sign In</Link></span></span>

        </form>
    </div>
  )
}

export default Login