import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as Requests from '../../Requests'

const MemberSignUp = () => {
    const [newUser, setNewUser] = useState({
        email:"",
        username: "",
        first_name:"",
        last_name:"",
        password: ""
      });
  
      let history = useHistory();

    const signUpMember = (e) => {
        e.preventDefault();
        Requests.createUser(newUser).then((response) => {
            if(response.email !== null){
                history.push('/login');
            }
        }).catch(status=> {
            if(status !== 201){
                alert("Something went wrong. Please try again.");
            }
        })};
    
    return (
        <div>
            <ul className='signUpBox'>

                <li>
                    <form onSubmit={signUpMember}>
                        <h1 className='h3 mb-3 fw-normal'>Welcome new member!</h1>

                        <input type='firstname' className='form-control' placeholder='First Name' required
                            onChange={e=>setNewUser({...newUser, first_name:e.target.value})}/>

                        <input type='lastname' className='form-control' placeholder='Last Name' required
                            onChange={e=>setNewUser({...newUser, last_name:e.target.value})}/>

                        <input type='username' className='form-control' placeholder='Username' required
                            onChange={e=>setNewUser({...newUser, username:e.target.value})}/>

                        <input type='email' className='form-control' placeholder='Email' required
                            onChange={e=>setNewUser({...newUser, email:e.target.value})}/>

                        <input type='password' className='form-control' placeholder='Password' required
                            onChange={e=>setNewUser({...newUser, password:e.target.value})}/>

                        <input className='signup-btn' type='submit' value='Sign Up'/>
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

export default MemberSignUp
