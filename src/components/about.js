import React, { Component } from 'react';
import CivilEngineer from './civilengineer';
import './About.css';

class About extends Component {
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
        const civilengineer = new CivilEngineer();
        const headerFont = civilengineer.getHeaderFont.call(this);
        const regularFont = civilengineer.getRegularFont.call(this);
        const portraitUrl =
            `${process.env.REACT_APP_SERVER_API}/uploads/images/portrait.jpg`;

        return (
            <main className="ce-about" aria-labelledby="about-title">
                <div className="ce-about__layout">
                    <header className="ce-about__header">
                        <h1 id="about-title" style={headerFont}>
                            Mazin Kenicer, P.E.
                        </h1>
                        <p className="ce-about__role" style={regularFont}>
                            California Civil Engineer and Founder of civilengineer.io
                        </p>
                    </header>

                    <img
                        className="ce-about__portrait"
                        src={portraitUrl}
                        alt="Mazin Kenicer"
                    />

                    <div className="ce-about__bio" style={regularFont}>
                        <p>
                            I’ve been building web-based engineering applications
                            since 2015. I founded civilengineer.io to help engineers
                            and construction teams manage the calculations, field
                            data, and documentation that go into a project.
                        </p>

                        <h2>Engineering experience behind the software</h2>

                        <p>
                            My background spans civil design, geotechnical
                            consulting, and construction quality control. At the
                            U.S. Bureau of Reclamation, I prepared civil design
                            plans and cost estimates. In geotechnical consulting,
                            I’ve worked with field and laboratory data, engineering
                            analyses, and technical reports.
                        </p>

                        <p>
                            I continue to provide engineering and QA/QC support
                            on active construction projects. That work shapes how
                            I build the platform, from organizing soil lab results
                            and drafting boring logs to documenting compaction
                            tests and preparing geotechnical reports.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default About;