import React from 'react';
import TourFormFields from '../components/sub/TourFormFields';
import TourFormGuideFields from '../components/sub/TourFormGuideFields';
import TourFormConfirmation from '../components/sub/TourFormConfirmation';
import TourFormSuccess from '../components/sub/TourFormSuccess';
import { Row, Col, Input, Button } from "react-bootstrap";

export default class CreateTour extends React.Component {

  constructor() {
    super();
    this.state = 
      {
        step: 1,
        name: null,
        genre: null,
        bio: null,
        points: null,
        owner: null
      };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.submitRegistration = this.nextStep.bind(this);
    this.currentStep = this.currentStep.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }

  saveValues(fields) {
    this.setState(fields);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1
    });
  }

  submitRegistration() {
    this.nextStep();
  }

  currentStep() {
    switch(this.state.step) {
    case 1:
      return <TourFormFields fieldValues={this.state} nextStep={this.nextStep} saveValues={this.saveValues}/>;
    case 2:
      return <TourFormGuideFields fieldValues={this.state} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues}/>;
    case 3:
      return <TourFormConfirmation fieldValues={this.state} previousStep={this.previousStep} submitRegistration={this.submitRegistration}/>;
    case 4:
      return <TourFormSuccess fieldValues={this.state}/>;
    }
  };

  render() {	
    var style = { width : (this.state.step / 4 * 100) + '%' };

    return(
      <div>
        <Row>
          <Col md={4} mdOffset={4}>
            <h2 class="section-heading text-center"> Create a tour </h2>
            <h3 class="section-subheading text-center"> Complete the form </h3>
            <span class="progress-step">Step {this.state.step}</span>
            <progress class="progress" style={style}></progress>
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={4}>
            {this.currentStep()}
          </Col>
        </Row>
		  </div>
    );
  }
}

