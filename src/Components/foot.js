import React, { Component } from "react";
import Contact from "../Action/Contact";

export default class Foot extends Component {
  render() {
    return (
      <div className="App-footer">
        <p className="citation">Votre coin, pour les bons affaires...</p>
        <Contact />
      </div>
    );
  }
}
