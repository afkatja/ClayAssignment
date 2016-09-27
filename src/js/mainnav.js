import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import config from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

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
          title={<h1 style={config.styles.title}><Link to="/" style={config.styles.titleLink}>{this.title}</Link></h1>}
          iconElementLeft={
            <IconMenu iconButtonElement={
                <IconButton style={config.styles.iconLink}><MenuIcon color="#fff" /></IconButton>
              }
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}>
              <MenuItem children={<Link to="/doors" style={config.styles.menuLink}>Doors</Link>} />
              <MenuItem children={<Link to="/addLock" style={config.styles.menuLink}>Add doors</Link>} />
              <MenuItem children={<Link to="/" style={config.styles.menuLink}>Home</Link>} />
            </IconMenu>
          }
          style={config.styles.header}
          children={
            <ul>
              <li>
                <Link to="/addLock" style={config.styles.headerLink}><MaterialIcon color="#fff" class="link-icon" /> Add doors</Link>
              </li>
              <li>
                <Link to="/doors" style={config.styles.headerLink}><MaterialIcon color="#fff" class="link-icon" /> Doors</Link>
              </li>
            </ul>
          }
        />
        </MuiThemeProvider>
      </header>
    );
  }
}

export default MainNav;
