import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      requiredErrorText: ''
    };
  }

  handleLogin(e){
    e.preventDefault();
    console.log('will login');
    window.fetch('/Account/Login', {
      method: 'POST'
    }).then(response => {
      console.log(response);
    })
  }

  validate(){
    let emailValid = false,
      passwordValid = false;
      if(this.state.email && this.state.email !== '') {
        emailValid = true;
        this.state.requiredErrorText = '';
      } else {
        this.state.requiredErrorText = 'This field is required';
      }
      if(this.state.password && this.state.password !== '') {
        passwordValid = true;
        this.state.requiredErrorText = null;
      } else {
        this.state.requiredErrorText = 'This field is required';
      }
  }

  handleChange(e, type) {
    e.stopPropagation();
    const value = e.target.value;
    const currentState = {};
    currentState[type] = value;
    this.state = currentState;
  }

  render(){
    return (
      <form class="auth-form" onSubmit={() => this.handleLogin()}>
        <div class="form-row">
          <TextField type="email" fullWidth={true} floatingLabelText="Your email" hintText="Your email" errorText={this.state.requiredErrorText} onChange={e => this.handleChange(e)} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <TextField type="password" fullWidth={true} floatingLabelText="Your password" hintText="Your password" errorText={this.state.requiredErrorText} onChange={e => this.handleChange(e)} onBlur={() => this.validate()} />
        </div>
        <div class="form-row">
          <RaisedButton label="Login" primary={true} onMouseDown={this.handleLogin} />
        </div>
      </form>
    );
  }
}
