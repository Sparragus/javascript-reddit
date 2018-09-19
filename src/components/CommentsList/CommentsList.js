import React, { Component } from "react";

import "./CommentsList.css";
import CommentsListItem from "../CommentsListItem";

export default class CommentsList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <ul className="CommentsList list-unstyled">
        {comments.map(comment => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
      </ul>
    );
  }
}
