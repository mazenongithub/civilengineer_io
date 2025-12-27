import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { MyStylesheet } from "./components/styles";
import Landing from "./components/landing";
import About from "./components/about";
import Footer from "./components/footer";
import HowItWorks from "./components/howitworks";
import ContactUs from "./components/contactus";
import { Helmet } from 'react-helmet-async';
class App extends Component {

  render() {
    const styles = MyStylesheet();

    return (
     
        <div className="app">

        <Helmet>
        {/* Base title (can be overridden per page) */}
        <title>CivilEngineer.io | Geotechnical, PM, Design & Construction Services</title>

        {/* Default meta description */}
        <meta
          name="description"
          content="Licensed civil engineering services with modern web-based tools for geotechnical reports, project management, design, and construction workflows."
        />
        {/* Canonical (base) */}
        <link rel="canonical" href="https://civilengineer.io/" />

        {/* Open Graph */}
        <meta property="og:site_name" content="CivilEngineer.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CivilEngineer.io | Geotechnical, PM, Design & Construction Services" />
        <meta
          property="og:description"
          content="Licensed California civil engineer providing geotechnical reports, design, construction engineering, and modern project management tools."
        />
        <meta property="og:url" content="https://civilengineer.io/" />
  
      </Helmet>


        <Header/>
          <main className="main-content">
          
            {/* Page content goes here */}
            <div style={{ ...styles.generalContainer }}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/howitworks" component={HowItWorks} />
                <Route exact path ="/contactus" component={ContactUs} />
              </Switch>
            </div>
          </main>
          <Footer/>
        </div>
    
    );
  }
}

export default App;
