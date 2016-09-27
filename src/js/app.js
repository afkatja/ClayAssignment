import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout';
import AuthTabs from './auth-tabs';
import AddLock from './addlock';
import Doors from './doors';
import Door from './door';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={AuthTabs} />
    <Route path='addLock' component={AddLock} />
    <Route path='doors' component={Doors} components={{door: Door}}>
      <Route path=':doorId' component={Door} />
    </Route>
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
