import React, { Component } from "react";
import { MyStylesheet } from "./styles";

class Footer extends Component {

     constructor(props) {
        super(props);
        this.state = { render: '', width: 0, height: 0 }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const styles = MyStylesheet();
        const minHeight = {height:'180px'}

        return(<div style={{...styles.generalFlex, ...minHeight, ...styles.navButton, ...styles.topMargin30}}>
                <div style={{...styles.flex1}}>
                &nbsp;
                </div>
                 <div style={{...styles.flex1}}>
                &nbsp;
                </div>
                 <div style={{...styles.flex1}}>
                &nbsp;
                </div>
                 <div style={{...styles.flex1}}>
                &nbsp;
                </div>
            
            </div>)
    }
}
export default Footer;