import React, { Component } from "react";
import { dropDown } from "./svg";
import { MyStylesheet } from "./styles";

class DesktopNav extends Component {
  render() {
    const buttonWidth = {width:'26px'}
    const styles = MyStylesheet();
    return (
      <nav className="desktop-nav">
        <div className="nav-item dropdown">
          <span>Solutions <button style={{...buttonWidth, ...styles.generalButton, ...styles.navButton}}>{dropDown()}</button> </span>
          <div className="dropdown-menu">
            <a href="#">Geotechnical</a>
            <a href="#">Engineering Design</a>
            <a href="#">Project Management</a>
            <a href="#">Construction Management</a>
          </div>
        </div>

        <a href="#">Custom Apps</a>
        <a href="#">How It Works</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#" className="cta">Get Started</a>
      </nav>
    );
  }
}

export default DesktopNav;
