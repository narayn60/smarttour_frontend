import React from 'react';
import {
  Grid,
  Row, Col,
  Image,
  Button,
  Input
} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import t from 'tcomb-form';
import PhotoActions from 'PhotoActions';
import DropZone from './DropZone';

const FormSchema = t.struct({
  description: t.String
});

export default class PhotoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery_selected: true,
      photos: props.photos,
      showDropzone: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      photos: this.props.photos
    });
  }

  __onSubmit(i, event) {
    event.preventDefault();
    const answer = confirm("Update data");
    if (answer) {
      const value = this.refs["form" + i].getValue();
      const photo_info = this.state.photos[i];
      PhotoActions.updateCaption(photo_info.location, photo_info.id, value.description);
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
          <h4>Photos</h4>
          <hr/>
        <DropZone location_id={this.props.location_info.id} upload_type='Photo'/>
          No Photos
        </div>
      );
    }

    const photo_set = this.props.photos.map((photo) => {
      const src = photo.src_url;
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
          caption: photo.description
        }
      });
    });

    const formLayout = (locals) => {
      return (
        <div>
          <Col md={7}>
            <div>{locals.inputs.description}</div>
          </Col>
          <Col md={1}>
            <Button type="submit" bsSize="small">Submit</Button>
          </Col>
        </div>
      );
    };

    const options = {
      template: formLayout
    };

    const buttonSwitchText = this.state.gallery_selected ? "Edit Photos" : "View Gallery";
    const uploadPhoto = this.state.showDropzone ? (
      <Row>
        <DropZone location_id={this.props.location_info.id} upload_type='Photo'/>
      </Row> ) : "";

    const photos = this.state.photos.map((photo, i) => {
      const ref = "form" + i;
      return (
        <Row>
          <Col md={3}>
            <Image class="tour-pic" src={photo.src_url} rounded />
          </Col>
          <form onSubmit={this.__onSubmit.bind(this, i)}>
            <t.form.Form class="edit-form" ref={ref} type={FormSchema} value={photo} options={options}/>
          </form>
          <Col md={1}>
            <Button onClick={() => this.__onDelete(i)} bsSize="small">Delete</Button>
          </Col>
        </Row>
      );
    }
    );

    const selectedComponent = this.state.gallery_selected ? <Gallery photos={photo_set} /> : photos;

    return (
      <div>
        <Row>
          <h4>Photos</h4>
          <hr/>
        </Row>
        <Row style={{textAlign: 'right'}}>
          <Button onClick={() => this.setState({showDropzone: !this.state.showDropzone})}>Upload Photos</Button>
          <Button onClick={() => this.setState({gallery_selected: !this.state.gallery_selected})}>{buttonSwitchText}</Button>
        </Row>
        {uploadPhoto}
        {selectedComponent}
      </div>
    );
  }

}
