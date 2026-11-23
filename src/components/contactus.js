import React, { Component } from 'react';
import CivilEngineer from './civilengineer';
import { SaveContactUs } from './actions/api';
import './ContactUs.css';

const fields = [
    ['fullname', 'Full name', 'text', 'name'],
    ['company', 'Company', 'text', 'organization'],
    ['emailaddress', 'Email address', 'email', 'email'],
    ['phonenumber', 'Phone number', 'tel', 'tel']
];

const services = [
    ['geotechnical', 'Geotechnical engineering'],
    ['projectmanagement', 'Project management'],
    ['design', 'Design and specifications'],
    ['construction', 'Construction support'],
    ['customapp', 'Custom application']
];

const email = 'support@civilengineer.io';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, height: 0, captchaToken: null,
            sending: false, message: '', verificationError: ''
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.widgetContainer = React.createRef();
    }

    componentDidMount() {
        this.mounted = true;
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();

        if (window.turnstile?.render) {
            this.renderWidget();
        } else {
            this.script = document.querySelector('script[src*="challenges.cloudflare.com/turnstile/"]');
            if (this.script) {
                this.script.addEventListener('load', this.renderWidget);
                this.script.addEventListener('error', this.verificationFailed);
            } else {
                this.verificationFailed();
            }
        }
    }

    componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener('resize', this.updateWindowDimensions);
        this.script?.removeEventListener('load', this.renderWidget);
        this.script?.removeEventListener('error', this.verificationFailed);
        if (this.widgetId != null) window.turnstile?.remove(this.widgetId);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    verificationFailed = () => {
        if (this.mounted) this.setState({
            captchaToken: null,
            verificationError: 'Verification is unavailable. Refresh the page or contact us by email.'
        });
    };

    renderWidget = () => {
        try {
            this.widgetId = window.turnstile.render(this.widgetContainer.current, {
                sitekey: process.env.REACT_APP_TURNSTILE_SITE_KEY,
                theme: 'light',
                size: 'flexible',
                callback: token => this.setState({ captchaToken: token, verificationError: '' }),
                'expired-callback': () => this.setState({ captchaToken: null }),
                'error-callback': this.verificationFailed
            });
        } catch {
            this.verificationFailed();
        }
    };

    saveContactUs = async event => {
        event.preventDefault();
        const { captchaToken, sending } = this.state;
        if (!captchaToken || sending) return;

        const form = event.currentTarget;
        const data = new FormData(form);
        const values = { detail: data.get('detail'), captchaToken };
        fields.forEach(([name]) => { values[name] = data.get(name); });
        services.forEach(([name]) => { values[name] = data.has(name); });

        this.setState({ sending: true, message: '' });
        try {
            const response = await SaveContactUs(values);
            if (!response?.contactus) throw new Error('Submission was not confirmed');
            if (this.mounted) {
                form.reset();
                this.setState({ message: response.message || 'Thank you. Your message has been sent.' });
            }
        } catch {
            if (this.mounted) this.setState({
                message: 'We could not confirm delivery. Your entries are still here. Please try again or email us.'
            });
        } finally {
            if (this.mounted) {
                this.setState({ sending: false, captchaToken: null });
                window.turnstile?.reset(this.widgetId);
            }
        }
    };

    render() {
        const fonts = new CivilEngineer();
        const { sending, captchaToken, message, verificationError } = this.state;

        return (
            <main className="ce-contact" style={fonts.getRegularFont.call(this)}>
                <header>
                    <h1 style={fonts.getHeaderFont.call(this)}>Contact Us</h1>
                    <p>Tell us about your project or ask a question about a civilengineer.io application.</p>
                    <a href={`mailto:${email}`}>{email}</a>
                </header>

                <form onSubmit={this.saveContactUs}>
                    <fieldset disabled={sending}>
                        <legend>Your contact information</legend>
                        <div className="ce-contact__grid">
                            {fields.map(([name, label, type, autoComplete]) => (
                                <label key={name}>
                                    {label}
                                    <input name={name} type={type} autoComplete={autoComplete} />
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset disabled={sending}>
                        <legend>Which services are you interested in?</legend>
                        <div className="ce-contact__services">
                            {services.map(([name, label]) => (
                                <label key={name}>
                                    <input type="checkbox" name={name} />
                                    {label}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <label>
                        Your message
                        <textarea name="detail" rows={5} disabled={sending} />
                    </label>
                    <div ref={this.widgetContainer} />
                    {verificationError && <p role="alert">{verificationError}</p>}
                    <button disabled={sending || !captchaToken} type="submit">
                        {sending ? 'Sending…' : 'Send message'}
                    </button>
                    <div role="status">{message}</div>
                </form>
            </main>
        );
    }
}

export default ContactUs;
