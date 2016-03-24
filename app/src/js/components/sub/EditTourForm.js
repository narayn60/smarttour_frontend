import React from 'react';
import t from 'tcomb-form';
import DropZone from './DropZone';
import { Row, Col } from 'react-bootstrap';

const FormSchema = t.struct({
  name: t.String,
  data: t.String,
  longitude: t.Number,
  latitude: t.Number
});

export default class EditTourForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
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
              <div>{locals.inputs.data}</div>
            </Col>
          </Row>
        </div>
      );
    };

    const options = {
      template: formLayout,
      fields: {
        name: {
          disabled: false
        },
        data: {
          label: "Information",
          type: 'textarea',
          attrs: {
            className: 'edit-form-textarea'
          }
        }
      }
    };

    let values = this.props.values;
    console.log("Values are", values);
    values.data = this.props.notes.length === 1 ? this.props.notes[0].note : "";

    return(
      <div>
        <h1>Information</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={values} options={options} />
          <Row>
            <div class="form-group">
              <button type="submit" class="btn btn-primary center-block">Save</button>
            </div>
          </Row>
        </form>
        <DropZone location_id={this.props.values['id']}/>
      </div>
    );
  }
}
