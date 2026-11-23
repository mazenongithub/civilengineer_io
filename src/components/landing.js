import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CivilEngineer from './civilengineer';
import '../App.css';

// Conceptual artwork, intentionally not a screenshot or a construction detail.
function EngineeringIllustration() {
    return (
        <div className="ce-drawing">
            <div className="ce-drawing-bar"><span>GEOTECHNICAL ENGINEERING</span><span>CONCEPTUAL SECTION</span></div>
            <svg viewBox="0 0 560 450" role="img" aria-label="Conceptual foundation section showing soil layers and an exploratory boring" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ce-sand-pattern" width="17" height="17" patternUnits="userSpaceOnUse"><circle cx="3" cy="5" r="1" fill="#85cad2"/><circle cx="12" cy="12" r="1" fill="#85cad2"/></pattern>
                    <pattern id="ce-clay-pattern" width="23" height="14" patternUnits="userSpaceOnUse"><path d="M2 5H13 M10 11H21" stroke="#8aafc0" strokeWidth="1"/></pattern>
                    <pattern id="ce-gravel-pattern" width="30" height="24" patternUnits="userSpaceOnUse"><circle cx="7" cy="8" r="3" fill="none" stroke="#81c8cb"/><circle cx="22" cy="17" r="4" fill="none" stroke="#81c8cb"/></pattern>
                </defs>
                <g opacity=".15" stroke="#89c9d2" strokeWidth=".5">
                    {[60,120,180,240,300,360,420,480].map(x => <line key={x} x1={x} y1="20" x2={x} y2="425"/>)}
                    {[60,120,180,240,300,360,420].map(y => <line key={y} x1="20" y1={y} x2="540" y2={y}/>)}
                </g>
                <g fill="none" stroke="#d5eff3" strokeWidth="2">
                    <path d="M108 160V69H316V160 M94 69L212 25L330 69Z M108 69H316"/>
                    <rect x="132" y="91" width="47" height="44"/><path d="M155 91V135M132 113H179"/>
                    <rect x="244" y="91" width="47" height="44"/><path d="M267 91V135M244 113H291"/>
                    <rect x="196" y="108" width="34" height="52"/>
                </g>
                <g fill="#54c4c8" fillOpacity=".24" stroke="#70dadd" strokeWidth="2"><rect x="94" y="160" width="80" height="17"/><rect x="254" y="160" width="80" height="17"/></g>
                <path d="M20 160H540" stroke="#80dad9" strokeWidth="2"/>
                <path d="M20 161H540V245Q430 256 310 244T20 250Z" fill="#1c5569"/>
                <path d="M20 161H540V245Q430 256 310 244T20 250Z" fill="url(#ce-sand-pattern)" opacity=".7"/>
                <path d="M20 250Q160 240 310 244T540 245V336Q430 330 310 338T20 334Z" fill="#24465e"/>
                <path d="M20 250Q160 240 310 244T540 245V336Q430 330 310 338T20 334Z" fill="url(#ce-clay-pattern)" opacity=".7"/>
                <path d="M20 334Q160 342 310 338T540 336V425H20Z" fill="#173e55"/>
                <path d="M20 334Q160 342 310 338T540 336V425H20Z" fill="url(#ce-gravel-pattern)" opacity=".7"/>
                <g fill="none" stroke="#6abac8"><path d="M20 250Q160 240 310 244T540 245"/><path d="M20 334Q160 342 310 338T540 336"/></g>
                <g fill="#bfdce6" fontSize="11" fontFamily="Arial, sans-serif"><text x="38" y="207">SAND</text><text x="38" y="293">SILTY CLAY</text><text x="38" y="385">DENSE GRAVEL</text></g>
                <g fill="none" stroke="#70dadd"><path d="M133 155L120 125H45"/></g>
                <text x="45" y="115" fill="#70dadd" fontSize="10" fontFamily="Arial, sans-serif">SHALLOW FOUNDATION</text>
                <rect x="401" y="160" width="28" height="247" fill="#071a2b" stroke="#e1f5f5" strokeWidth="1.5"/>
                <rect x="403" y="162" width="24" height="83" fill="#318f9c"/><rect x="403" y="245" width="24" height="91" fill="#587f95"/><rect x="403" y="336" width="24" height="69" fill="#3b647c"/>
                <g stroke="#c2edf0"><path d="M401 245H429M401 336H429"/></g>
                <rect x="379" y="126" width="73" height="25" rx="5" fill="#078f9b"/><text x="415" y="143" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">B-1</text>
                <path d="M415 151V160" stroke="#70dadd" strokeDasharray="3 3"/>
                <g fontSize="10" fontFamily="Arial, sans-serif" fill="#bedce7"><text x="448" y="166">0 ft</text><text x="448" y="248">10 ft</text><text x="448" y="339">20 ft</text><text x="448" y="410">30 ft</text></g>
                <text x="535" y="443" fill="#90b7c5" fontSize="9" textAnchor="end" letterSpacing="1">NOT TO SCALE</text>
            </svg>
            <div className="ce-drawing-bar ce-drawing-bottom"><span>FOUNDATION • SUBSURFACE EXPLORATION</span><span>ILLUSTRATIVE ONLY</span></div>
        </div>
    );
}

