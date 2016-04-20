import React from 'react';
import { Row, Button } from "react-bootstrap";
import DropZone from './DropZone';

export default class AudioItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery_selected: true,
      audio: props.audio,
      showDropzone: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      audio: this.props.audio
    });
  }

  render() {

    if ( this.props.audio.length === 0 ) {
      return (
        <div>
          <h4>Audio</h4>
          <hr/>
          <DropZone location_id={this.props.location_info.id} upload_type='Audio'/>
          No Audio
        </div>
      );
    }

    const uploadAudio = this.state.showDropzone ? (
      <Row>
        <DropZone location_id={this.props.location_info.id} upload_type='Audio'/>
      </Row> ) : "";

    const audio_tracks = this.props.audio.map((audio_track) => (
      <audio controls>
        <source src={audio_track.src_url} type="audio/mp3"/>
      </audio>
    ));
    console.log("Audio", this.props.audio);

    return (
      <div>
        <Row>
          <h4>Audio</h4>
          <hr/>
        </Row>
        <Row style={{textAlign: 'right'}}>
          <Button onClick={() => this.setState({showDropzone: !this.state.showDropzone})}>Upload Audio</Button>
        </Row>
        {uploadAudio}
        {audio_tracks}
      </div>
    );
  }

}
