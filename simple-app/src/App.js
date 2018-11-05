import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './layouts/Home';
import GiphyApp from './layouts/Gif';

import './App.css';

class SimpleAppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home } />
          {/* <Route exact path="/spotify" component={ Spotify } /> */}
          <Route exact path="/giph" component={ GiphyApp } />
        </div>
    </Router>
    );
  }
}

export default SimpleAppRouter;
