import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbartop">
            <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">Swansonews</a>
            </div>
            
          </nav>
          </div>
        );
    }
}

export default NavBar;