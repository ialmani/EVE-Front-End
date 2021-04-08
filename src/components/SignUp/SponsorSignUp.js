import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as Requests from '../../Requests'

const SponsorSignUp = (props) => {
    const [newUser, setNewUser] = useState({
        username: "",
        email:"",
        password: "",
        first_name:"",
        last_name:""
      });
  
      let history = useHistory();
  
      const signUpUser = (e) => {
        e.preventDefault();
        Requests.createUser(newUser).then((response) => {
          history.push('/login');
        }).catch(status=>
            alert(status));
      }
    
    return (
        <div>
            <ul className='signUpBox'>

<li>
    <form onSubmit={signUpUser}>
        <h1 className='h3 mb-3 fw-normal'>Sponsor Sign Up</h1>

        <input type='firstname' className='form-control' placeholder='Firstname' required
            onChange={e=>setNewUser({...newUser, first_name:e.target.value})}/>

        <input type='lastname' className='form-control' placeholder='Lastname' required
            onChange={e=>setNewUser({...newUser, last_name:e.target.value})}/>

        <input type='username' className='form-control' placeholder='Username' required
            onChange={e=>setNewUser({...newUser, username:e.target.value})}/>

        <input type='email' className='form-control' placeholder='Email' required
            onChange={e=>setNewUser({...newUser, email:e.target.value})}/>

        <input type='password' className='form-control' placeholder='Password' required
            onChange={e=>setNewUser({...newUser, password:e.target.value})}/>

        <a className='signup-btn' type='submit'>Sign In</a>
    </form>
</li>

<li>
    <div className='card-footer'>
        <text className='suggestions-text'>Already have an account?</text>
        <a href='/login' className='login-link'>Login</a>
    </div>
</li>
</ul>
        </div>
    )
}

export default SponsorSignUp
