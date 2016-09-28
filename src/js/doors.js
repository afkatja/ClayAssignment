import React, { PropTypes } from 'react';
import Layout from './layout';

 export default class Doors extends React.Component {

  constructor (props) {
    super(props);
  }

  render(){
    return (
      <Layout>
        <p>Doors: {this.props.children}</p>
        <ul class="doors">
          {
            this.props.children ? this.props.children.map((door, i) => {
              <Door key={i} url={door.url} title={door.title} />
            }) : null
          }
        </ul>
      </Layout>
    );
  }
};
