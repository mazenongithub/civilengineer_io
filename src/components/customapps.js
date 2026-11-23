import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CivilEngineer from './civilengineer';
import './customapps.css';

const examples = [
    {
        title: 'Field and laboratory reporting',
        detail: 'Connect field observations, boring logs, and soil test results to the tables and figures your engineers use in reports.'
    },
    {
        title: 'Estimating and construction invoicing',
        detail: 'Build unit prices for CSI work items from labor, equipment, and material rates. Use actual quantities to prepare construction invoices.'
    },
    {
        title: 'Project and client portals',
        detail: 'Give clients a place to submit site information and retrieve reports. Give staff a project view for managing documents, schedules, and deliverables.'
    }
];

class CustomApps extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        const headerFont = civilengineer.getHeaderFont.call(this);
        const regularFont = civilengineer.getRegularFont.call(this);

        return (
            <main className="ce-custom" style={regularFont}>
                <header className="ce-custom__intro">
                    <h1 style={headerFont}>Custom Apps</h1>
                    <p>
                        If your team enters the same project data into a field sheet,
                        a spreadsheet, and a final report, a custom web app can connect
                        those steps. I build applications around the way your engineers
                        collect data, check calculations, and deliver work to clients.
                    </p>
                </header>

                <section aria-labelledby="custom-examples">
                    <h2 id="custom-examples">What can we build?</h2>
                    <div className="ce-custom__examples">
                        {examples.map(({ title, detail }) => (
                            <article key={title}>
                                <h3>{title}</h3>
                                <p>{detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="ce-custom__contact" aria-labelledby="custom-start">
                    <div>
                        <h2 id="custom-start">Start with one task</h2>
                        <p>
                            Tell me who does the work, what they enter, and what they
                            need to produce. A description of a field form, calculation
                            sheet, or report you use today is a good place to start.
                        </p>
                    </div>
                    <Link to="/contactus">Discuss your app</Link>
                </section>
            </main>
        );
    }
}

export default CustomApps;
