import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import config from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
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
          title={<h1 style={config.styles.title}>{this.title}</h1>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={config.styles.header}
          children={
            <Link to="/addLock" style={config.styles.headerLink}><MaterialIcon color="#fff" class="link-icon" /> Add doors</Link>
          }
        />
        </MuiThemeProvider>
      </header>
    );
  }
}

export default MainNav;
