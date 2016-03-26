import React from 'react';
import {
  Grid,
  Row, Col,
  Image,
  Button,
  Input
} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Global from 'Global';
import AuthStore from 'AuthStore';
import t from 'tcomb-form';
import PhotoActions from 'PhotoActions';

const FormSchema = t.struct({
  caption: t.String
});

export default class PhotoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery_selected: true,
      photos: props.photos
    };
  }

  componentWillReceiveProps() {
    this.setState({
      photos: this.props.photos
    });
  }

  __onClick() {
    this.setState({
      gallery_selected: !this.state.gallery_selected
    });
  }

  __onSubmit(i, event) {
    event.preventDefault();
    const answer = confirm("Update data");
    if (answer) {
      const value = this.refs["form" + i].getValue();
      const photo_info = this.state.photos[i];
      PhotoActions.updateCaption(photo_info.location, photo_info.id, value.caption);
    } else {
      this.setState({
        photos: this.props.photos
      });
    }
  }

  __onDelete(i) {
    const answer = confirm("Delete photo");
    if (answer) {
      const photo_info = this.state.photos[i];
      PhotoActions.deletePhoto(this.props.location_info.id, photo_info.id);
    }
  }

  render() {

    if ( this.props.photos.length === 0 ) {
      return (
        <div>
          No Photos
        </div>
      )
    }

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

    const formLayout = (locals) => {
      return (
        <div>
          <Col md={7}>
            <div>{locals.inputs.caption}</div>
          </Col>
          <Col md={1}>
            <Button type="submit" bsStyle="primary">Submit</Button>
          </Col>
        </div>
      );
    };

    const options = {
      template: formLayout
    };

    const buttonSwitchText = this.state.gallery_selected ? "Edit Photos" : "View Gallery";


    const photos = this.state.photos.map((photo, i) => {
      const ref = "form" + i;
      const src = Global.backend_url + AuthStore.getUid() + "/" + photo.photo_path_s3;
      return (
        <Row>
          <Col md={3}>
            <Image class="tour-pic" src={src} rounded />
          </Col>
          <form onSubmit={this.__onSubmit.bind(this, i)}>
            <t.form.Form class="edit-form" ref={ref} type={FormSchema} value={photo} options={options}/>
          </form>
          <Col md={1}>
            <Button onClick={() => this.__onDelete(i)} bsStyle="primary">Delete</Button>
          </Col>
        </Row>
      );
    }
    );

    const selectedComponent = this.state.gallery_selected ? <Gallery photos={photo_set} /> : (
      <Grid>
        {photos}
      </Grid>
    );

    return (
      <div>
        <Button bsStyle="primary" onClick={this.__onClick.bind(this)}>{buttonSwitchText}</Button>
        {selectedComponent}
      </div>
    );
  }

}
