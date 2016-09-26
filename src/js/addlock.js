import React from 'react';
import ReactDOM from 'react-dom';
import config from './config';
var Icon = require('../styles/git-icon.svg');

export default class AddLock extends React.Component {
  constructor() {
    super();
    this.state = {
      doors: []
    };
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('add lock');
  }
  handleChange(e, type) {
    this.state.doors.push(e.target.value);
  }
  render(){
    return (
      <form class="auth-form" id="add-lock-form" onSubmit={e => this.handleSubmit(e)}>
        <div class="form-row">
          <TextField type="text" name="doorname" floatingLabelText="Add door to system" fullWidth={true} hintText="Add door to system" errorText={this.state.errorText} onChange={e => this.handleChange(e, 'door')} />
        </div>
        <div class="form-row">
          <RaisedButton label="Add door" primary={true} onMouseDown={e => this.handleSubmit(e)} />
        </div>
      </form>
    );
  }
};
