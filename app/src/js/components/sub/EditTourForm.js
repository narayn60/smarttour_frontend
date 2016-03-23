import React from 'react';
import t from 'tcomb-form';
import DropZone from './DropZone';
import { Row, Col } from 'react-bootstrap';

import NotesActions from 'NotesActions';
import NotesStore from 'NotesStore';
import connectToStores from 'alt-utils/lib/connectToStores';

const FormSchema = t.struct({
  name: t.String,
  // data: t.String,
  longitude: t.Number,
  latitude: t.Number
});

export default class EditTourForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    /* this.state = NotesStore.getState(); */
    /* this.state.values = this.props.values; */
  }

  static getStores() {
    return [NotesStore];
  }

  static getPropsFromStores() {
    return NotesStore.getState();
  }

  componentWillMount() {
    NotesStore.listen(this.onChange.bind(this));
    NotesActions.fetchNotes(this.props.values.id);
  }

  componentWillUnmount() {
    NotesStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  /* componentWillReceiveProps() {
     console.log("Received props", this.props.values);
     this.setState({
     values: this.props.values
     });
     /* NotesActions.fetchNotes(this.props.values.id); */
//}

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
          </Row>
        </div>
      );
    };
    // <Col md={6}>
    //   <div>{locals.inputs.data}</div>
    // </Col>

    const options = {
      template: formLayout,
      fields: {
        name: {
          disabled: false
        }
        // data: {
        //   label: "Information",
        //   type: 'textarea',
        //   attrs: {
        //     className: 'edit-form-textarea'
        //   }
        // }
      }
    };

    /* console.log("Hello there", this.props.values, this.state.notes);
     */
    return(
      <div>
        <h1>Information</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={this.props.values} options={options} />
          <Row>
            <div class="form-group">
              <button type="submit" class="btn btn-primary center-block">Save</button>
            </div>
          </Row>
        </form>
        <DropZone />
      </div>
    );
  }
}


export default connectToStores(EditTourForm);

