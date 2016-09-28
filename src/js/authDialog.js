import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import config from './config';
import { Link } from 'react-router';

 export default class AuthDialog extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false || this.props.open,
    };
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render(){
    return (
      <Dialog
          title={this.props.title}
          actions={
            <RaisedButton
              label="OK"
              primary={true}
              onTouchTap={() => this.handleClose()}
            />
          }
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.handleClose()}
        >
          {this.props.text}
        </Dialog>
    );
  }
};
