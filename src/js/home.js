import React from 'react';
import Layout from './layout';
import AuthTabs from './auth-tabs';

export default class Home extends React.Component {
  render(){
    return(
      <Layout>
      <AuthTabs />
      </Layout>
    );
  }
};
