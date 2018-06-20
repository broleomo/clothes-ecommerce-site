import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import '../styles/App.css';
// import logo from './public/iron-glory-logo.png';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';


export default class BaseLayout extends Component {
  render(){
    return(
      <div className="container">
        <div className="top-nav-container">
          <Navbar className="nav-bar" light toggleable>
                  <NavbarToggler right />
                  <NavbarBrand href="/">
                  </NavbarBrand>
                  <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                      <NavLink to='/shop-shoes' activeClassName="selected" style={{color:'#464547'}}>Shoes</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink to='/shop-hats' activeClassName="selected" style={{margin: '5px', color:'#464547'}}>Hats</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink to='/shop-shirts' activeClassName="selected" style={{color:'#464547'}}>Shirts</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
        </Navbar>
      </div>
        {this.props.children}
      <div className="bottom-nav-container">
        <Navbar light toggleable>
                <NavbarToggler right />
                <Collapse navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink to='/about' activeClassName="selected" style={{margin:'5px', color:'#464547'}}>About Us</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink to='/contact' style={{margin:'5px', color:'#464547'}}>Contact Us</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
      </Navbar>
    </div>

    </div>
    )
  }
}
