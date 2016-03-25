import React from 'react';
import t from 'tcomb-form';
import DropZone from './DropZone';
import { Row, Col } from 'react-bootstrap';

// TODO: Change this to flux
import Global from 'Global';
import AuthStore from 'AuthStore';
import axios from 'axios';

const FormSchema = t.struct({
  name: t.String,
  note: t.String,
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
    const formValue = this.refs.form.getValue();
    const location_id = this.props.values.id;
    let update_value = {
      note: formValue.note
    };
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/';
    axios.patch(url, update_value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw error;
      });
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
              <div>{locals.inputs.note}</div>
            </Col>
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
        note: {
          label: "Information",
          type: 'textarea',
          attrs: {
            className: 'edit-form-textarea'
          }
        }
      }
    };

    let values = this.props.values;

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
