import React, { Component } from "react";

import "./PageLoader.css";
import animation from "./animation.gif";

export default class PageLoader extends Component {
  render() {
    return (
      <div className="PageLoader">
        <img src={animation} />
      </div>
    );
  }
}
