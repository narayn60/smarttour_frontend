import React from 'react';
import t from 'tcomb-form';
import { Row, Col } from 'react-bootstrap';
import LocationActions from 'LocationActions';

const FormSchema = t.struct({
  name: t.String,
  about: t.maybe(t.String),
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

    return(
      <div>
        <h4>Information</h4>
        <hr/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={this.props.values} options={options} />
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
