import React, { Component } from "react";
import { dropDown } from "./svg";
import { MyStylesheet } from "./styles";
import { Link } from 'react-router-dom';

class DesktopNav extends Component {
  render() {
    const buttonWidth = {width:'26px'}
    const styles = MyStylesheet();
    const navLinkStyle = {
    color: '#244f74',
    textDecoration: 'none'
};
    return (
      <nav className="desktop-nav">
        <div className="nav-item dropdown">
          <span>Solutions <button style={{...buttonWidth, ...styles.generalButton, ...styles.navButton}}>{dropDown()}</button> </span>
          <div className="dropdown-menu">
            <a href="https://gfk.civilengineer.io" target="_blank">Geotechnical (engineering)</a>
            <a href="https://geotech.civilengineer.io" target="_blank">Geotechnical (clients)</a>
            <a href="#">Engineering Design</a>
            <a href="#">Project Management</a>
            <a href="#">Construction Management</a>
          </div>
        </div>

        <Link to={'/customapps'}  style={{...navLinkStyle}}>Custom Apps</Link>
        <Link to={'/howitworks'}  style={{...navLinkStyle}}>How It Works</Link>
        <Link to={'/'}  style={{...navLinkStyle}}>Home</Link>
        <Link to={'/about'} style={{...navLinkStyle}}>About</Link>
        <Link to={'/contactus'}  className="cta">Contact Us</Link>
      </nav>
    );
  }
}

export default DesktopNav;
