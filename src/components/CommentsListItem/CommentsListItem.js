import React, { Component } from "react";

import "./CommentsListItem.css";
import UICard from "../UICard";

export default class CommentsListItem extends Component {
  render() {
    const { comment } = this.props;
    const { author, created, body, ups, downs } = comment;

    const createdAtDate = new Date(created * 1000);

    return (
      <li
        className={`CommentsListItem ${downs > ups &&
          "CommentsListItem--faded"}`}
      >
        <UICard>
          <p>
            <small>
              posted by /u/
              {author}
            </small>
          </p>
          <p>{body}</p>

          <div className="row mb-2">
            <div className="col-3">❤️ {ups}</div>
          </div>

          <p className="mb-0">
            <small>
              {createdAtDate.toLocaleDateString()} -{" "}
              {createdAtDate.toLocaleTimeString()}
            </small>
          </p>
        </UICard>
      </li>
    );
  }
}
