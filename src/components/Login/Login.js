import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Requests from '../../Requests'
import './Login.css'
import '../Button.css'

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    let history = useHistory();

    const loginUser = (e) => {
        e.preventDefault();
        Requests.loginUser(user).then((response) => {
            if(response.access !== null) {
                console.log("does it anyway?");
                localStorage.setItem("access_token", response.access);
                localStorage.setItem("refresh_token", response.access);
                history.push('/profile');
                window.location.reload(false);
            }
        }).catch(status =>
            alert("Something went wrong. Please try again."));
    }

    return (
        <main className='form-login'>
            <ul className='loginBox'>
                <li>
                    <form onSubmit={loginUser}>
                        <h1 className="h3 mb-3 fw-normal">LOGIN</h1>

                        <input type="username" className="form-control" placeholder="Username" required
                            onChange={e => setUser({ ...user, username: e.target.value })} />

                        <input type="password" className="form-control" placeholder="Password" required
                            onChange={e => setUser({ ...user, password: e.target.value })} />

                        <a className="login-btn" type="submit">LOGIN</a>
                    </form>
                </li>
                <li>
                    <div className='card-footer'>
                        <text className='suggestions-text'>Don't have an account?</text>
                        <a href='/signup' className='signup-link'>Sign Up</a>
                        <a href='#' className='forgotpassword-link'>Forgot your password?</a>
                    </div>
                </li>
            </ul>
        </main>
    );
}

export default Login