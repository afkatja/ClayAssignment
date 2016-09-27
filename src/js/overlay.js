import React from 'react';
var Icon = require('../styles/loading.svg');

 export default class Overlay extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return (
      <div className='overlay'>
        <Icon width={40} height={40}/>
      </div>
    );
  }
};
