import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Overlay from './overlay';

export default class RegisterComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorText: '',
      emailValid: false,
      passwordValid: false,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const form = document.getElementById('register-form');
    if(this.state.emailValid && this.state.passwordValid) {
      this.setState({loading: true});
      window.fetch('/Account/Register', {
        method: 'POST',
        body: JSON.stringify({
          email: form.elements.email.value,
          password: form.elements.password.value
        })
      }).then(response => {
        if(response.status == 200) {
          hashHistory.push('addLock');
        }
      });
    }
  }

  validate(){
    if(this.state.email !== '') {
      this.setState({
        emailValid: true,
        errorText: ''
      });
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      this.setState({
        errorText: 'Invalid email address',
        emailValid: false
      });
    } else {
      this.setState({
        errorText: 'This field is required',
        emailValid: false
      });
    }
    if(this.state.password && this.state.password !== '') {
      this.setState({
        passwordValid: true,
        errorText: ''
      });
    } else {
      this.setState({
        errorText: 'This field is required',
        passwordValid: false
      });
    }
  }

  handleChange(e, type) {
    e.stopPropagation();
    const value = e.target.value;
    this.state[type] = value;
  }

  render(){
    return (
      <form id="register-form" class="auth-form" onSubmit={e => this.handleSubmit(e)}>
        <div class="form-row">
          <TextField type="email" name="email" floatingLabelText="Your email" hintText="Your email" errorText={this.state.errorText} fullWidth={true} onChange={e => this.handleChange(e, 'email')} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <TextField type="password" name="password" floatingLabelText="Your password" hintText="Your password" fullWidth={true} errorText={this.state.errorText} onChange={e => this.handleChange(e, 'password')} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <TextField type="password" name="repeat-password" floatingLabelText="Repeat your password" fullWidth={true} hintText="Repeat your password" errorText={this.state.errorText} onChange={e => this.handleChange(e, 'password')} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <RaisedButton type="submit" label="Register" primary={true} onMouseDown={e => this.handleSubmit(e)} />
        </div>
        {this.state.loading && <Overlay />}
      </form>
    );
  }
}
