import React from 'react';
import t from 'tcomb-form';
import DropZone from './DropZone';
import { Row, Col } from 'react-bootstrap';

const FormSchema = t.struct({
  name: t.String,
  data: t.String,
  long: t.String,
  lat: t.String
});

export default class EditTourForm extends React.Component {


  render() {

    const formLayout = (locals) => {
      return (
        <div>
          <Row>
            <Col xs={6} md={6}>
              <div>{locals.inputs.name}</div>
              <div>{locals.inputs.long}</div>
              <div>{locals.inputs.lat}</div>
            </Col>
            <Col xs={6} md={6}>
              <div>{locals.inputs.data}</div>
            </Col>
          </Row>
        </div>
      );
    };

    const options = {
      template: formLayout,
      disabled: true
    };

    return(
      <div>
        <h1>Information</h1>
        <form>
          <t.form.Form ref="form" type={FormSchema} value={this.props.values} options={options} />
          <Row>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </Row>
        </form>
        <DropZone />
      </div>

    );
  }
}
