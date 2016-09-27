import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout';
import AuthTabs from './auth-tabs';
import Home from './home';
import AddLock from './addlock';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={AuthTabs} />
    <Route path='addLock' component={AddLock} />
  </Route>
);

class App extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <Layout />
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
