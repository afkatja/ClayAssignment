import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      errorText: '',
      emailValid: false,
      passwordValid: false
    };
  }

  handleLogin(e){
    e.preventDefault();
    const form = document.getElementById('login-form');
    window.fetch('/Account/Login', {
      method: 'POST',
      body: JSON.stringify({
        email: form.elements.email.value,
        password: form.elements.password.value
      })
    }).then(response => {
      if(response.status == 200) {
        location.href = '/Manage/AddLock';
      }
    })
  }

  validate(){
      if(this.state.email && this.state.email !== '') {
        this.state.emailValid = true;
        this.state.requiredErrorText = '';
      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
        this.errorText = 'Invalid email address';
        this.state.emailValid = false;
      } else {
        this.state.errorText = 'This field is required';
        this.state.emailValid = false;
      }
      if(this.state.password && this.state.password !== '') {
        this.state.passwordValid = true;
        this.state.errorText = null;
      } else {
        this.state.errorText = 'This field is required';
        this.state.passwordValid = false;
      }
  }

  handleChange(e, type) {
    e.stopPropagation();
    const value = e.target.value;
    this.state[type] = value;
  }

  render(){
    return (
      <form id="login-form" class="auth-form" onSubmit={e => this.handleLogin(e)}>
        <div class="form-row">
          <TextField type="email" name="email" fullWidth={true} floatingLabelText="Your email" hintText="Your email" errorText={this.state.errorText} onChange={e => this.handleChange(e)} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <TextField type="password" name="password" fullWidth={true} floatingLabelText="Your password" hintText="Your password" errorText={this.state.errorText} onChange={e => this.handleChange(e)} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <RaisedButton label="Login" primary={true} onMouseDown={e => this.handleLogin(e)} />
        </div>
      </form>
    );
  }
}
