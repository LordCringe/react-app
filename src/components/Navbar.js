import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from "../logo.svg"
import { ButtonContainer, NavWrapper } from './Styles'
export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className='navbar-brand'/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ms-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
          <Link to="/cart" className="ms-auto">
              <ButtonContainer>
                <span className="me-2">
                  <i className="fas fa-cart-shopping"/>
                </span>
                  My Cart
              </ButtonContainer>
          </Link>
      </NavWrapper>
    )
  }
}




