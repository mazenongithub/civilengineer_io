import React, { Component } from 'react'
import { MyStylesheet } from './styles';
import CivilEngineer from './civilengineer';
import { Geotech, PM } from './svg';


class HowItWorks extends Component {

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

        const flexBox = this.state.width > 900
            ? styles.flex16
            : styles.flex12;

        return (<div style={{ ...styles.generalContainer, ...styles.padding15 }}>

            <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.generalFont, ...styles.bottomMargin15 }}>
                <span style={{ ...headerFont, ...styles.boldFont, ...styles.themeColor }}>How It Works</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont, ...styles.themeColor }}>
                <span style={{ ...headerFont }}>Geotechnical Engineering</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>Clients can manage their geotechnical work entirely online.</span>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>1. Create An Account</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>Users create an account at https://geotech.civilengineer.io</span>
            </div>


            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>2. Submit A Project</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>Inside the platform, users can create and submit geotechnical projects, including site information, scope, and supporting documents.</span>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>3. Engineering & Analysis</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>CivilEngineer.io performs the geotechnical engineering work directly, including investigation, analysis, and report preparation.</span>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>4. Receive Your Report</span></div>

            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>Completed geotechnical reports are delivered through https://gfk.civilengineer.io</span>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>5. Permanent Access</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>All reports are stored in your account, organized by project, where you:</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <ul>
                    <li style={{ ...regularFont }}>Always have access</li>
                    <li style={{ ...regularFont }}>Can download reports at any time</li>
                    <li style={{ ...regularFont }}>Maintain a permanent project record</li>
                </ul>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.width50, ...styles.marginAuto }}>
                {Geotech()}
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont, ...styles.themeColor }}>
                <span style={{ ...headerFont }}>PM, Design, and Construction</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>All project delivery activities are managed inside the civilengineer.io PM system, creating a single source of truth from design through construction.</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>
                    Projects are created and administered within the PM platform, where the project manager assembles the delivery team using the Engineering (Design) Network and the Construction Network.</span>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>Design Phase</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>Engineers engaged through the platform deliver:</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <ul><li style={{ ...regularFont }}>Project specifications</li>
                    <li style={{ ...regularFont }}>Cost Estimate, Bid Schedule, and Quantity Take-offs</li>
                </ul>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>
                    These documents establish scope, pricing structure, and construction requirements.</span>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>Construction Phase</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>Construction companies manage execution directly in the system by:</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <ul><li style={{ ...regularFont }}>Entering the project schedule</li>
                    <li style={{ ...regularFont }}>Reporting actual progress and quantities</li>
                    <li style={{ ...regularFont }}>Submitting schedule-based payment applications</li>
                </ul>
            </div>

            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}><span style={{ ...regularFont, ...styles.boldFont }}>Project Management  Oversight</span></div>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>The platform automatically tracks:</span>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <ul><li style={{ ...regularFont }}>Scope, schedule, quantities, and unit pricing</li>
                    <li style={{ ...regularFont }}>Progress </li>
                    <li style={{ ...regularFont }}>Submitted payment</li>
                </ul>
            </div>

            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                <span style={{ ...regularFont }}>
                    This gives the project manager full visibility and control, with all project information centralized and auditable.</span>
            </div>

              <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.width80, ...styles.marginAuto }}>
                {PM()}
            </div>



        </div>)
    }


}

export default HowItWorks;