import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import UICard from "../UICard";

export default class Sidebar extends Component {
  render() {
    return (
      <UICard className="Sidebar">
        <nav>
          <ul className="list-unstyled">
            <li>
              <NavLink to="/r/javascript">#JavaScript</NavLink>
            </li>
            <li>
              <NavLink to="/r/Frontend">#Frontend</NavLink>
            </li>
            <li>
              <NavLink to="/r/reactjs">#React</NavLink>
            </li>
            <li>
              <NavLink to="/r/LearnJavascript">#LearnJavascript</NavLink>
            </li>
            <li>
              <NavLink to="/r/webdev">#Web Dev</NavLink>
            </li>
            <li>
              <NavLink to="/r/web_design">#Web Design</NavLink>
            </li>
          </ul>
        </nav>
      </UICard>
    );
  }
}
