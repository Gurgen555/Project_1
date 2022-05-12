import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Register.scss'
import reg from '../../images/reg.jpg'

function Register() {
    const[email, setemail]= useState('');
    const[Fusername, setFusername]= useState('');
    const[Susername, setSusername]= useState('');
    const[pwd1, setpwd1]= useState('');
    const[pwd2, setpwd2]= useState('');

    const handlesubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='register_div'>
        
         <div className="left-side">
             <div className="body">
                 <img src={reg} id='reg-img' />
             </div>
         </div>
         <div className="rigt-side">
             <div className="top-right">
                 <p>Alredy have an Account ?</p>
                <NavLink to='/sign-up' id='links-signin'>Sign in</NavLink>
             </div>
             <div className="body-right">
                 <div className="container">
                     <h1>Create Account !</h1>
                    <form onSubmit={handlesubmit}>
                     <div className="input-group">
                         <h5>
                             First Name
                         </h5>
                         <input type='text' name='Fname' id='name' value={Fusername}
                         onChange={(e) => {setFusername(e.target.value)}}/>
                     </div>
                     <div className="input-group">
                         <h5>
                             Last Name
                         </h5>
                         <input type='text' name='Fname' id='name' value={Susername}
                         onChange={(e) => {setSusername(e.target.value)}}/>
                     </div>
                     <div className="input-group">
                         <h5>
                             Email
                         </h5>
                         <input type='email' name='email' id='email1' value={email}
                         onChange={(e) => {setemail(e.target.value)}}/>
                     </div>
                     <div className="input-group">
                         <h5>
                             Password
                         </h5>
                         <input type='password' name='pwd' id='pwd1' value={pwd1}
                         onChange={(e) => {setpwd1(e.target.value)}}/>
                     </div>
                     <div className="input-group">
                         <h5>
                            Confirm Password
                         </h5>
                         <input type='password' name='pwd' id='pwd2' value={pwd2}
                         onChange={(e) => {setpwd2(e.target.value)}}/>
                     </div>
                     <input type='submit' value='Submit' id='sbtn' />
                    </form>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Register