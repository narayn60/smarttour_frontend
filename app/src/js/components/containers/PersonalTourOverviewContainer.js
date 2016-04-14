import React from 'react';
import { Row, Col, Grid } from "react-bootstrap";

import TourMap from '../gmaps/TourMap';
import LocationTable from '../sub/LocationTable';
import ReviewList from '../sub/ReviewList';
import TourOverview from '../sub/TourOverview';

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
      <div>
        <Row>
          <Col md={6} style={{height: '100%'}}>
            <Row style={{height: '400px'}}>
              <TourMap
                handleClick={this.__handleClick.bind(this)}
                locations={this.props.locations}
                selected={this.state.selected}/>
            </Row>
            <Row>
              <LocationTable locations={this.props.locations} onClick={this.__handleClick.bind(this)}/>
            </Row>
          </Col>
          <Col md={6}>
            <ReviewList reviews={this.props.tour.reviews}/>
          </Col>
        </Row>
      </div>
    );
  }
}
