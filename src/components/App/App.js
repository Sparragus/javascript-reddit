import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../../components/Layout";
import Home from "../../pages/Home";
import Subreddit from "../../pages/Subreddit";
import Post from "../../pages/Post";
import NotFound from "../../pages/NotFound";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/r/:subredditId/comments/:postId(.*)"
            component={Post}
          />
          <Route exact path="/r/:subredditId" component={Subreddit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}
