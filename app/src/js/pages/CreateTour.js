import React from 'react';
import CreateTourForm from '../components/sub/CreateTourForm';
import { Row, Col, Input, Button } from "react-bootstrap";

export default class CreateTour extends React.Component {

  render() {	

    return(
      <div class="container">
        <h1>Create Tour</h1>
        <CreateTourForm />
      </div>
    );
  }
}
