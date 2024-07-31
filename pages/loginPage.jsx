import React from 'react';
import { Link } from 'react-router-dom';

const loginPage = () => {
  return (
    <div className="loginWrapper">
        <div className="container logincard">
            <div className="row loginrow">
                
                <div className="col-md-4 loginContent">
                    <h2 className='loginhead'>Login</h2><br />
                    <label htmlFor="phone" className='loginLabel'><b>Mobile Number:</b></label>
                    <input type="text" name='phone' className='loginip' /><br />
                    <label className='loginLabel' htmlFor="password"><b>Password:</b></label>
                    <input type="password"  name='password' className='loginip' /><br /><br />
                    <button className='loginbtn'>Sign In</button><br />
                    <div className="account">
                      <span className='loginspan'>Don't have an account?</span><Link className='loginLink'>Sign up</Link>
                    </div>
                   
                </div>

                <div className="col-md-2 loginImg"></div>

            </div>
        </div>
    </div>
  )
}

export default loginPage
