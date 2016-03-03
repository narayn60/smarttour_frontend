import React from 'react';
// import { connect } from 'react-redux';
// import { Field } from 'react-redux-form';
import { form, Button, Input } from "react-bootstrap";


class CreateTourForm extends React.Component {
 
  render() {
    let { tour } = this.props;

    return (

      <form name="sentMessage" id="contactForm" noValidate>
          <div class="row">
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button type="submit" class="btn btn-xl">Submit Tour - { tour.name }</button>
              </div>
          </div>
      </form>

    );
  }
}

const selector = (state) => ({ tour: state.tour });
