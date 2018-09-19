import React, { Component } from "react";

import "./Layout.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />

        <main className="container">
          <div className="row">
            <div className="col-4">
              <Sidebar />
            </div>

            <div className="col-8">{this.props.children}</div>
          </div>
        </main>
      </div>
    );
  }
}
