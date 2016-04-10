import React from 'react';
import { Row, Col, Grid } from "react-bootstrap";

import TourMap from '../gmaps/TourMap';
import LocationTable from '../sub/LocationTable';
import ReviewList from '../sub/ReviewList';

export default class PersonalTourOverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  __handleClick(index) {
    this.setState({selected: index});
  }

  render() {

    if (this.props.locations.length === 0) {
      return (
        <div>
          No Locations Created
        </div>
      );
    }

    return (
      <Grid fluid={true}>
        <Row style={{height: '400px'}}>
          <Col md={6} style={{height: '100%'}}>
            <TourMap
              handleClick={this.__handleClick.bind(this)}
              locations={this.props.locations}
              selected={this.state.selected}/>
          </Col>
          <Col md={6}>
            Placholder for side, will hold tour overview
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LocationTable locations={this.props.locations} onClick={this.__handleClick.bind(this)}/>
          </Col>
          <Col md={6}>
            <ReviewList />
          </Col>
        </Row>
      </Grid>
    );
  }
}
