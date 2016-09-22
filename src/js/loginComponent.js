import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LoginComponent extends React.Component {
  constructor(){
    super();

  }
  render(){
    return (
      <div class="form-row">
        <input type="email" defaultValue="Your email" />
        <input type="password" defaultValue="***" />
        <RaisedButton label="Login" />
      </div>
    );
  }
}

export default LoginComponent;
