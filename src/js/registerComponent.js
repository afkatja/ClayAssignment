import React from 'react';
import ReactDOM from 'react-dom';
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
      this.state.loading = true;
      (() => this.renderOverlay(this.state.loading));
      window.fetch('/Account/Register', {
        method: 'POST',
        body: JSON.stringify({
          email: form.elements.email.value,
          password: form.elements.password.value
        })
      }).then(response => {
        console.log(response);
      });
    }
  }

  validate(){
    if(this.state.email && this.state.email !== '') {
      this.state.emailValid = true;
      this.state.errorText = '';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      this.errorText = 'Invalid email address';
      this.state.emailValid = false;
    } else {
      this.state.errorText = 'This field is required';
      this.state.emailValid = false;
    }
    if(this.state.password && this.state.password !== '') {
      this.state.passwordValid = true;
      this.state.errorText = '';
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
          <RaisedButton label="Register" primary={true} onMouseDown={e => this.handleSubmit(e)} />
        </div>
        {this.renderOverlay(this.state.loading)}
      </form>
    );
  }
  renderOverlay(state){
    let overlay = React.cloneElement(<Overlay />, {
      visible: state
    });
    console.log('will clone overlay', overlay);
    return overlay;
  }
}
