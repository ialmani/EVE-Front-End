import React, {Component, useState} from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/auth';
import {Link, useHistory} from 'react-router-dom';
import "./Login.css";
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
      <Grid>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Login to your account
          </Header>
          <Form size="large" onSubmit={loginUser} >
            <Segment stacked>
              <input
                fluid

                onChange={e=>setUser({...user, username:e.target.value})}
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <input type="password"
                fluid

                onChange={e=>setUser({...user, password:e.target.value})}
                icon="lock"
                iconPosition="left"
                placeholder="Password"

              />
              {/*{error && (*/}
              {/*  <Message*/}
              {/*    error*/}
              {/*    header="Unable to Login"*/}
              {/*    content="Please check your username and password"*/}
              {/*  />*/}
              {/*)}*/}
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
// const mapStateToProps = (state) => {
//   return {
//     authenticated: state.token !== null,
//     loading: state.loading,
//     error: state.error,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (username, password) => dispatch(authLogin(username, password)),
//   };
// };

export default Login;
