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
      gallery_selected: true,
      photo_set: [
        {
          src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
          width: 960,
          height: 960,
          aspectRatio: 1.5,
          lightboxImage:{
            src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
            srcset: [
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 1024w',
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 800w',
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 500w',
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 320w',
            ],
            caption: "Toronto"
          }
        },
        {
          src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
          width: 960,
          height: 960,
          aspectRatio: 1.5,
          lightboxImage:{
            src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
            srcset: [
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 1024w',
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 800w',
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 500w',
              'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg 320w',
            ]
          }
        },
      ]
    };
  }

  onClick() {
    this.setState({
      gallery_selected: !this.state.gallery_selected
    });
  }

  render() {

    const photos = this.state.photo_set.map((point) => (
      <Row>
        <Col md={3}>
          <Image class="tour-pic" src={point.src} rounded />
        </Col>
        <Col md={9}>
          <Input type="textarea" label="Caption" value={point.lightboxImage.caption}/>
        </Col>
      </Row>
    ));

    const selectedComponent = this.state.gallery_selected ? <Gallery photos={this.state.photo_set} /> : (
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

