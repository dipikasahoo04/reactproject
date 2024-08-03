import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" component={App} />
      {/* Add other routes here */}
    </Switch>
  </Router>,
  document.getElementById('root')
);
