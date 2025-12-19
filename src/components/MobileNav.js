import React, { Component } from "react";
import { dropDown } from "./svg";
import { MyStylesheet } from "./styles";
import { Link } from 'react-router-dom';
class MobileNav extends Component {
  state = {
    solutionsOpen: false
  };

  toggleSolutions = () => {
    this.setState({ solutionsOpen: !this.state.solutionsOpen });
  };

  render() {
    const { open, onClose } = this.props;
    const { solutionsOpen } = this.state;
    const styles = MyStylesheet();
    const buttonWidth = {width:'26px'}
    return (
         <>
      {open && <div className="overlay" onClick={onClose} />}

      <aside className={`mobile-nav ${open ? "open" : ""}`}>
          <nav>
            <button
              className="accordion-toggle"
              onClick={this.toggleSolutions}
              aria-expanded={solutionsOpen}
            >
              Solutions <button style={{...buttonWidth, ...styles.generalButton, ...styles.navButton}}>{dropDown()}</button>
            </button>

            {solutionsOpen && (
              <div className="accordion-content">
                <a href="#">Geotechnical</a>
                <a href="#">Engineering Design</a>
                <a href="#">Project Management</a>
                <a href="#">Construction Management</a>
              </div>
            )}

            <a href="#">Custom Apps</a>
            <Link to={'/howitworks'}  style={{...styles.generalLink}}>How It Works</Link>
            <Link to={'/'}  style={{...styles.generalLink}}>Home</Link>
            <Link to={'/about'} style={{...styles.generalLink}}>About</Link>

            <a href="#" className="cta mobile-cta">Get Started</a>
            </nav>
      </aside>
    </>
    );
  }
}

export default MobileNav;
