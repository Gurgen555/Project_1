import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import welcomeimg from '../../images/welcome.jpg'
import './SignUp.scss'


function SignUp() {
 const[emailval, setemailval] = useState('')
 const[passval,setpassval] = useState('')


  return (
      <div className='main-login'>
     
        <div className="login-container">
          <div className="left_side">
              <form>
                <label for="email1">Email</label>
                  <input placeholder='Enter your email...' type='text' id='email1' value={emailval} 
                  onChange={(e) =>{setemailval(e.target.value)} }/>
                <label for='pwd1'>Password</label>
                  <input placeholder='Enter password' type='password' id='pwd1' value={passval}
                  onChange={(e) =>{setpassval(e.target.value)} }
                  />
                  <button className='btn'>Submit</button>
              </form>
            <div className="footer">
              <h4>Don't have an Account ? <br/>
                 <NavLink to='/register' className='NavLink'>Register Now</NavLink>
              </h4>
            </div>
          </div>
          <div className="rigt-side">
            <div className="welcomeNote">
              <h3>Welcome back !</h3>
            </div>
            <div className='welcomeImg'>
              <img src={welcomeimg} id='wel-img-id' />
            </div>
          </div>
        </div>

      </div>
    )
}

export default SignUp