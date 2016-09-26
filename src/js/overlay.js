import React from 'react';
var classNames = require('classnames');
var Icon = require('../styles/loading.svg');

 export default class Overlay extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    console.log('overlay visible', this.props.visible);
    const classnames = classNames(
      'overlay',
      {
        'visible': this.props.visible
      }
    );
    return (
      <div className={classnames}>
        <Icon width={40} height={40}/>
      </div>
    );
  }
};
