import React, { Component } from "react";
import "./Layout.css";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/auth";
import logo from "../../assets/eve_logo.svg" ;
import { Link } from "react-router-dom";

class Layout extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  }

  render() {
    return (
      <div>
        <Menu color="purple" inverted>
            <Link to = "/">
                <img className="navbar-logo" src={logo} alt="logo"/>
            </Link>
          <Container>
            <Link className="nav-link" to="/about">
              <Menu.Item>About</Menu.Item>
            </Link>
            <div className="dropdown">
                <Link className="nav-link" to="/resources">
                    <Menu.Item>Resources</Menu.Item>
                </Link>
                <div className="dropdown-content">
                    <a href="/articles">Articles</a>
                    <a href="/videos">Videos</a>
                    <a href="/events">Events</a>
                </div>
            </div>
            <Link className="nav-link" to='/contact-us'>
                <Menu.Item>Contact Us</Menu.Item>
            </Link>
            <Link className="nav-link" to='/sponsor-packages'>
                <Menu.Item>Sponsor Packages</Menu.Item>
            </Link>
            <Menu.Menu position="right">
              {this.props.authenticated ? (
                <Menu.Item className="nav-link" onClick={() => this.props.logout()}>
                  Logout
                </Menu.Item>
              ) : (
                <React.Fragment>
                  <Link className="nav-link" to="/login">
                    <Menu.Item>Login</Menu.Item>
                  </Link>
                  <Link className="nav-link" to="/signup">
                    <Menu.Item>SignUp</Menu.Item>
                  </Link>
                </React.Fragment>
              )}
            </Menu.Menu>
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          color="purple"
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignin: () => dispatch(actionTypes.authCheckState()),
    logout: () => dispatch(actionTypes.authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
