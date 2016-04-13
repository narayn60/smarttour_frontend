import React from 'react';
import CreateTourForm from '../components/sub/CreateTourForm';
import { Row, Col, Grid } from "react-bootstrap";

export default class CreateTour extends React.Component {

  render() {

    return(
      <div class="backgroundImageContainer" id="create_tour_background">
        <div class="background-image header_1"></div>
        <header>
        <Grid class="content" id="create_tour">
          <Row>
            <h1>Create Tour</h1>
          </Row>
          <Row>
            <Col md={4} mdOffset={4} class="border_box create_tour">
              <CreateTourForm />
            </Col>
          </Row>
        </Grid>
        </header>
      </div>
    );
  }
}
