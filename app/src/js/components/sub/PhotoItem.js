import React from 'react';
import {
  Grid,
  Row, Col,
  Image,
  Button,
  Input
} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';

export default class PhotoItem extends React.Component {

  constructor() {
    super();
    this.state = {
      gallery_selected: true
    };
  }

  onClick() {
    this.setState({
      gallery_selected: !this.state.gallery_selected
    });
  }

  render() {

    const photo_set = this.props.photos.map((photo) => (
      {
        src: photo.src,
        width: 960,
        height: 960,
        aspectRatio: 1.5,
        lightboxImage: {
          src: photo.src,
          srcset: [
            photo.src + ' 1024w',
            photo.src + ' 800w',
            photo.src + ' 500w',
            photo.src + ' 320w',
          ],
          caption: photo.caption
        }
      }
    ));

    const photos = photo_set.map((point) => (
      <Row>
        <Col md={3}>
          <Image class="tour-pic" src={point.src} rounded />
        </Col>
        <Col md={9}>
          <Input type="textarea" label="Caption" value={point.lightboxImage.caption}/>
        </Col>
      </Row>
    ));

    const selectedComponent = this.state.gallery_selected ? <Gallery photos={photo_set} /> : (
      <Grid>
        {photos}
      </Grid> );


    return (
      <div>
        <Button bsStyle="primary" onClick={this.onClick.bind(this)}> Edit Photos </Button>
        {selectedComponent}
      </div>
    );
  }

}

