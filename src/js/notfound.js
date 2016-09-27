import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render(){
    return (
      <Layout>
        <h1>Oops, nothing here!</h1>
        <p>Maybe let\'s {<Link to="/">go home?</Link>}</p>
      </Layout>
    );
  }
};
