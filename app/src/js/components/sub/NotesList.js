import React from 'react';
import Gravatar from 'react-gravatar';
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

    /* <Row>
       <Button onClick={() => this.__handleDelete(note.id, note.location)}>Delete</Button> */
    /* {note.note} */

    const gravatarSize = 75;

    const notes = this.props.notes.map((note) => {

      const checkBox = "checkbox" + note.id;

      return (

        <tr ondata-status="pagado">
          <td>
            <div class="ckbox">
              <input onClick={() => this.__handleDelete(note.id, note.location)} type="checkbox" id={checkBox}/>
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
                      <button type="button" class="btn btn-success btn-filter" data-target="pagado">Pagado</button>
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
