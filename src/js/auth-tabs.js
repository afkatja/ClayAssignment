import React from 'react';
import Layout from './layout';
import config from './config';
import {Tabs, Tab} from 'material-ui/Tabs';
import LoginComponent from './loginComponent';
import RegisterComponent from './registerComponent';

const inkStyle = {
  backgroundColor: config.colors.accentColor
};
const tabStyle = {
  backgroundColor: config.colors.bgColor
};

export default class AuthTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Login',
    };
    this.history = this.props.history;
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}
