import React from 'react';
import Layout from './layout';

 export default class Doors extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return (
      <Layout>
        <ul class="doors">
          {this.props.door}
        </ul>
      </Layout>
    );
  }
};
