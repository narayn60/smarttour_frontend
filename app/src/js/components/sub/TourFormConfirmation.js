import React from 'react'
import { Button } from "react-bootstrap";

export default class TourFormConfirmation extends React.Component {

  render() {
    return (
      <div>
        <h2>Confirm {this.props.fieldValues.name}</h2>
        <ul>
          <li><b>Name:</b> {this.props.fieldValues.name}</li>
          <li><b>Bio:</b> {this.props.fieldValues.bio}</li>
          <li><b>Owner:</b> {this.props.fieldValues.owner}</li>
          <li><b>Genre:</b> {this.props.fieldValues.genre}</li>
          <li><b>Points:</b> {this.props.fieldValues.points}</li>
          <li><b>Picture:</b> {this.props.fieldValues.picture}</li>
        </ul>
          <Button class="btn -default pull-left" onClick={this.props.previousStep}>Back</Button>
          <Button bsStyle="primary" class="pull-right" onClick={this.props.submitRegistration}>Submit Tour</Button>
      </div>
    )
  }

}