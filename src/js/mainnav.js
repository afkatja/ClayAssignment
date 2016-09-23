import React from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class MainNav extends React.Component {
  constructor(){
    super();
    this.title = config.siteName;
    this.links = [
      {page: "Login", url: "/Account/Login"},
      {page: "Register", url: "/Account/Register"}
    ];
  }
  render(){
    return(
      <header class="navbar-header">
      <MuiThemeProvider>
        <AppBar
          title={this.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={config.styles.header}
          className="mainnav"
        />
        </MuiThemeProvider>
        <nav class="navbar">
          <ul class="nav navbar-nav">
            {
              this.links.map((link)=> {
              return <li key={link.page}><a href={link.url}>{link.page}</a></li>
            })
          }
          </ul>
        </nav>
      </header>
    );
  }
}

ReactDOM.render(
  <MainNav />,
  document.body.querySelector('.navbar')
);

export default MainNav;
