import React, { Component } from "react";

import Subreddit from "../Subreddit";

export default class Home extends Component {
  render() {
    return <Subreddit subredditId={"javascript"} />;
  }
}
