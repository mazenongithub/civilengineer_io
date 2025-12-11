import React, { Component } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Logo } from "./svg";
import { MyStylesheet } from './styles'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { menuOpen: false }
    }


    toggleMenu() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    closeMenu() {
        this.setState({ menuOpen: false });
    }

    render() {
        const { menuOpen } = this.state;

        const styles = MyStylesheet();

        return (
            <div style={{ ...styles.generalContainer }}>
                <header className="header">
                    <div className="header-inner">
                    <div className="logo-spacer"></div>
                        {/* On mobile this appears LEFT of hamburger */}
                        <div className="logo-container">
                            {Logo()}
                        </div>


                        <DesktopNav />

                        <button
                            className="menu-toggle"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            onClick={() => { this.toggleMenu() }}
                        >
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>

                    <div className="logo-large-screen">
                        {Logo()}
                    </div>

                    <MobileNav open={menuOpen} onClose={() => this.closeMenu()} />


                </header>

            </div>
        );
    }
}

export default Header;
