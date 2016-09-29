import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import Layout from './layout';
import config from './config';
var Icon = require('../styles/git-icon.svg');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthDialog from './authDialog';

export default class AddLock extends React.Component {
  constructor() {
    super();
    this.state = {
      doors: []
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const form = document.getElementById('add-lock-form');
    const formData = new FormData(form);
    window.fetch('/Manage/AddLock', {
      method: 'POST',
      headers: {
        credentials: 'include'
      },
      body: JSON.stringify(formData)
    }).then(response => {
      if(response.status == 200){
        localStorage.setItem('door1', form.elements.doorname1.value);
        localStorage.setItem('door2', form.elements.doorname2.value);
        hashHistory.push('doors');
      }
    });
  }

  handleChange(e) {
    this.state.doors.push(e.target.value);
    let output = document.body.querySelector('output');
    output.value = this.state.doors.join(', ');
  }

  render(){
    return (
      <Layout>
        <h2>Add doors to the system</h2>
        <form class="auth-form" id="add-lock-form" onSubmit={e => this.handleSubmit(e)}>
          <div class="form-row">
            <TextField type="text" id="doorname1" name="doorname1" floatingLabelText="Add door to system" fullWidth={true} hintText="Add door to system" errorText={this.state.errorText} onBlur={e => this.handleChange(e)} />
          </div>
          <div class="form-row">
            <TextField type="text" id="doorname2" name="doorname2" floatingLabelText="Add another door to system" fullWidth={true} hintText="Add another door to system" errorText={this.state.errorText} onBlur={e => this.handleChange(e)} />
          </div>
          <div class="form-row">
            <RaisedButton type="submit" label="Add doors" primary={true} />
          </div>
        </form>
        <output for="doorname1 doorname2" form="add-lock-form" name="doors" />
      </Layout>
    );
  }
};
