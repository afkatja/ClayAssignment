import React from 'react';
import config from './config';
var Icon = require('../styles/git-icon.svg');

class Footer extends React.Component {
  render(){
    return (
      <footer>
          <p>{`© 2016 ${config.authorName}`}</p>
          <a href={config.gitHubUrl}>
            <Icon width={20} height={20} />
          </a>
      </footer>
    );
  }
};
export default Footer;
