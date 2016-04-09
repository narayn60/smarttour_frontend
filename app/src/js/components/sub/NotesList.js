import React from 'react';
import Gravatar from 'react-gravatar';
import { Row, Col, Button } from "react-bootstrap";
import NotesActions from 'NotesActions';

export default class NotesList extends React.Component {

  constructor(props) {
    super(props);
    this.checked = new Set();
  }

  __handleDelete() {
    const answer = confirm("Are you sure");
    if (answer) {
      const notes = Array.from(this.checked);
      NotesActions.deleteNotes(this.props.tour_id, this.props.location.id, notes);
      this.checked.clear();
    }
  }

  __handleChecked(note_id) {
    this.checked.has(note_id) ? this.checked.delete(note_id) : this.checked.add(note_id);
  }

  render() {

    if (this.props.notes.length === 0) {
      return (
        <div>
          No Notes Created
        </div>
      );
    }

    const gravatarSize = 75;

    const notes = this.props.notes.map((note) => {

      const checkBox = "checkbox" + note.id;

      return (

        <tr ondata-status="pagado">
          <td>
            <div class="ckbox">
              <input onClick={() => this.__handleChecked(note.id)} type="checkbox" id={checkBox}/>
              <label for={checkBox}></label>
            </div>
          </td>
          <td>
            <a href="javascript:;" class="star">
              <i class="fa fa-star"></i>
            </a>
          </td>
          <td>
            <div class="media">
              <a href="#" class="pull-left">
                <Gravatar class="media-photo" email={note.guide.email} size={gravatarSize} https />
              </a>
              <div class="table-body">
                <span class="media-meta pull-right">Febrero 13, 2016</span>
                <h4 class="title">
                  {note.title}
                </h4>
                <p class="summary">{note.note}</p>
              </div>
            </div>
          </td>
        </tr>
      );
    }
    );

    return (
      <div class="container">
        <Row>
          <section class="content">
            <h1>Notes</h1>
            <div>
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="pull-right">
                    <div class="btn-group">
                      <Button onClick={() => this.__handleDelete()} data-target="pagado">Delete Selected</Button>
                    </div>
                  </div>
                  <div class="table-container">
                    <table class="table table-filter">
                      <tbody>
                        {notes}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Row>
      </div>
    );
  }

}
