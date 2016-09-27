import React, { PropTypes } from 'react';
import Layout from './layout';

 export default class Doors extends React.Component {
  static propTypes = {
    doors: PropTypes.array
  };

  constructor (props) {
    super(props);
  }
  render(){
    return (
      <Layout>
        <ul class="doors">
          {
            this.props.children.map((door, i) => {
              <Door key={i} url={door.url} title={door.title} />
            })
          }
        </ul>
      </Layout>
    );
  }
};
