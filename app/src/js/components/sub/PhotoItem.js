import React from 'react';
import {
  Grid,
  Row, Col,
  Image,
  Button,
  Input
} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';

//TODO: GET RID OF THESE TWO, SHOULD BE ABLE TO POINT DIRECTLY AT SOURCE!!!
import Global from 'Global';
import AuthStore from 'AuthStore';

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

    const photo_set = this.props.photos.map((photo) => {
      const src = Global.backend_url + AuthStore.getUid() + "/" + photo.photo_path_s3;
      return ({
        src: src,
        width: 960,
        height: 960,
        aspectRatio: 1.5,
        lightboxImage: {
          src: src,
          srcset: [
            src + ' 1024w',
            src + ' 800w',
            src + ' 500w',
            src + ' 320w',
          ],
          caption: photo.caption
        }
      });
    });

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

