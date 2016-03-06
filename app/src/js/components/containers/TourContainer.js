import React from 'react';
import TourStore from 'TourStore';
import TourActions from 'TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Tour from '../sub/Tour';
import { Link } from 'react-router';
import { Row, Col } from "react-bootstrap";


export default class TourContainer extends React.Component {

  constructor() {
    super();
    this.state = TourStore.getState();
  }

  static getStores() {
    return [TourStore];
  }

  static getPropsFromStores() {
    return TourStore.getState();
  }

  componentWillMount() {
    TourStore.listen(this.onChange.bind(this));
    TourActions.fetchTours();
  }

  componentWillUnmount() {
    TourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  createTour() {
    TourActions.updateTours(Date.now());
  }

  fetchTours() {
    TourActions.fetchTours();
  }


  render() {
    const ToursComponent = this.state.tours.map((tour, i) => <Tour key={i} tour={tour}/>);

    return (
      <div>
        <Row class="text-center">
          <h2 class="section-heading"> Browse all tours </h2>
          <h3 class="section-subheading"> Revolutionize the novel </h3>
        </Row>
        <Row>
          {ToursComponent}
        </Row>
      </div>
    );
  }
}

export default connectToStores(TourContainer);

