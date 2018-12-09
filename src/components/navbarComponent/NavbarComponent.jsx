import React, {Component} from 'react';
import './Navbar.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class NavbarComponent extends Component {

    render () {
        return(
        <Navbar id="navbar-height" fixedTop bsStyle='inverse' collapseOnSelect >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Hat Land </a>
              </Navbar.Brand>
              <Navbar.Toggle />
              
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
               Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                Clothes
              </NavItem>
              <NavItem eventKey={3} href="#">
                Contact
              </NavItem>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
          );
    }
}

export default NavbarComponent;