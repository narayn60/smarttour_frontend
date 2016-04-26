import React from 'react';
import { Row } from 'react-bootstrap';

export default class NoteSection extends React.Component {

  render() {

    var note_area = "No note created";

    if (this.props.note.length > 0) {
      const note = this.props.note[0].note;
      note_area = (
        <div>
          {note}
        </div>
      )
    }

    return (
      <div>
        <Row>
          <h4>Note</h4>
          <hr/>
        </Row>
        {note_area}
      </div>
    )
  }

}
