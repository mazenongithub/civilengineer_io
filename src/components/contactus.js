import React, { Component } from 'react'
import { MyStylesheet } from './styles';
import CivilEngineer from './civilengineer';
import { checkedBox, submitButton, unCheckedBox } from './svg';
import { SaveContactUs } from './actions/api';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = { render: '', width: 0, height: 0, open: false, fullname: '', company: '', emailaddress: '', phonenumber: '', geotechnical: false, projectmanagement: false, design: false, construction: false, customapp: false, detail: '', message: '' }
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

    setField(field, value) {
        this.setState({
            [field]: value
        });
    };

    getField(field) {
        return this.state[field];
    };

    getCheckboxIcon(field) {
        return this.state[field] ? checkedBox() : unCheckedBox();
    }

    toggleField(field) {
        this.setState((prevState) => ({
            [field]: !prevState[field]
        }));
    };

    async saveContactUs() {
        try {
            const {
                fullname,
                company,
                emailaddress,
                phonenumber,
                geotechnical,
                projectmanagement,
                design,
                construction,
                customapp,
                detail
            } = this.state;

            const values = {
                fullname,
                company,
                emailaddress,
                phonenumber,
                geotechnical,
                projectmanagement,
                design,
                construction,
                customapp,
                detail
            };

            const response = await SaveContactUs(values);
            const created = new Date(response.contactus.created).toLocaleTimeString();
            const message =`${response.message} ${created}`
            this.setState({
                message: message || 'Message sent successfully'
            });

        } catch (err) {
            console.error('save contact us error:', err);
            alert('Unable to send message. Please try again.');
        }
    }


    render() {
        const styles = MyStylesheet()
        const civilengineer = new CivilEngineer();
        const headerFont = civilengineer.getHeaderFont.call(this)
        const regularFont = civilengineer.getRegularFont.call(this)
        const buttonWidth = { width: '55px' }
        const areaHeight = { minHeight: '200px' }
        const submitWidth = { width: '100%', maxWidth: '225px' }
        return (
            <div style={{ ...styles.generalContainer, ...styles.padding15 }}>

                <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...headerFont, ...styles.boldFont, ...styles.themeColor }}>Contact Us</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont, ...styles.themeColor }}>
                    <span style={{ ...headerFont }}>Get in Touch with CivilEngineer.io</span>
                </div>


                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <span style={{ ...regularFont }}>Questions about geotechnical reports, project management, design tools, or custom applications? We’re here to help.</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <span style={{ ...regularFont }}>Whether you’re an engineer, contractor, developer, or public agency, our team supports planning, design, and construction with professional engineering services and modern web-based tools.</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont, ...styles.themeColor }}>
                    <span style={{ ...headerFont }}>Email</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <a href="mailto:support@civilengineer.io" style={{ ...regularFont, ...styles.boldFont, ...styles.generalLink }}>mazen@civilengineer.io</a>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont, ...styles.themeColor }}>
                    <span style={{ ...headerFont }}>Contact</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>Full Name</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <input type="text"
                        value={this.getField("fullname")}
                        onChange={event => { this.setField("fullname", event.target.value) }}
                        style={{ ...regularFont, ...styles.generalField }} />
                </div>

                 <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>Company</span>
                </div>


                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <input type="text" style={{ ...regularFont, ...styles.generalField }}
                        value={this.getField("company")}
                        onChange={event => { this.setField("company", event.target.value) }} />
                </div>

                 <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>Email Address</span>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <input type="text" style={{ ...regularFont, ...styles.generalField }}
                        value={this.getField("emailaddress")}
                        onChange={event => { this.setField("emailaddress", event.target.value) }} />
                </div>

              <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>Phone Number</span>
                </div>


                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <input type="text" style={{ ...regularFont, ...styles.generalField }}
                        value={this.getField("phonenumber")}
                        onChange={event => { this.setField("phonenumber", event.target.value) }} />
                </div>

                

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>Service of Interest</span>
                </div>

                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <div style={{ ...styles.flex1 }}>
                        <button onClick={() => { this.toggleField("geotechnical") }}
                            style={{ ...styles.generalButton, ...buttonWidth }}>{this.getCheckboxIcon("geotechnical")}</button>
                    </div>
                    <div style={{ ...styles.flex8, ...styles.generalFont }}>
                        <span style={{ ...regularFont }}>Geotechnical Engineering</span>
                    </div>
                </div>


                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <div style={{ ...styles.flex1 }}>
                        <button onClick={() => { this.toggleField("projectmanagement") }}
                            style={{ ...styles.generalButton, ...buttonWidth }}>{this.getCheckboxIcon("projectmanagement")}</button>
                    </div>
                    <div style={{ ...styles.flex8, ...styles.generalFont }}>
                        <span style={{ ...regularFont }}>Project Management</span>
                    </div>
                </div>


                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <div style={{ ...styles.flex1 }}>
                        <button onClick={() => { this.toggleField("design") }}
                            style={{ ...styles.generalButton, ...buttonWidth }}>{this.getCheckboxIcon("design")}</button>
                    </div>
                    <div style={{ ...styles.flex8, ...styles.generalFont }}>
                        <span style={{ ...regularFont }}>Design and Specifications</span>
                    </div>
                </div>


                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <div style={{ ...styles.flex1 }}>
                        <button onClick={() => { this.toggleField("construction") }}
                            style={{ ...styles.generalButton, ...buttonWidth }}>{this.getCheckboxIcon("construction")}</button>
                    </div>
                    <div style={{ ...styles.flex8, ...styles.generalFont }}>
                        <span style={{ ...regularFont }}>Construction Support</span>
                    </div>
                </div>


                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...styles.generalFont }}>
                    <div style={{ ...styles.flex1 }}>
                        <button onClick={() => { this.toggleField("customapp") }}
                            style={{ ...styles.generalButton, ...buttonWidth }}>{this.getCheckboxIcon("customapp")}</button>
                    </div>
                    <div style={{ ...styles.flex8, ...styles.generalFont }}>
                        <span style={{ ...regularFont }}>Custom Application</span>
                    </div>
                </div>


                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                    <textarea style={{ ...regularFont, ...styles.generalFont, ...styles.generalField, ...areaHeight }}
                        value={this.getField("detail")}
                        onChange={event => { this.setField("detail", event.target.value) }} >

                    </textarea>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.generalFont, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont }}>Message</span>
                </div>

                <div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex5 }}>
                        &nbsp;
                    </div>
                    <div style={{ ...styles.flex1 }}>
                        <button style={{ ...styles.generalButton, ...submitWidth }} onClick={() => { this.saveContactUs() }}>
                            {submitButton()}
                        </button>
                    </div>
                </div>


                 <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.generalFont, ...styles.alignCenter }}>
                    <span style={{ ...regularFont }}>{this.state.message}</span>
                </div>







            </div>

        )
    }
}

export default ContactUs