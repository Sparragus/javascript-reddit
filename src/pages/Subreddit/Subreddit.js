import React, { Component } from "react";
import { Link } from "react-router-dom";

import SubredditEmptyState from "./SubredditEmptyState";
import PageLoader from "../../components/PageLoader";
import Error from "../../components/Error";
import PostsList from "../../components/PostsList";
import { getSubreddit } from "../../lib/api";

export default class Subreddit extends Component {
  state = {
    data: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadSubreddit();
  }

  componentDidUpdate(prevProps) {
    this.loadSubredditIfNeeded(prevProps);
  }

  getSubredditId() {
    return this.props.subredditId || this.props.match.params.subredditId;
  }

  loadSubredditIfNeeded = prevProps => {
    if (
      this.getSubredditId() !==
      (prevProps.subredditId || prevProps.match.params.subredditId)
    ) {
      this.loadSubreddit();
    }
  };

  loadSubreddit = () => {
    const subredditId = this.getSubredditId();
    this.setState({
      loading: true,
      error: null
    });

    getSubreddit(subredditId)
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

    const posts = data.posts;
    if (posts.length === 0) {
      return <SubredditEmptyState />;
    }

    return (
      <div>
        <h1>
          /r/
          {this.getSubredditId()}
        </h1>
        <PostsList posts={posts} />
      </div>
    );
  }
}
