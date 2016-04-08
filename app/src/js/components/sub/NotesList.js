import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import NotesActions from 'NotesActions';

export default class NotesList extends React.Component {

  constructor(props) {
    super(props);
  }

  __handleDelete(note_id, location_id) {
    console.log(note_id, location_id);
    const answer = confirm("Are you sure");
    if (answer) {
      NotesActions.deleteNote(this.props.tour_id, note_id, location_id);
    }
  }

  render() {

    console.log(this.props.notes);
    const notes = this.props.notes.map((note) => {
      return (
        <div>
          {note.note}
          {note.id}
          <Button onClick={() => this.__handleDelete(note.id, note.location)}>Delete</Button>
        </div>
      );
    }
    );

    return (
      <div>
        {notes}
      </div>
    );
  }

}
