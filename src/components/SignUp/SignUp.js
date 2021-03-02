import React, {SyntheticEvent, Component, useState} from 'react';
import { useHistory } from 'react-router-dom';
import * as Requests from "../../Requests";
import "./SignUp.css";

const SignUp = () =>{
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
    <main className="form-signup">
        <ul>
            <li>
                <form onSubmit={signUpUser}>
                    <h1 className="h3 mb-3 fw-normal">Sign Up in</h1>

                    <input type="firstname" className="form-control" placeholder="Firstname" required
                        onChange={e=>setNewUser({...newUser, first_name:e.target.value})}/>

                    <input type="Lastname" className="form-control" placeholder="Lastname" required
                        onChange={e=>setNewUser({...newUser, last_name:e.target.value})}/>

                    <input type="username" className="form-control" placeholder="Username" required
                        onChange={e=>setNewUser({...newUser, username:e.target.value})}/>

                    <input type="email" className="form-control" placeholder="Email" required
                        onChange={e=>setNewUser({...newUser, email:e.target.value})}/>

                    <input type="password" className="form-control" placeholder="Password" required
                        onChange={e=>setNewUser({...newUser, password:e.target.value})}/>

                    <button className="w-100 btns btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </li>

            <li>
                <div className="card-footer">
                    <div>
        	            Already have an account?
        	            <a href="/login">Login</a>
        	        </div>
                </div>
            </li>
        </ul>
    </main>
    );
  }


export default SignUp;