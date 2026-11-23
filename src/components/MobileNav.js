import React, { Component } from "react";
import { Link } from "react-router-dom";

class MobileNav extends Component {
  state = {
    solutionsOpen: false
  };

  closeButton = React.createRef();
  previousFocus = null;

  componentDidMount() {
    if (this.props.open) {
      this.focusDrawer();
    }
  }

  componentDidUpdate(previousProps) {
    if (!previousProps.open && this.props.open) {
      this.focusDrawer();
    }

    if (previousProps.open && !this.props.open) {
      if (this.state.solutionsOpen) {
        this.setState({ solutionsOpen: false });
      }

      if (this.previousFocus?.isConnected) {
        this.previousFocus.focus();
      }

      this.previousFocus = null;
    }
  }

  focusDrawer = () => {
    this.previousFocus = document.activeElement;
    this.closeButton.current?.focus();
  };

  toggleSolutions = () => {
    this.setState(({ solutionsOpen }) => ({
      solutionsOpen: !solutionsOpen
    }));
  };

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { open, onClose } = this.props;
    const { solutionsOpen } = this.state;

    if (!open) {
      return null;
    }

    return (
      <div className="site-mobile-menu" onKeyDown={this.handleKeyDown}>
        <div
          className="site-mobile-backdrop"
          aria-hidden="true"
          onClick={onClose}
        />

        <aside className="site-mobile-drawer" id="mobile-navigation">
          <button
            ref={this.closeButton}
            className="site-mobile-close"
            type="button"
            onClick={onClose}
          >
            Close <span aria-hidden="true">×</span>
          </button>

          <nav aria-label="Main navigation">
            <button
              className="site-nav-toggle"
              type="button"
              aria-expanded={solutionsOpen}
              aria-controls="mobile-solutions"
              onClick={this.toggleSolutions}
            >
              Solutions
              <span className="site-nav-chevron" aria-hidden="true" />
            </button>

            <div
              id="mobile-solutions"
              className="site-nav-accordion"
              hidden={!solutionsOpen}
            >
              <a href="https://gfk.civilengineer.io" target="_blank" onClick={onClose}>Geotechnical (engineering)</a>
              <a href="https://geotech.civilengineer.io" target="_blank" onClick={onClose}>Geotechnical (clients)</a>
              <a href="#" onClick={onClose}>Engineering Design</a>
              <a href="#" onClick={onClose}>Project Management</a>
              <a href="#" onClick={onClose}>Construction Management</a>
            </div>

            <Link to="/customapps" onClick={onClose}>Custom Apps</Link>
            <Link to="/howitworks" onClick={onClose}>How It Works</Link>
            <Link to="/" onClick={onClose}>Home</Link>
            <Link to="/about" onClick={onClose}>About</Link>
            <Link to="/contactus" className="site-nav-cta" onClick={onClose}>
              Contact Us
            </Link>
          </nav>
        </aside>
      </div>
    );
  }
}

export default MobileNav;