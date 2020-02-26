import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Row, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
          <div className="topbar">
          <Navbar bg="primary" variant="dark" fixed="top">
            <Navbar.Brand href="/">Swansonews</Navbar.Brand>
          </Navbar>
        </div>
        );
    }
}

export default NavBar;