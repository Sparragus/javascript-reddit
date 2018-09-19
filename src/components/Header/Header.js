import React, { Component } from "react";

import "./Header.css";
import Logo from "../Logo";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <Logo />
        </div>
      </div>
    );
  }
}
