import React from 'react';
import { hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  handleLogin(e){
    e.preventDefault();
    const form = document.getElementById('login-form');
    if(this.state.emailValid && this.state.passwordValid) {
      this.setState({loading: true});
      window.fetch('/Account/Login', {
        method: 'POST',
        headers: {
          credentials: 'include'
        },
        body: JSON.stringify({
          email: form.elements.email.value,
          password: form.elements.password.value
        })
      }).then(response => {
        if(response.status == 200) {
          localStorage.setItem('userLoggedIn', true);
          localStorage.setItem('userName', form.elements.email.value);

          hashHistory.push('addLock');
        }
      });
    }
  }

  validate(){
    let emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
    if(this.state.email !== '' && emailValid) {
      this.setState({
        emailValid: true,
        emailErrorText: ''
      });
    } else if(!emailValid) {
      this.setState({
        emailErrorText: 'Invalid email address',
        emailValid: false
      });
    } else {
      this.setState({
        emailErrorText: 'This field is required',
        emailValid: false
      });
    }

    if(this.state.password !== '') {
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
    if(type=='email') {
      this.setState({
        email: value
      });
    } else if(type=='password') {
      this.setState({
        password: value
      });
    }
  }

  render(){
    return (
      <form id="login-form" class="auth-form" onSubmit={e => this.handleLogin(e)}>
        <div class="form-row">
          <TextField type="email" name="email" fullWidth={true} floatingLabelText="Your email" hintText="Your email" errorText={this.state.emailErrorText} onChange={e => this.handleChange(e, 'email')} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <TextField type="password" name="password" fullWidth={true} floatingLabelText="Your password" hintText="Your password" errorText={this.state.errorText} onChange={e => this.handleChange(e, 'password')} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <RaisedButton type="submit" label="Login" primary={true} onMouseDown={e => this.handleLogin(e)} />
        </div>
      </form>
    );
  }
}
