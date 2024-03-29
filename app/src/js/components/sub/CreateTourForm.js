import React from 'react';
import { Row, Col, form, Button, Input } from "react-bootstrap";
import t from 'tcomb-form';
import TourFormSuccess from './TourFormSuccess';
import connectToStores from 'alt-utils/lib/connectToStores';
import FormActions from 'FormActions';
import FormStore from 'FormStore';
import AuthStore from 'AuthStore';

const Positive = t.refinement(t.Number, (n) => (n >= 1 && n <= 200)); //TODO: Set maximum number

const Genres = t.enums({
  Entertainment: 'Entertainment',
  Historical: 'Historical',
  Art: 'Art',
  FoodandDrink: 'Food & Drink',
  Educational: 'Educational',
  Adult: 'Adult',
  Other: 'Other'
});

const FormSchema = t.struct({
  name: t.String,
  genre: Genres,
  bio: t.String,
  points: Positive,
  photo: t.maybe(t.form.File)
});


export default class CreateTourForm extends React.Component {

  constructor() {
    super();
    this.state = {
      success: false,
      loading: false
    };
    this.state = FormStore.getState();

  }

  static getStores() {
    return [FormStore];
  }

  static getPropsFromStores() {
    return FormStore.getState();
  }

  onChange(state) {
    this.setState(state);
    if (state.tour_id != null) {
      this.setState({
        success: true
      });
    }
  }


  componentDidMount() {
    FormStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    FormStore.unlisten(this.onChange.bind(this));
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.refs.form.getValue();
    var formData = new FormData();
    if (value) {
      this.setState({
        loading: true,
        values: value
      });
      for (var k in value) {
        var v = value[k];
        if (t.form.File.is(v)) {
          formData.append(k, v, v.name);
        } else {
          if (v) {
            formData.append(k, v);
          }
        }
      }
      FormActions.createTour(formData);
    }
  }
  
  render() {

    const formLayout = (locals) => {
      return (
        <div>
          <div>{locals.inputs.name}</div>
          <div>{locals.inputs.genre}</div>
          <div>{locals.inputs.bio}</div>
          <div>{locals.inputs.points}</div>
          <div>{locals.inputs.photo}</div>
        </div>
      );
    };

    const options = {
      template: formLayout,
      fields: {
        name: {
          label: "Tour Name"
        },
        points: {
          label: "Number of Locations for Tour",
          error: "Field needs to be a number between 1 and 200"
        },
        photo: {
          type: 'file'
        },
        bio: {
          label: "About Tour"
        }
      }
    };

    const completed = this.state.success ? <TourFormSuccess fieldValues={this.state.values} newTourID={this.state.tour_id}/> : "";
    const submitText = this.state.loading ? "Creating..." : "Submit";

    const submissionButton = this.state.success ? "" : (
      <Row>
        <div class="form-group">
          <Button type="submit" bsStyle="primary" class="center-block btn-xl">{submitText}</Button>
        </div>
      </Row>
    );

    return (

      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={this.state.values} options={options}/>
          {submissionButton}
          <Row>
            {completed}
          </Row>
        </form>
      </div>

    );
  }
}

export default connectToStores(CreateTourForm);