const audiences = [
    { icon: '◈', title: 'Geotechnical Clients', description: 'Geotechnical investigations, soil reports, foundation recommendations, and field engineering support—with convenient online access to project information.', tags: ['Investigations', 'Foundations', 'Reports'] },
    { icon: '▤', title: 'Engineering Firms & Municipalities', description: 'Civil engineering support, customizable specifications, quantity takeoffs, and cost estimates for infrastructure, planning, and permitting.', tags: ['Design', 'Specifications', 'Estimates'] },
    { icon: '◎', title: 'Project Managers', description: 'Coordinate teams, assign responsibilities, establish milestones, and organize schedules, tasks, budgets, and deliverables.', tags: ['Scheduling', 'Coordination', 'Delivery'] },
    { icon: '▥', title: 'Construction Companies', description: 'Manage field documentation, labor, equipment, materials, job costs, and project progress from a connected workspace.', tags: ['Field Operations', 'Costs', 'Tracking'] },
    { icon: '⌘', title: 'Custom Business Software', description: 'Practical web applications tailored to your workflows, including timesheets, invoicing, reporting, and specialized business processes.', tags: ['Web Applications', 'Automation', 'Cloud'] }
];

const capabilities = [
    { icon: '◈', title: 'Geotechnical Engineering', text: 'Soil investigations, laboratory data, foundation analysis, seismic criteria, and engineering reports.' },
    { icon: '▤', title: 'Engineering Design', text: 'Civil design support, specifications, quantity takeoffs, and construction estimates.' },
    { icon: '◎', title: 'Project Management', text: 'Schedules, tasks, budgets, proposals, documents, and team coordination.' },
    { icon: '▥', title: 'Construction Management', text: 'Field reporting, labor tracking, materials, equipment, and job cost records.' },
    { icon: '⌘', title: 'Custom Applications', text: 'Purpose-built cloud software for engineering teams and other businesses.' },
    { icon: '☁', title: 'Online Client Portal', text: 'Centralized access to reports, project data, records, and deliverables.' }
];

const advantages = [
    { title: 'Professional Engineering Expertise', text: 'Technical understanding and practical project experience inform the services and software.' },
    { title: 'Streamlined Project Delivery', text: 'Connected workflows reduce administrative friction and keep documents organized.' },
    { title: 'Purpose-Built Digital Tools', text: 'Engineering calculations, reporting, and project management within a coordinated platform.' },
    { title: 'Convenient Online Reporting', text: 'Give authorized teams access to the information and deliverables they need.' },
    { title: 'Flexible Solutions', text: 'Support individual projects, consultants, contractors, and larger organizations.' }
];


