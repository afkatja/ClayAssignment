import React from 'react';
import MainNav from './mainnav';
import Footer from './footer';

export default class Layout extends React.Component {
  content
  render(){
    const { content } = this.props.children;
    console.log(this.props.children);
    return(
      <div class="container">
        <MainNav />
        <div class="body-content">
          {content}
        </div>
        <Footer />
      </div>
    );
  }
};
