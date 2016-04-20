import React from 'react';
import { Row, Button } from "react-bootstrap";
import DropZone from './DropZone';

export default class VideoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery_selected: true,
      videos: props.videos,
      showDropzone: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      videos: this.props.videos
    });
  }

  render() {

    if ( this.props.videos.length === 0 ) {
      return (
        <div>
          <h4>Video</h4>
          <hr/>
          <DropZone location_id={this.props.location_info.id} upload_type='Video'/>
          No Video
        </div>
      );
    }

    const uploadVideo = this.state.showDropzone ? (
      <Row>
        <DropZone location_id={this.props.location_info.id} upload_type='Video'/>
      </Row> ) : "";

    const videos_tracks = this.props.videos.map((video) => (
      <Row>
        <video controls style={{height: '250px', width: '100%'}}>
          <source src={video.src_url} type="video/mp4"/>
        </video>
      </Row>
    ));
    console.log("Video", this.props.videos);

    return (
      <div>
        <Row>
          <h4>Video</h4>
          <hr/>
        </Row>
        <Row style={{textAlign: 'right'}}>
          <Button onClick={() => this.setState({showDropzone: !this.state.showDropzone})}>Upload Video</Button>
        </Row>
        {uploadVideo}
        {videos_tracks}
      </div>
    );
  }

}
