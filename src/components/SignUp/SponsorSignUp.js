import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as Requests from '../../Requests'
import Button from "react-bootstrap/Button";

const SponsorSignUp = () => {
    const [newUser, setNewUser] = useState({
        email:"",
        username: "",
        first_name:"",
        last_name:"",
        is_sponsor:true,
        password: ""
      });
  
      let history = useHistory();

    const signUpSponsor = (e) => {
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
    <form onSubmit={signUpSponsor}>
        <h1 className='h3 mb-3 fw-normal'>Welcome new sponsor!</h1>

        <h1 className="package-field h3 mb-3 fw-normal">Select a sponsor package</h1>
        <Button variant="outline-primary">Starter Pack</Button>
        <Button variant="outline-secondary">Gold Rush</Button>
        <Button variant="outline-success">Diamond Kings</Button>
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

export default SponsorSignUp
