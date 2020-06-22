/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import './MyNavBar.scss';

class MyNavBar extends React.Component {
  state = {
    isOpen: false,

  }

  loginClickEvent = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const {
      isOpen,
    } = this.state;
    const { verified, authed } = this.props;
    return (
    <div>
      {
        (verified)
          ? <div>
                        <Navbar color="light" light expand="md">
                          <NavbarBrand className="nav-link" to="/">East & Barley</NavbarBrand>
                          <NavbarToggler onClick={this.toggle} />
                          <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                              <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                              </NavItem>
                              <NavItem>
                                <Link className="nav-link" to="/Whiskey">Whiskey</Link>
                              </NavItem>
                              <NavItem>
                              <Link className="nav-link" to="/Beer">Beer</Link>
                              </NavItem>
                              <NavItem>
                              <Link className="nav-link" to="/Books">Books</Link>
                              </NavItem>
                              <Link className="nav-link profile" to="/Profile">Profile</Link>
                            </Nav>
                           { (authed)
                             ? <button className="btn btn-secondary" onClick={this.logoutClickEvent}>Log Out</button>
                             : <button className="btn btn-primary" onClick={this.loginClickEvent}>Login</button>
                           }
                          </Collapse>
                        </Navbar>
                            </div>
          : <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand className="nav-link" to="/">East & Barley</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <Link className="nav-link" to="/">Home</Link>
                      </NavItem>
                      <NavItem>
                      <Link className="nav-link" to="/Books">Books</Link>
                      </NavItem>
                      <Link className="nav-link profile" to="/Profile">Profile</Link>
                    </Nav>
                    { (authed)
                      ? <button className="btn btn-secondary" onClick={this.logoutClickEvent}>Log Out</button>
                      : <button className="btn btn-primary" onClick={this.loginClickEvent}>Login</button>
                           }
                  </Collapse>
                </Navbar>
              </div>
}
</div>
    );
  }
}

export default MyNavBar;
