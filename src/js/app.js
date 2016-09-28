import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, browserHistory, Router, Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout';
import AuthTabs from './auth-tabs';
import AddLock from './addlock';
import Doors from './doors';
import StorageRoomDoor from './storageRoomDoor';
import FrontDoor from './frontDoor';
import NotFound from './notfound';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={AuthTabs} />
    <Route path='addLock' component={AddLock} />
    <Route path='doors' component={Doors} />
    <Route path='front-door' component={FrontDoor} />
    <Route path='storage-room' component={StorageRoomDoor} />
    <Route path='*' component={NotFound} />
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
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);
