import React, {Component, useState} from 'react';
import { Input, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/auth';
import {Link, useHistory} from 'react-router-dom';
import * as Requests from "../../Requests";

const Login = () =>{
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();
    Requests.loginUser(user).then((response) => {
      console.log(response)
      history.push('/sponsor-profile');


    }).catch(status=>
        alert(status));
  }


  return(
      <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="purple" textAlign="center">
            Login to your account
          </Header>
          <Form size="large" onSubmit={loginUser} >
            <Segment stacked>
              <Form.Input
                fluid
                onChange={e=>setUser({...user, username:e.target.value})}
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input type="password"
                fluid
                onChange={e=>setUser({...user, password:e.target.value})}
                icon="lock"
                iconPosition="left"
                placeholder="Password"

              />
              <Button
                color="twitter"

                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Button to="/signup" color="grey"> Sign Up</Button>
          </Message>
        </Grid.Column>
      </Grid>
    );

}


export default Login;
