import React from 'react';
import AuthStore from 'AuthStore';
import { Row, Col, form, Input, Button } from "react-bootstrap";

export default class TourFormGuideFields extends React.Component {

  constructor(props) {
    super(props);
    const userName = AuthStore.getName().split(" ", 2)[0];
    this.state = {
      owner: userName,
      points: props.points
    };
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {

    return (
        <form>
          <Input type="text" ref="owner" label="Owner" defaultValue={this.state.owner} />
          <Input type="number" ref="points" label="Number of locations" defaultValue={this.props.fieldValues.points} onChange={this.handleChange.bind(this, 'points')}/>
          <Button class="pull-left" onClick={this.props.previousStep}>Back</Button>
          <Button bsStyle="primary" class="pull-right" onClick={this.nextStep.bind(this)}>Save &amp; Continue</Button>
        </form>
    );
  }

  nextStep() {
    var data = this.state;
    this.props.saveValues(data);
    this.props.nextStep();
  }
}
