import React from 'react';
import t from 'tcomb-form';
import DropZone from './DropZone';
import { Row, Col } from 'react-bootstrap';
import NotesActions from 'NotesActions';

const FormSchema = t.struct({
  name: t.String,
  bio: t.String,
  longitude: t.Number,
  latitude: t.Number,
  notes_list: t.list(t.String)
});

export default class EditTourForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
    const formValue = this.refs.form.getValue();
    const location_id = this.props.values.id;
    let update_value = {
      note: formValue.bio
    };
    NotesActions.patchBio(update_value, this.props.tour_id, location_id);
  }

  render() {

    const formLayout = (locals) => {
      return (
        <div>
          <Row>
            <Col md={6}>
              <div>{locals.inputs.name}</div>
              <div>{locals.inputs.longitude}</div>
              <div>{locals.inputs.latitude}</div>
            </Col>
            <Col md={6}>
              <div>{locals.inputs.bio}</div>
            </Col>
          </Row>
          <Row>
            <div>{locals.inputs.notes_list}</div>
          </Row>
        </div>
      );
    };

    const options = {
      template: formLayout,
      fields: {
        name: {
          disabled: true
        },
        longitude: {
          disabled: true
        },
        latitude: {
          disabled: true
        },
        bio: {
          label: "Information",
          type: 'textarea',
          attrs: {
            autoFocus: true,
            className: 'edit-form-textarea'
          }
        },
        notes_list: {
          label: "Notes"
        }
      }
    };

    const notes = this.props.values.notes.map((note) => note.note);

    // let values = this.props.values + this.props.location_info;
    const values = Object.assign(
      this.props.values,
      this.props.location_info,
      {
        notes_list: notes
      }
    );

    return(
      <div>
        <h1>Information</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={values} options={options} />
          <Row>
            <div class="form-group">
              <button type="submit" class="btn btn-primary center-block">Update Tour</button>
            </div>
          </Row>
        </form>
        <DropZone location_id={this.props.values['id']}/>
      </div>
    );
  }
}
