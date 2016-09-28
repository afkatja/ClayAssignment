import React from 'react';
import { Link } from 'react-router';
import Layout from './layout';

 export default class StorageRoomDoor extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return (
      <Layout>
        <p>Storage Room Door</p>
      </Layout>
    );
  }
};
