import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainNav from './mainnav';
import Footer from './footer';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <MuiThemeProvider>
        <div class="container">
          <MainNav />
          <div class="body-content">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
};
