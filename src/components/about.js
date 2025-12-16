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
                    <div style={{...styles.generalContainer, ...photoClass, ...styles.marginAuto}}>&nbsp;</div>
                </div>

                 <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>I am Mazen Khenaisser, P.E., and the founder of civilengineer.io. I have been developing online engineering applications since 2015. After graduating from San José State University with a degree in Civil and Environmental Engineering, I began my career in 2007 with the Federal Bureau of Reclamation, Division of Design and Construction, in Sacramento, California. There, I gained experience in engineering design and cost estimating, and later applied these methods to develop project management, design, and construction tools</span>
                 </div>
                  <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>After leaving government service, I gained additional experience working as a geotechnical consultant with GFK & Associates in Dublin, California. Over more than 25 years of industry practice, I compiled a collection of proven design methods and integrated them into a comprehensive geotechnical design program. These tools allow me to efficiently deliver professional reports to clients in need of geotechnical engineering services. </span>
                 </div>
                  <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>I am dedicated to developing this web platform into a growing suite of industry-ready applications that reflect best practices learned throughout my career. By using these tools, engineers and construction professionals can produce high-quality work efficiently and at a fair and reasonable cost. My goal is to help construction companies improve consistency, accuracy, and profitability on every project.  </span>
                 </div>
                 <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>In addition to software development, I continue to work in construction as a project engineer, providing QA/QC services for clients on the projects I manage.  </span>
                 </div>
                 <div style={{...styles.generalContainer, ...styles.padding5, ...styles.generalFont, ...styles.width90, ...styles.marginAuto}}>
                    <span style={{...regularFont}}>Thank you for visiting my site. I am committed to making civilengineer.io a valuable and successful resource for the engineering and construction community  </span>
                 </div>
            </div>)
    }
}

export default About