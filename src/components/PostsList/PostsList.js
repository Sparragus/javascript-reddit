import React, { Component } from "react";

import "./PostsList.css";
import PostsListItem from "../PostsListItem";

export default class PostsList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <ul className="PostsList list-unstyled">
        {posts.map(post => (
          <PostsListItem key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}
