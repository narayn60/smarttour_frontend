import React from 'react';
import TourStore from 'TourStore';
import TourActions from 'TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Tour from '../sub/Tour';
import { Link } from 'react-router';
import { Row, Col, Button, DropdownButton, MenuItem } from "react-bootstrap";


export default class TourContainer extends React.Component {

  constructor() {
    super();
    this.state = TourStore.getState();
    this.state = {'searchString': ''}; //TODO: Why initialised twice?
    this.filterByName = this.filterByName.bind(this);
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

  filterTours(filter) {
    //TODO...filter tours
    console.log('filter by ' + filter);
  }

  filterByName(tour) {
    if (tour.title.toLowerCase().match( this.state.searchString )) {
      return true;
    }
    return false;
  }

  handleSearchChange(e) {
    this.setState({searchString: e.target.value});
  }


  render() {
    //TODO get from source
    var genres = ['Entertainment', 'Historical', 'Art', 'Food & Drink', 'Educational', 'Adult', 'Different'];
    const genreComponent = genres.map((genre, i) => <MenuItem eventKey={i} key={i} onClick={this.filterTours.bind(this, genre)}>{genre}</MenuItem>);

    var ToursComponent = this.state.tours.map((tour, i) => <Tour key={i} tour={tour}/>);
    var searchString = this.state.searchString.trim().toLowerCase();
    var filteredTours = [];

    if(searchString.length > 0) {
      filteredTours = this.state.tours.filter(this.filterByName);
      ToursComponent = filteredTours.map((tour, i) => <Tour key={i} tour={tour}/>);
    }

    return (
      <div>
        <Row class="text-center">
          <h2 class="section-heading"> Browse all tours </h2>
          <h3 class="section-subheading"> Revolutionize the novel </h3>
        </Row>
        <Row>
          <input class="searchTour" type="text" value={this.state.searchString} onChange={this.handleSearchChange.bind(this)} placeholder="search" />
        </Row>
        <Row>
          <Col md={4} mdOffset={4} class="text-center search-button-group">
            <Button bsStyle="primary" onClick={this.filterTours.bind(this, 'popular')}> Popular </Button>
            <Button bsStyle="primary" onClick={this.filterTours.bind(this, 'recent')}> Recent </Button>
            <DropdownButton bsStyle="primary" title="Genre" id="bg-nested-dropdown">
              {genreComponent}
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          {ToursComponent}
        </Row>
      </div>
    );
  }
}

export default connectToStores(TourContainer);
