import React, { Component } from 'react'
import { MyStylesheet } from './styles';
import CivilEngineer from './civilengineer';
import { linkArrow } from './svg';
import { Link } from 'react-router-dom';

class Landing extends Component {

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

        const styles = MyStylesheet()
        const civilengineer = new CivilEngineer();
        const headerFont = civilengineer.getHeaderFont.call(this)
        const regularFont = civilengineer.getRegularFont.call(this)
        const linkButton = { width: '60px' }


        return (
            <div style={{ ...styles.generalContainer }}>
                <div style={{ ...styles.generalContainer,  ...styles.alignCenter, ...styles.topMargin10, ...styles.generalFont, ...styles.bottomMargin15, ...styles.marginLeft15 }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>Geotechnical & Civil Engineering Reports Delivered Online</span>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont,  ...styles.padding15 }}>
                    <span style={{ ...regularFont }}>Our mission is to empower engineers, contractors, agencies, and project managers to plan, design, and deliver successful projects using modern tools, automated workflows, and professional engineering services.</span>
                </div>
                
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>Who We Help</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Geotechnical Clients</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>We provide fast, accurate geotechnical support—from soil reports and analysis to foundation recommendations and field documentation—delivered through a custom reporting platform with instant client access.  <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
               

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Engineering Firms and Municipalities</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>An intelligent specification writer offering full customization, complete spec sections, quantity take-offs, and bid schedules—supporting permitting, planning, and infrastructure design. Built for spec writers, engineers, and cost estimators. <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
              

                 <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Project Managers</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>Build your team, define roles, set milestones, and manage schedules, tasks, risks, and communication in one powerful PM dashboard—or hire us to manage the entire project.  <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
               

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Construction Companies</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>Our field engineering platform supports contractors from bid to payment. Manage labor, equipment, and materials, track schedules and actuals, and build real unit pricing data across every job. Digitally approved work orders ensure fast payment, while full customization adapts the system to your company. Join our contractor network to be added to projects. <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
              

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Businesses Needing Custom Software</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>You name it—we build it. We’re passionate about using the web to create practical business solutions. Let us build a custom application tailored to your business, with reporting, timesheets, invoicing, accounting, and more—available online at your own branded URL.    <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>

                 <div style={{ ...styles.generalContainer,   ...styles.marginLeft15, ...styles.generalFont }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>A Complete Engineering & Construction Platform</span>
                </div>
                <div style={{...styles.marginLeft15, ...styles.generalContainer, ...styles.generalFont}}>
                    <ul style={{...regularFont}}>
                    <li>Geotechnical Services / Apps</li>
                    <li>Engineering Design / Specs / Estimates</li>
                    <li>Project Management Tools</li>
                    <li>Construction Management Tools</li>
                    <li>Custom Web Apps</li>
                    <li>Cloud-based client portal</li>
                    </ul>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>Why CivilEngineer.io </span>
                </div>

                 <div style={{...styles.marginLeft15, ...styles.generalContainer, ...styles.generalFont}}>
                    <ul style={{...regularFont}}>
                    <li>Fast turnaround & real engineering support</li>
                    <li>Clean, modern online portal</li>
                    <li>Automated workflows built for real-world projects</li>
                    <li>Consistent, trackable deliverables</li>
                    <li>Scales from small projects to full programs</li>
                    <li>Cloud-based client portal</li>
                    </ul>
                </div>

                 <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>Ready to streamline your projects?</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.padding15 }}>
                    <span style={{ ...regularFont }}>Engineering, design, project management, and construction tools—built into one unified platform. </span>
                </div>
                <div style={{ ...styles.generalFlex, ...styles.marginLeft15, ...styles.bottomMargin15 }}>
                    <div style={{ ...styles.flex1, ...styles.generalFont, ...styles.regularColor }}>
                        <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Get Started </u></span></Link>
                    </div>
                    <div style={{ ...styles.flex1, ...styles.generalFont, ...styles.regularColor }}>
                        <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Contact Us</u></span></Link>
                    </div>
                </div>
               

            </div>
        )
    }


}

export default Landing;