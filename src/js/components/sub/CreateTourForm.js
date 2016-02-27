import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';
import { form, Button, Input } from "react-bootstrap";


class CreateTourForm extends React.Component {
 
  render() {
    let { tour } = this.props;

    return (

      <form name="sentMessage" id="contactForm" noValidate>
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <Field model="tour.owner">
                          <input type="text" class="form-control" placeholder="Your Name *" id="name"/>
                      </Field>
                  </div>
                  <div class="form-group">
                      <Field model="tour.name">
                          <input type="text" class="form-control" placeholder="Name of the tour *" id="genre"/>
                      </Field>
                  </div>
                  <div class="form-group">
                      <Field model="tour.locations">
                          <input type="number" class="form-control" placeholder="Number of locations *" id="locations"/>
                      </Field>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <Field model="tour.bio">
                        <textarea class="form-control" placeholder="Description of the tour *" id="bio" required data-validation-required-message="Please enter a bio."></textarea>
                        <p class="help-block text-danger"></p>
                      </Field>
                  </div>
              </div>
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

export default connect(selector)(CreateTourForm);