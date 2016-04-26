import React from 'react';
import { Row, Image } from 'react-bootstrap';
import AuthStore from 'AuthStore';
import Global from 'Global';

export default class NoteSection extends React.Component {

  render() {

    var note_area = "No note created";


    if (this.props.note.length > 0) {
      const note = this.props.note[0].note;
      const photo_path = this.props.note[0].photo_path_s3;
      var photo_image;
      if (photo_path) {
        const note_photo = Global.backend_url + AuthStore.getUid() + "/" + photo_path;
        photo_image = (
          <Row class="text-center">
            <Image class="img-responsive" src={note_photo}/>
          </Row>
        );
      }

      note_area = (
        <div>
          {photo_image}
          {note}
        </div>
      );
    }

    return (
      <div>
        <Row>
          <h4>Note</h4>
          <hr/>
        </Row>
        {note_area}
      </div>
    );
  }

}