class Landing extends Component {
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
        window.addEventListener(
            'resize',
            this.updateWindowDimensions
        );
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            this.updateWindowDimensions
        );
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {
        const civilengineer = new CivilEngineer();
        const regularFont = civilengineer.getRegularFont.call(this);

        return (
            <main className="ce-landing" style={{ ...regularFont }}>

                <section className="ce-hero">
                    <div className="ce-container ce-hero-grid">
                        <div>
                            <div className="ce-eyebrow">Engineering Meets Innovation</div>
                            <h1>Geotechnical &amp; Civil Engineering, <span>Simplified.</span></h1>
                            <p className="ce-hero-description">From geotechnical investigations and civil engineering design to project management and technical reports, CivilEngineer.io brings professional engineering services and digital tools together in one convenient platform.</p>
                            <div className="ce-hero-actions">
                                <Link className="ce-button primary" to="/contactus">Start Your Project <span aria-hidden="true">→</span></Link>
                                <a className="ce-button secondary" href="#ce-platform">Explore Our Platform <span aria-hidden="true">↗</span></a>
                            </div>
                            <div className="ce-hero-note"><span>Engineering Expertise</span><span>Digital Project Delivery</span><span>Online Client Access</span></div>
                        </div>
                        <EngineeringIllustration />
                    </div>
                </section>

                <section className="ce-section" id="ce-services">
                    <div className="ce-container">
                        <div className="ce-section-heading center">
                            <div className="ce-eyebrow">Who We Help</div>
                            <h2>Engineering solutions for every stage of your project.</h2>
                            <p>Whether you need professional engineering services or better tools to manage your operations, we bring practical expertise and modern technology together.</p>
                        </div>
                        <div className="ce-service-grid">
                            {audiences.map((item, i) => (
                                <article className="ce-service-card" key={item.title}>
                                    <div className="ce-card-top"><span className="ce-card-icon" aria-hidden="true">{item.icon}</span><span className="ce-card-number">{String(i + 1).padStart(2, '0')}</span></div>
                                    <h3>{item.title}</h3><p>{item.description}</p>
                                    <div className="ce-tags">{item.tags.map(tag => <span className="ce-tag" key={tag}>{tag}</span>)}</div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ce-section ce-capabilities" id="ce-platform">
                    <div className="ce-container">
                        <div className="ce-section-heading">
                            <div className="ce-eyebrow">The Platform</div>
                            <h2>A complete engineering &amp; construction ecosystem.</h2>
                            <p>Specialized engineering applications, project management solutions, and cloud-based reporting tools designed around real engineering workflows.</p>
                        </div>
                        <div className="ce-capability-grid">
                            {capabilities.map(item => (
                                <article className="ce-capability" key={item.title}>
                                    <div className="ce-capability-icon" aria-hidden="true">{item.icon}</div>
                                    <h3>{item.title}</h3><p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ce-section">
                    <div className="ce-container">
                        <div className="ce-section-heading">
                            <div className="ce-eyebrow">Our Advantage</div>
                            <h2>Built by engineers. Designed for real projects.</h2>
                        </div>
                        <div className="ce-about-grid">
                            <div className="ce-about-panel">
                                <div className="ce-about-panel-label">Engineering + Technology</div>
                                <h3>Real-world engineering experience meets intelligent digital solutions.</h3>
                                <p>CivilEngineer.io combines professional civil and geotechnical engineering experience with purpose-built web technology.</p>
                                <p>Our goal is simple: help clients, engineers, and project teams work more efficiently, maintain better project records, and deliver high-quality results.</p>
                            </div>
                            <div className="ce-advantages">
                                {advantages.map(item => (
                                    <div className="ce-advantage" key={item.title}>
                                        <span className="ce-check" aria-hidden="true">✓</span>
                                        <div><h4>{item.title}</h4><p>{item.text}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ce-cta">
                    <div className="ce-container">
                        <div className="ce-eyebrow">Let's Get Started</div>
                        <h2>Ready to move your project forward?</h2>
                        <p>From professional engineering services to specialized software and project management solutions, we're ready to help you build a better workflow.</p>
                        <Link className="ce-button light" to="/contactus">Contact CivilEngineer.io <span aria-hidden="true">→</span></Link>
                    </div>
                </section>

                <div className="ce-footer-note"><div className="ce-container">CivilEngineer.io — Engineering Expertise. Digital Innovation. Better Project Delivery.</div></div>
            </main>
        );
    }
}

export default Landing;
