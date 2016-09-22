import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginComponent from './loginComponent';

class MainNav extends React.Component {
  constructor(){
    super();
    this.title = "TheCloudLock";
    this.links = [
      {page: "Login", url: "/Account/Login"}, 
      {page: "Register", url: "/Account/Register"}
    ];
  }
  render(){
    return(
      <div class="container">
        <header class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">{this.title}</a>
        </header>
        <nav class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            {
              this.links.map((link)=> {
              return <li key={link.page}><a href={link.url}>{link.page}</a></li>
            })
          }
          </ul>
        </nav>
        <MuiThemeProvider>
          <LoginComponent />
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <MainNav />,
  document.body.querySelector('.navbar')
);

export default MainNav;
