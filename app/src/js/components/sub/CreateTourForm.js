import React from 'react';
import { Row, Col, form, Button, Input } from "react-bootstrap";
import t from 'tcomb-form';
import TourFormSuccess from './TourFormSuccess';
import connectToStores from 'alt-utils/lib/connectToStores';
import FormActions from 'FormActions';
import FormStore from 'FormStore';
import AuthStore from 'AuthStore';

const Positive = t.refinement(t.Number, (n) => n >= 1); //TODO: Set maximum number

const Genres = t.enums({
  En: 'Entertainment',
  Hi: 'Historical',
  Ar: 'Art',
  Fd: 'Food & Drink',
  Ed: 'Educational',
  Ad: 'Adult',
  Ot: 'Other'
});

const FormSchema = t.struct({
  name: t.String,
  genre: Genres,
  bio: t.String,
  // owner: t.maybe(t.String),
  points: Positive
  // email: t.String
});


export default class CreateTourForm extends React.Component {

  constructor() {
    super();
    this.state = {
      success: false
      // value: {
      //   email: AuthStore.getEmail()
      // }
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
      console.log('ID of new tour is: ' + state.tour_id)
      this.state.success = true
    }
  }


  componentWillMount() {
    FormStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    FormStore.unlisten(this.onChange.bind(this));
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({
        // success: true,
        values: value
      });
      FormActions.createTour(value);
    }
  }
  
  render() {
    let { tour } = this.props;

    const formLayout = (locals) => {
      return (
        <div>
          <Row>
            <Col md={4} mdOffset={4}>
              <div>{locals.inputs.name}</div>
              <div>{locals.inputs.genre}</div>
              <div>{locals.inputs.bio}</div>
              // <div>{locals.inputs.email}</div>
              <div>{locals.inputs.points}</div>
            </Col>
          </Row>
        </div>
      );
    };

    const options = {
      template: formLayout,
      fields: {
        // owner: {
        //   disabled: true
        // },
        points: {
          error: "Field needs to be a number greater than 1"
        }
        // email: {
        //   disabled: true
        // }
      }
    };

    const completed = this.state.success ? <TourFormSuccess fieldValues={this.state.values} newTourID={this.state.tour_id}/> : "";

    return (

      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <t.form.Form class="edit-form" ref="form" type={FormSchema} value={this.state.value} options={options}/>
          <Row>
            <div class="form-group">
              <Button type="submit" bsStyle="primary" class="center-block">Submit</Button>
            </div>
          </Row>
          <Row>
            {completed}
          </Row>
        </form>
      </div>

    );
  }
}

export default connectToStores(CreateTourForm);


// const selector = (state) => ({ tour: state.tour });

// <form name="sentMessage" id="contactForm" noValidate>
//     <div class="row">
//         <div class="clearfix"></div>
//         <div class="col-lg-12 text-center">
//             <div id="success"></div>
//             <button type="submit" class="btn btn-xl">Submit Tour - { tour.name }</button>
//         </div>
//     </div>
// </form>
