import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainNav from './mainnav';
import AuthTabs from './auth-tabs';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div class="container">
        <MainNav />
        <div class="body-content">
          <AuthTabs />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
);
