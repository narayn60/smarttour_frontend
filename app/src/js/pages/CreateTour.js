import React from 'react';
import CreateTourForm from '../components/sub/CreateTourForm';
import { Row, Col, Grid } from "react-bootstrap";

export default class CreateTour extends React.Component {

  render() {

    return(
      <Grid>
        <Row>
          <Col md={4} mdOffset={4} class="create_tour">
            <h1>Create Tour</h1>
            <CreateTourForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}
