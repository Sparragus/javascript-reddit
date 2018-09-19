import React, { Component } from "react";

import "./UICard.css";

export default class UICard extends Component {
  render() {
    return (
      <div className={`UICard ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
