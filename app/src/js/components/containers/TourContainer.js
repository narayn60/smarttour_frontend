import React from 'react';
import TourStore from 'TourStore';
import TourActions from 'TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Tour from '../sub/Tour';
import TourNavBar from '../sub/TourNavBar';
import { Link } from 'react-router';
import { Grid, Row, Col, Button, DropdownButton, MenuItem } from "react-bootstrap";


export default class TourContainer extends React.Component {

  constructor() {
    super();
    this.state = TourStore.getState();
    this.state = {searchString: '', genre: ''};
    this.filterByName = this.filterByName.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
  }

  static getStores() {
    return [TourStore];
  }

  static getPropsFromStores() {
    return TourStore.getState();
  }

  componentDidMount() {
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
    if (tour.name.toLowerCase().match( this.state.searchString.toLowerCase() )) {
      return true;
    }
    return false;
  }

  filterByGenre(tour) {
    if (tour.genre.toLowerCase().match( this.state.genre.toLowerCase() )) {
      return true;
    }
    return false;
  }

  handleSearchChange(e) {
    this.setState({searchString: e.target.value});
  }

  handleGenreChange(genre) {
    if (genre === 'All') {
      this.setState({genre: ''})
    }
    else {
      this.setState({genre: genre})
    }
  }


  render() {

    if (!this.state.tours) {
      return (
          <div>
          <i class="fa fa-spin fa-spinner"></i>
          Loading Tours
        </div>
      );
    }

    var ToursComponent = this.state.tours.map((tour, i) => <Tour key={i} tour={tour}/>);
    var searchString = this.state.searchString.trim().toLowerCase();
    var filteredTours = this.state.tours;

    if(searchString.length > 0) {
      filteredTours = filteredTours.filter(this.filterByName);
    }

    if(this.state.genre.length > 0) {
      filteredTours = filteredTours.filter(this.filterByGenre);
    }

    ToursComponent = filteredTours.map((tour, i) => <Tour key={i} tour={tour}/>);

    return (
      <div>
        <div class="border_box" id="browse_title">
          <Row class="text-center">
            <h2 class="section-heading"> Tours </h2>
            <h3 class="section-subheading"> Discover your world </h3>
          </Row>
          <Row>
            <input class="searchTour" type="text" value={this.state.searchString} onChange={this.handleSearchChange.bind(this)} placeholder="search" />
          </Row>
          <Row>
            <Col md={4} mdOffset={4} class="text-center search-button-group">
              <Button bsStyle="primary" onClick={this.filterTours.bind(this, 'popular')}> Popular </Button>
              <Button bsStyle="primary" onClick={this.filterTours.bind(this, 'recent')}> Recent </Button>
            </Col>
          </Row>
        </div>
        <div class="border_box" id="browse_results">
          <Row>
            <TourNavBar tours={this.state.tours} onClick={this.handleGenreChange.bind(this)}/>
          </Row>
          <Row>
            {ToursComponent}
          </Row>
        </div>
      </div>
    );
  }
}

export default connectToStores(TourContainer);
