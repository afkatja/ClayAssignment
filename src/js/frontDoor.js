import React from 'react';
import Link from 'react-router';
import config from './config';
import Layout from './layout';
import Overlay from './overlay';
import AuthDialog from './authDialog';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import LockOpen from 'material-ui/svg-icons/action/lock-open';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';

 export default class FrontDoor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      doorIsClosed: true,
      userAuthorized: true,
      loading: false,
      showSuccess: false,
      successMessage: ''
    };
  }

  openDoor(){
    this.setState({
      doorIsClosed: false,
      loading: false,
      showSuccess: true,
      successMessage: 'The Front door is open!'
    });
  }

  closeDoor(){
    this.setState({
      doorIsClosed: true,
      loading: false,
      showSuccess: true,
      successMessage: 'The front door is now closed!'
    });
  }

  displayAuthDialog(){
    this.setState({
      authRequired: true,
      loading: false
    });
  }

  handleCloseMessage() {
    this.setState({
      showSuccess: false,
    });
  };

  toggleOpen(e){
    e.preventDefault();
    this.setState({loading: true});
    if(this.state.doorIsClosed) {
      if(this.state.userAuthorized) {
        setTimeout(() => this.openDoor(), 1000);
      } else {
        this.displayAuthDialog();
      }
    } else {
      if(this.state.userAuthorized) {
        setTimeout(() => this.closeDoor(), 1000);
      } else {
        this.displayAuthDialog();
      }
    }
  }

  render(){
    return (
      <Layout>
        <form class="auth-form" id="front-door-form" onSubmit={e => this.toggleOpen(e)}>
          <Card>
            <CardHeader
              title="Front Door"
            />
            {this.state.doorIsClosed &&
              <div>
                <CardTitle title="Click to open the door" subtitle="Only for authorized users" />
                <CardActions>
                  <div class="form-row">
                    <RaisedButton type="submit" label="Open front door" primary={true} labelPosition="after" icon={<LockOpen />}/>
                  </div>
                </CardActions>
              </div>
            }
            {!this.state.doorIsClosed &&
              <div>
              <CardTitle title="Click to close the door" subtitle="Only for authorized users" />
              <CardActions>
                <div class="form-row">
                  <RaisedButton type="submit" label="Close front door" primary={true} labelPosition="after" icon={<LockOutline />} />
                </div>
              </CardActions>
              </div>
            }
          </Card>
        </form>
        {this.state.loading && <Overlay />}
        {this.state.authRequired && <AuthDialog title="Sorry, you are not authorized to open this door" text="Please ask the Front Door Admin to open it for you" open={true} />}
        <Snackbar
          open={this.state.showSuccess}
          message={this.state.successMessage}
          autoHideDuration={10000}
          bodyStyle={config.message}
          style={config.message}
        />
      </Layout>
    );
  }
};
