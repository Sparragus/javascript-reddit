import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostEmptyState from "./PostEmptyState";
import PageLoader from "../../components/PageLoader";
import Error from "../../components/Error";
import CommentsList from "../../components/CommentsList";
import { getPost } from "../../lib/api";

export default class Post extends Component {
  state = {
    data: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadPost();
  }

  componentDidUpdate(prevProps) {
    this.loadPostIfNeeded(prevProps);
  }

  getSubredditId() {
    return this.props.match.params.subredditId;
  }

  getPostId() {
    return this.props.postId || this.props.match.params.postId;
  }

  loadPostIfNeeded = prevProps => {
    if (
      this.getPostId() !== (prevProps.postId || prevProps.match.params.postId)
    ) {
      this.loadPost();
    }
  };

  loadPost = () => {
    const subredditId = this.getSubredditId();
    const postId = this.getPostId();
    this.setState({
      loading: true,
      error: null
    });

    getPost(subredditId, postId)
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <PageLoader />;
    }

    if (error) {
      return <Error error={error} />;
    }

    if (data.comments.length === 0) {
      return <PostEmptyState />;
    }

    return (
      <div>
        <h1>Post</h1>
        <CommentsList comments={data.comments} />
      </div>
    );
  }
}
