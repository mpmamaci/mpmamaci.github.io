import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {this.props.routes.map(route => (
            <Route key={route.path} path={route.path} exact component={route.component} />
          ))}
        </div>
      </HashRouter>
    );
  }
}

export default AppRouter;
