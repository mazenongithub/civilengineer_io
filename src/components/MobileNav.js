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
                <span>Geotechnical</span>
                <span>Engineering Design</span>
                <span>Project Management</span>
                <span>Construction Management</span>
              </div>
            )}

            <span>Custom Apps</span>
            <span>How It Works</span>
            <Link to={'/'}  style={{...styles.generalLink}}>Home</Link>
            <Link to={'/about'} style={{...styles.generalLink}}>About</Link>

            <span className="cta mobile-cta">Get Started</span>
          </nav>
        </aside>
      </>
    );
  }
}

export default MobileNav;
