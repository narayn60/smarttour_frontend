import React from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class TableImage extends React.Component {
  render() {
    return (
        <Thumbnail src={this.props.image_url} alt="242*200">
        <h3> Hello there </h3>
        </Thumbnail>
    );
  }
  
}
