import React, {SyntheticEvent, useState} from 'react';
import { useHistory } from "react-router-dom";
import * as Requests from "../../Requests";
import "./Login.css";

const Login = () =>{
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();
    Requests.loginUser(user).then((response) => {
      localStorage.setItem("token", response.access)
      history.push('/sponsor-profile');
      window.location.reload(false);

    }).catch(status=>
        alert(status));
  }

  return(
      <main className="form-login">
        <ul>
            <li>
                <form onSubmit={loginUser}>
                    <h1 className="h3 mb-3 fw-normal">LOGIN</h1>

                    <input type="username" className="form-control" placeholder="Username" required
                        onChange={e=>setUser({...user, username:e.target.value})}/>

                    <input type="password" className="form-control" placeholder="Password" required
                        onChange={e=>setUser({...user, password:e.target.value})}/>

                    <button className="w-100 btns btn-lg btn-primary" type="submit">LOGIN</button>
                </form>
            </li>

            <li>
                <div className="card-footer">
                    <div>
        	            Don't have an account?
        	            <a href="/signup">Sign Up</a>
        	        </div>
        	        <div>
        	            <a href="#">Forgot your password?</a>
        	        </div>
                </div>
            </li>
        </ul>
      </main>
    );

}


export default Login;