import React, { Component } from 'react'
import { MyStylesheet } from './styles';
import CivilEngineer from './civilengineer';


class About extends Component {

     constructor(props) {
        super(props);
        this.state = { render: '', width: 0, height: 0, open: false }
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
        const civilengineer = new CivilEngineer();
        const headerFont = civilengineer.getHeaderFont.call(this)
        const regularFont = civilengineer.getRegularFont.call(this)
        const styles = MyStylesheet();
        const photoClass = {border:'1px solid', width:'33%'}

        return(<div style={{ ...styles.generalContainer }}>
                <div style={{ ...styles.generalContainer,  ...styles.alignCenter, ...styles.topMargin10, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>About</span>
                </div>

                <div style={{...styles.generalContainer, ...styles.bottomMargin15}}>
                    <div style={{...styles.generalContainer, ...photoClass, ...styles.marginAuto, ...styles.alignCenter, ...styles.centerDiv}}><img style={{...styles.width99, ...styles.marginAuto}} src={`${process.env.REACT_APP_SERVER_API}/uploads/images/portrait.jpg`} alt="Mazin Kenicer Professional Civil Engineer (PE) | Founder, civilengineer.io | Geotechnical, Design, & Construction Systems" /></div>
                </div>

                 <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>I am Mazin Kenicer, P.E., founder of civilengineer.io. I am a licensed civil engineer with a background in civil and environmental engineering and have been developing online engineering applications since 2015. </span>

                 </div>
                  <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>My work focuses on transforming established engineering principles and real-world practice into practical, web-based tools. These applications are designed to help engineers and construction professionals streamline design, analysis, and documentation while maintaining accuracy, consistency, and professional standards. </span>
                 </div>
                  <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>Over the course of my career, I have applied engineering judgment across design, construction, and quality control, which informs how these tools are built and used in practice. The goal of civilengineer.io is to provide industry-ready applications that support efficient workflows and reliable results at a fair and reasonable cost.  </span>
                 </div>
                 <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>In addition to software development, I continue to work in construction, providing engineering and QA/QC support on active projects. This ongoing involvement ensures that the tools developed on this platform remain practical, relevant, and aligned with real project needs.  </span>
                 </div>
                 <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>Thank you for visiting my site. I am committed to making civilengineer.io a valuable and successful resource for the engineering and construction community.  </span>
                 </div>
            </div>)
    }
}

export default About