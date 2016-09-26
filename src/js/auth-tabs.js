import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import LoginComponent from './loginComponent';
import RegisterComponent from './registerComponent';

const inkStyle = {
  backgroundColor: '#00acc1'
};
const tabStyle = {
  backgroundColor: '#80deea'
};

export default class AuthTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Login',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={inkStyle}
      >
        <Tab label="Login" value="Login" style={tabStyle}>
          <LoginComponent />
        </Tab>
        <Tab label="Register" value="Register" style={tabStyle}>
          <RegisterComponent />
        </Tab>
      </Tabs>
    );
  }
}