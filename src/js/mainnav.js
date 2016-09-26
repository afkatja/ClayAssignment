import React from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class MainNav extends React.Component {
  constructor(){
    super();
    this.title = config.siteName;
  }
  render(){
    return(
      <header class="navbar-header">
      <MuiThemeProvider>
        <AppBar
          title={this.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={config.styles.header}
        />
        </MuiThemeProvider>
      </header>
    );
  }
}

export default MainNav;
