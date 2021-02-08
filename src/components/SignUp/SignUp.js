import React, {Component, useState} from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authSignup } from '../../store/actions/auth';
import {Link, useHistory} from 'react-router-dom';
import * as Requests from "../../Requests";


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
        history.push('/sponsor-profile');
      }).catch(status=>
          alert(status));
    }

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Create an account
          </Header>
          <Form size="large" onSubmit={signUpUser}>
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                onChange={e=>setNewUser({...newUser, username:e.target.value})}
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                name="email"
                onChange={e=>setNewUser({...newUser, email:e.target.value})}
                icon="mail"
                iconPosition="left"
                placeholder="Email address"
              />
              <Form.Input
                  fluid
                  name="firstName"
                  onChange={e=>setNewUser({...newUser, first_name:e.target.value})}
                  iconPosition="left"
                  placeholder="First Name"
              />
              <Form.Input
                  fluid
                  name="lastName"
                  onChange={e=>setNewUser({...newUser, last_name:e.target.value})}
                  iconPosition="left"
                  placeholder="Last Name"
              />
              <Form.Input
                fluid
                name="password"
                onChange={e=>setNewUser({...newUser, password:e.target.value})}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button
                color="twitter"
                fluid
                size="large"
              >
                SignUp
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Button to="/login" color="grey"> Login</Button>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }


export default SignUp;
