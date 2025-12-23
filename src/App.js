import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MyStylesheet } from "./components/styles";
import Landing from "./components/landing";
import About from "./components/about";
import { Link } from 'react-router-dom';
import Footer from "./components/footer";
import HowItWorks from "./components/howitworks";
import ContactUs from "./components/contactus";
class App extends Component {

  render() {
    const styles = MyStylesheet();

    return (
     
        <div className="app">
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
