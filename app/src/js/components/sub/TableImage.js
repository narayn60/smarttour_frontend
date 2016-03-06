import React from 'react';
import { Image } from 'react-bootstrap';

export default class TableImage extends React.Component {
  render() {
    return (
      <div class="thumbnail">
        <Image src={this.props.image_url} rounded />
      </div>
    );
  }
  
}
