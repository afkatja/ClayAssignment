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
    this.state = {
      doors: []
    };
  }
  componentWillMount(){
    this.getDoors();
  }

  getDoors(){
    let temp = this.state.doors;
    if(localStorage.getItem('door1')) {
      temp.push(localStorage.getItem('door1'));
      temp.push(localStorage.getItem('door2'));
    }
    this.setState({
      doors: temp
    });
  }

  render(){
    let doors = [];
    if(this.state.doors.length) {
      this.state.doors.forEach((door, i) => {
        let doorUrl = door.split(' ').join('-');
        doors.push(<ListItem key={i} children={
          <Link key={i} to={doorUrl} style={config.styles.menuLink}>{door}</Link>
        }></ListItem>);
      });
    } else {
      doors.push(<ListItem key={1} children={
        <Link key={2} to="addLock" style={config.styles.menuLink}>Add doors to the system first</Link>
      }></ListItem>);
    }
    return (
      <Layout>
        <Paper zDepth={1}>
          <List>
            <Subheader>List of available doors</Subheader>
            {doors}
          </List>
        </Paper>
      </Layout>
    );
  }
};
