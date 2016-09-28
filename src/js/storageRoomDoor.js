import React from 'react';

 export default class StorageRoomDoor extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return (
      <li><a href={this.props.params.door}>{this.props.title}</a></li>
    );
  }
};
