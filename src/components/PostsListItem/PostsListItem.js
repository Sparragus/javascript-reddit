import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./PostsListItem.css";
import UICard from "../UICard";

export default class PostsListItem extends Component {
  render() {
    const { post } = this.props;
    const { title, permalink } = post;

    return (
      <li className="PostsListItem">
        <Link to={permalink}>
          <UICard>
            <p>
              <small>
                posted by /u/
                {post.author}
              </small>
            </p>

            <h3>{title}</h3>

            <div className="row">
              <div className="col-3">❤️ {post.ups}</div>
              <div className="col-3">🗣 {post.num_comments}</div>
            </div>
          </UICard>
        </Link>
      </li>
    );
  }
}
