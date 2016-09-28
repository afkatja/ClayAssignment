import React from 'react';
import Layout from './layout';
import config from './config';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

 export default class Doors extends React.Component {

  constructor (props) {
    super(props);
  }

  render(){
    return (
      <Layout>
        <Paper zDepth={1}>
          <List>
            <Subheader>List of available doors</Subheader>
            <ListItem children={
              <Link key={1} to="front-door" style={config.styles.menuLink}>Front Door</Link>
            }></ListItem>
            <ListItem children={
              <Link key={2} to="storage-room" style={config.styles.menuLink}>Storage Room Door</Link>
            }></ListItem>
          </List>
        </Paper>
      </Layout>
    );
  }
};
