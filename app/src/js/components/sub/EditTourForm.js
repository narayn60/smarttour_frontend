import React from 'react';
import t from 'tcomb-form';
import { Row, Col } from 'react-bootstrap';
/* import NotesActions from 'NotesActions'; */
import LocationActions from 'LocationActions';

const FormSchema = t.struct({
  note: t.String,
  name: t.String,
  about: t.String,
  longitude: t.Number,
  latitude: t.Number
});

export default class EditTourForm extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    const formValue = this.refs.form.getValue();
    const location_id = this.props.values.id;
    let update_value = {
      name: formValue.name,
      about: formValue.about
    };
    LocationActions.updateValues(update_value, this.props.tour_id, location_id);
  }

  render() {

    const formLayout = (locals) => {
      return (
        <div>
          <Row>
          {locals.inputs.note}
          </Row>
          <Row>
            <Col md={6}>
              <div>{locals.inputs.name}</div>
              <div>{locals.inputs.longitude}</div>
              <div>{locals.inputs.latitude}</div>
            </Col>
            <Col md={6}>
              <div>{locals.inputs.about}</div>
            </Col>
          </Row>
        </div>
      );
    };

    const options = {
      template: formLayout,
      fields: {
        note: {
          label: "Note"
        },
        name: {
          disabled: false
        },
        longitude: {
          disabled: true
        },
        latitude: {
          disabled: true
        },
        about: {
          label: "Information",
          type: 'textarea',
          attrs: {
            autoFocus: true,
            className: 'edit-form-textarea'
          }
        },
      }
    };

    var note = "";
    if (this.props.values.note.length > 1) {
      note = this.props.values.note[0].note;
    }
    const values = Object.assign(
      {},
      this.props.values,
      {'note': note}
    );



    return(
      <div>
        <h4>Information</h4>
        <hr/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={values} options={options} />
          <Row>
            <div class="form-group">
              <button type="submit" class="btn btn-primary center-block">Update Tour</button>
            </div>
          </Row>
        </form>
      </div>
    );
  }
}
