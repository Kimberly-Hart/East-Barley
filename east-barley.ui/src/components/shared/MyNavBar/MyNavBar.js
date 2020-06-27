/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import PropTypes from 'prop-types';
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

  static propTypes = {
    authed: PropTypes.bool,
    isEmployee: PropTypes.bool,
    verified: PropTypes.bool,
    setOver21: PropTypes.func,
    setIsEmployee: PropTypes.func,
  }

  loginClickEvent = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    const { setOver21, setIsEmployee } = this.props;
    setOver21(false);
    setIsEmployee(false);
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {
      isOpen,
    } = this.state;
    const { verified, authed, isEmployee } = this.props;
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
                              { (authed) ? <NavItem><Link className="nav-link profile" to="/Profile">Profile</Link></NavItem> : <NavItem></NavItem> }
                              { (isEmployee) ? <NavItem><Link className="nav-link" to="/Employee">Employee Dashboard</Link></NavItem> : <NavItem></NavItem> }
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
                      { (authed) ? <NavItem><Link className="nav-link profile" to="/Profile">Profile</Link></NavItem> : <NavItem></NavItem> }
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
