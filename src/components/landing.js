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
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>Delivering Smart Engineering Reports Online</span>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont,  ...styles.padding15 }}>
                    <span style={{ ...regularFont }}>Our mission is to help engineers, contractors, agencies, and project managers plan, design, and deliver successful projects—supported by modern tools, automated workflows, and professional engineering services.</span>
                </div>
                
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...headerFont, ...styles.themeColor, ...styles.boldFont }}>Who We Help</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Geotechnical Clients</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>Whether you need soil reports, analysis, foundation recommendations, or field documentation—we provide fast, accurate geotechnical support. Custom Geotechnical reporting program setting the bar leading the industry providing client portal instantly recieves needed reports.  <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
               

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Engineering Firms and Municipalities</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>Smart specifications writer, full customizations, spec sections, quantity take-offs, and bid schedules. Supports permitting, planning, and infrastructure design. Created for Spec writers, engineers, and cost estimators. <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
              

                 <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Project Managers</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>Build a team, define roles, create milestone dates, manage schedules, tasks, risks, and communication with a simple, powerful PM dashboard—or hire us to manage your entire project.  <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
               

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Construction Companies</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15 }}>
                    <span style={{ ...regularFont }}>We provide field engineering service. Use our program to manage the job. Work as part of a team on a project. Company components include equipment, labor, and materials. Project components cover the job entirely including schedule, actual, bid schedule, and bid. Creates database of actual unit prices performed on each job. Join our contractor network to get added onto projects. All final work orders get signed and approved and Contactor gets paid ! Guarantees for profit for every job. Full customization available per company <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
                </div>
              

                <div style={{ ...styles.generalContainer, ...styles.generalFont }}>
                    <ul><li style={{ ...regularFont }}>Businesses Needing Custom Software</li></ul>
                </div>
                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.marginLeft15, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>You name it we build it. We are enthusiastic about using the web to solve businesses solutions. Hire us to create your own buisness application tailored to your business model. Reports, timesheets, easy invoice, accounting, plus more available and accessible online at your own custom url.    <Link style={{ ...styles.generalLink }} to={'/'}><button style={{ ...styles.generalButton, ...linkButton }}>{linkArrow()}</button><span style={{ ...regularFont }}><u>Learn More </u></span></Link></span>
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