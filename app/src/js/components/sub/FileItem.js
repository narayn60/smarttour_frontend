import React from 'react';
import {
  Grid,
  Row, Col,
  Image,
  Button,
  Input
} from 'react-bootstrap';
import t from 'tcomb-form';
import PhotoActions from 'PhotoActions';
import DropZone from './DropZone';
import PhotoGallery from './PhotoGallery';

const FormSchema = t.struct({
  description: t.String
});

export default class PhotoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery_selected: true,
      files: props.files,
      showDropzone: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      files: this.props.files
    });
  }

  __onSubmit(i, event) {
    event.preventDefault();
    const answer = confirm("Update data");
    if (answer) {
      const value = this.refs["form" + i].getValue();
      const photo_info = this.state.files[i];
      PhotoActions.updateCaption(photo_info.location, photo_info.id, value.description);
    } else {
      this.setState({
        files: this.props.files
      });
    }
  }

  __onDelete(i) {
    const answer = confirm("Delete photo");
    if (answer) {
      const photo_info = this.state.files[i];
      PhotoActions.deletePhoto(this.props.location_info.id, photo_info.id);
    }
  }

  render() {

    if ( this.props.files.length === 0 ) {
      return (
        <div>
          <h4>{this.props.file_type + 's'}</h4>
          <hr/>
        <DropZone location_id={this.props.location_info.id} upload_type={this.props.file_type}/>
          No Files
        </div>
      );
    }

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

    const buttonSwitchText = this.state.gallery_selected ? "Edit " + this.props.file_type + "s" : "View Gallery";
    const uploadPhoto = this.state.showDropzone ? (
      <Row>
        <DropZone location_id={this.props.location_info.id} upload_type={this.props.file_type}/>
      </Row> ) : "";

    const files = this.state.files.map((file, i) => {
      const ref = "form" + i;
      return (
        <Row>
          <Col md={3}>
            <Image class="tour-pic" src={file.src_url} rounded />
          </Col>
          <form onSubmit={this.__onSubmit.bind(this, i)}>
            <t.form.Form class="edit-form" ref={ref} type={FormSchema} value={file} options={options}/>
          </form>
          <Col md={1}>
            <Button onClick={() => this.__onDelete(i)} bsSize="small">Delete</Button>
          </Col>
        </Row>
      );
    }
    );

    const gallery_component = {
      'Photo': <PhotoGallery photos={this.props.files}/>,
      'Video': this.props.files.map((video) => (
        <Row>
          <h4>{video.description}</h4>
          <video controls style={{height: '250px', width: '100%'}}>
            <source src={video.src_url} type="video/mp4"/>
          </video>
        </Row>
      )),
      'Audio': this.props.files.map((audio_track) => (
        <Row>
          <h4>{audio_track.description}</h4>
          <audio controls>
            <source src={audio_track.src_url} type="audio/mp3"/>
          </audio>
        </Row>
      ))
    };

    const selectedComponent = this.state.gallery_selected ? gallery_component[this.props.file_type] : files;

    return (
      <div>
        <Row>
          <h4>{this.props.file_type + 's'}</h4>
          <hr/>
        </Row>
        <Row style={{textAlign: 'right'}}>
          <Button onClick={() => this.setState({showDropzone: !this.state.showDropzone})}>Upload Files</Button>
          <Button onClick={() => this.setState({gallery_selected: !this.state.gallery_selected})}>{buttonSwitchText}</Button>
        </Row>
        {uploadPhoto}
        {selectedComponent}
      </div>
    );
  }

}
