import React from 'react';
import { Link } from 'react-router';

 export default class Door extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return (
      <li><Link to={this.params.name}>{this.props.title}</Link></li>
    );
  }
};
