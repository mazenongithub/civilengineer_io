import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main className="main-content">
          {/* Page content goes here */}
          <section className="hero">
            <h1>Engineering Software for the Built World</h1>
            <p>
              Geotechnical, project management, engineering design, and
              construction management applications — all in one platform.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
