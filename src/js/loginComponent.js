import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      textFieldValue: ''
    };
  }

  handleLogin(){
    console.log('will submit');
  }

  validate(e) {
    this.state = {
      textFieldValue: e.target.value
    };
  }

  render(){
    return (
      <form class="body-content" onSubmit={this.handleLogin}>
        <div class="form-row">
          <TextField type="email" floatingLabelText="Your email" hintText="Your email" errorText="This field is required" onChange={this.validate} />
          <TextField type="password" floatingLabelText="Your password" hintText="Your password" errorText="This field is required" onChange={this.validate} />
          <RaisedButton label="Login" primary={true} />
        </div>
      </form>
    );
  }
}

export default LoginComponent;
