import React, { Component } from "react";

import "./Error.css";
import deadMac from "./dead-mac.png";

export default class Error extends Component {
  render() {
    return (
      <div className="Error">
        <img src={deadMac} />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
