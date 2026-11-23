import React, { Component } from 'react';
import CivilEngineer from './civilengineer';
import { MyStylesheet } from './styles';
import { Geotech, PM } from './svg';
import './HowItWorks.css';

class HowItWorks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        };

        this.updateWindowDimensions =
            this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {
        const styles = MyStylesheet();
        const civilengineer = new CivilEngineer();
        const headerFont = civilengineer.getHeaderFont.call(this);
        const regularFont = civilengineer.getRegularFont.call(this);

        return (
            <main
                className="ce-how"
                style={{ ...styles.generalFont, ...regularFont }}
                aria-labelledby="how-title"
            >
                <h1 id="how-title" style={headerFont}>How It Works</h1>

                <section className="ce-how__section" aria-labelledby="geotech-title">
                    <h2 id="geotech-title">Geotechnical Engineering</h2>

                    <div className="ce-how__layout">
                        <ol className="ce-how__steps">
                            <li>
                                <h3>Create your account</h3>
                                <p>
                                    Register in the{' '}
                                    <a href="https://geotech.civilengineer.io">
                                        geotechnical client portal
                                    </a>.
                                </p>
                            </li>
                            <li>
                                <h3>Submit your project</h3>
                                <p>
                                    Enter the site information, describe the work
                                    you need, and upload supporting documents.
                                </p>
                            </li>
                            <li>
                                <h3>Investigation and analysis</h3>
                                <p>
                                    CivilEngineer.io performs the geotechnical
                                    investigation, analyzes the findings, and
                                    prepares your report.
                                </p>
                            </li>
                            <li>
                                <h3>Receive your report</h3>
                                <p>
                                    When your report is ready, open your project in the geotechnical
                                    client portal to view or download it.
                                </p>
                            </li>
                            <li>
                                <h3>Access your project record</h3>
                                <p>
                                    Reports stay organized by project in your
                                    account. Return whenever you need another copy.
                                </p>
                            </li>
                        </ol>

                        <div
                            className="ce-how__diagram"
                            role="img"
                            aria-label="Geotechnical project workflow from submission to report delivery"
                        >
                            {Geotech()}
                        </div>
                    </div>
                </section>

                <section className="ce-how__section" aria-labelledby="delivery-title">
                    <h2 id="delivery-title">
                        Project Management, Design &amp; Construction
                    </h2>

                    <p className="ce-how__intro">
                        The project manager creates the project in civilengineer.io
                        and assembles the delivery team through the Engineering
                        (Design) Network and the Construction Network.
                    </p>

                    <div className="ce-how__layout">
                        <div className="ce-how__phases">
                            <div>
                                <h3>Design</h3>
                                <p>
                                    Engineers prepare the specifications, quantity
                                    takeoffs, cost estimate, and bid schedule.
                                    Together, these documents define the work,
                                    establish a basis for pricing, and set the
                                    construction requirements.
                                </p>
                            </div>

                            <div>
                                <h3>Construction</h3>
                                <p>
                                    Contractors review the project specifications online and use CSI
                                    classifications to organize work items. For each item, they build
                                    a unit price from labor rates, equipment rates, and material prices.
                                </p>
                                <p>
                                    Contractors enter the project schedule and record actual progress
                                    and completed quantities. They use those quantities and the work
                                    item unit prices to create construction invoices.
                                </p>
                            </div>

                            <div>
                                <h3>Project management oversight</h3>
                                <p>
                                    The platform tracks scope, schedule, quantities,
                                    unit prices, reported progress, and payment
                                    applications. The project manager can review
                                    these together in one auditable project record.
                                </p>
                            </div>
                        </div>

                        <div
                            className="ce-how__diagram"
                            role="img"
                            aria-label="Project delivery workflow for design, construction, and management oversight"
                        >
                            {PM()}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default HowItWorks;