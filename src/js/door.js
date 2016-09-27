import React from 'react';

 export default class Door extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return (
      <li><a href={this.props.params.doorId}>{this.props.title}</a></li>
    );
  }
};
