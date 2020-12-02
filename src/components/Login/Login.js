import React, { Component, useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

function performValidation() {
    return username.length > 0 && password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}
return (
    <div className="Login">
    <form onSubmit={handleSubmit}>
    <FormGroup controlId="username" bsSize="large">
        <ControlLabel>Username</ControlLabel>
        <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
        />
    </FormGroup>
    <FormGroup controlId="password" bsSize="large">
        <ControlLabel>Password</ControlLabel>
        <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
        />
    </FormGroup>
    <Button block bsSize="large" disabled={!performValidation()} type="submit">
        Login
    </Button>
    </form>
    </div>
    );
}

//class Login extends Component {
//  render() {
//    return (
//      <div>
//        <h2>THE LOGIN STUFF</h2>
//
//      </div>
//    );
//  }
//}
//
export default Login;